import { SAVE_BOOKMARK_TO_LOCAL } from ".";
import _ from "lodash";

export const saveBookmarkToLocal = values => {
  let bookmarks = {};
  if (localStorage.getItem("bookmarks") != null) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  }
  const id = Object.keys(bookmarks).length
  // _.map(bookmarks, bookmark => (
  //   console.log(bookmark)
  // ));

  bookmarks[id] = {
    created_at: "",
    description: "",
    id: id,
    img_url: "",
    note: values.note,
    title: "",
    updated_at: "",
    url: values.url
  };

  return { type: SAVE_BOOKMARK_TO_LOCAL, bookmarks };
};
