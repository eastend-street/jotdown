import axios from 'axios';
import {
  SAVE_BOOKMARK_TO_LOCAL,
  READ_BOOKMARKS_FROM_LOCAL,
  READ_BOOKMARK_FROM_LOCAL,
  UPDATE_BOOKMARK_TO_LOCAL,
  DELETE_BOOKMARK_FROM_LOCAL,
} from '.';
import sampleBookmark from 'lib/sampleBookmark/sampleBookmark.json';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;

export const saveBookmarkToLocal = (values) => async (dispatch) => {
  let bookmarks = {};
  if (localStorage.getItem('bookmarks') !== null) {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  }
  const id = Object.keys(bookmarks).length;
  const ogp = await axios.post(`${ROOT_URL}/bookmark-for-local/${id}/`, values);

  bookmarks[id] = ogp.data;
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  dispatch({ type: SAVE_BOOKMARK_TO_LOCAL, bookmarks });
};

export const readBookmarksFromLocal = (dispatch) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  dispatch({ type: READ_BOOKMARKS_FROM_LOCAL, payload: bookmarks });
  return bookmarks;
};

export const getBookmarkFromLocal = (id) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  const bookmark = bookmarks[id];
  return { type: READ_BOOKMARK_FROM_LOCAL, bookmark };
};

export const putBookmarkToLocal = (id, values) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks[id].note = values.note;
  return { type: UPDATE_BOOKMARK_TO_LOCAL, bookmarks };
};

export const deleteBookmarkFromLocal = (id) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  delete bookmarks[id];
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  return { type: DELETE_BOOKMARK_FROM_LOCAL, bookmarks };
};

export const saveSampleBookmarkToLocal = (dispatch) => {
  const bookmarks = sampleBookmark;
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  dispatch({ type: SAVE_BOOKMARK_TO_LOCAL, payload: bookmarks });
};
