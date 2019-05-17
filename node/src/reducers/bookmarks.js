import { CREATE_BOOKMARK, READ_BOOKMARKS, READ_BOOKMARK } from "../actions";

export default (bookmarks = {}, action) => {
  switch (action.type) {
    case CREATE_BOOKMARK:
    case READ_BOOKMARKS:
    case READ_BOOKMARK:
      return action.response.data;
    default:
      return bookmarks;
  }
}