import {
  CREATE_BOOKMARK,
  READ_BOOKMARKS,
  READ_BOOKMARK,
  UPDATE_BOOKMARK,
  SAVE_BOOKMARK_TO_LOCAL
} from "../actions";

export default (bookmarks = {}, action) => {
  switch (action.type) {
    case CREATE_BOOKMARK:
    case READ_BOOKMARKS:
    case UPDATE_BOOKMARK:
      return action.response.data;
    case READ_BOOKMARK:
      const data = action.response.data;
      return {[data.id]: data };
    case SAVE_BOOKMARK_TO_LOCAL:
        return action.bookmarks;
    default:
      return bookmarks;
  }
};
