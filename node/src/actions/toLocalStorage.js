import axios from "axios";
import {
  SAVE_BOOKMARK_TO_LOCAL,
  READ_BOOKMARKS_FROM_LOCAL,
  READ_BOOKMARK_FROM_LOCAL,
  UPDATE_BOOKMARK_TO_LOCAL
} from ".";

const ROOT_URL = "http://localhost:8000/api";

export const saveBookmarkToLocal = values => async dispatch => {
  let bookmarks = {};
  if (localStorage.getItem("bookmarks") != null) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  }
  const id = Object.keys(bookmarks).length;
  const ogp = await axios.post(`${ROOT_URL}/bookmark-for-local/${id}/`, values);

  bookmarks[id] = ogp.data
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  dispatch({ type: SAVE_BOOKMARK_TO_LOCAL, bookmarks });
};

export const readBookmarksFromLocal = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  return { type: READ_BOOKMARKS_FROM_LOCAL, bookmarks };
};

export const getBookmarkFromLocal = id => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  const bookmark = bookmarks[id];
  return { type: READ_BOOKMARK_FROM_LOCAL, bookmark };
};

export const putBookmarkToLocal = (id, values) => {
  console.log(id, values);
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  bookmarks[id].note = values.note;
  return { type: UPDATE_BOOKMARK_TO_LOCAL, bookmarks };
};
