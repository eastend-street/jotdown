import { CREATE_BOOKMARK, READ_BOOKMARKS } from "../actions";

export default (bookmarks = {}, action) => {
  switch (action.type) {
    case CREATE_BOOKMARK:
    case READ_BOOKMARKS:
      return action.response.data;
    default:
      return bookmarks;
  }
}