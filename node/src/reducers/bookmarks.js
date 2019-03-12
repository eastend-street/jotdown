import { READ_BOOKMARKS } from "../actions";

export default (bookmarks = {}, action) => {
  switch (action.type) {
    case READ_BOOKMARKS:
      return action.response.data;
    default:
      return bookmarks;
  }
}