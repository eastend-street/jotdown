import {
  CREATE_BOOKMARK,
  READ_BOOKMARKS,
  READ_BOOKMARK,
  UPDATE_BOOKMARK,
  DELETE_BOOKMARK,
  SAVE_BOOKMARK_TO_LOCAL,
  READ_BOOKMARKS_FROM_LOCAL,
  READ_BOOKMARK_FROM_LOCAL,
  UPDATE_BOOKMARK_TO_LOCAL,
} from "actions";

import { InitialState } from "types/types";

export default (bookmarks: InitialState, action: any) => {
  switch (action.type) {
    case CREATE_BOOKMARK:
    case READ_BOOKMARKS:
    case UPDATE_BOOKMARK:
    case DELETE_BOOKMARK:
      return action.response.data;

    case READ_BOOKMARK:
      const data = action.response.data;
      return { [data.id]: data };

    case SAVE_BOOKMARK_TO_LOCAL:
    case READ_BOOKMARKS_FROM_LOCAL:
    case UPDATE_BOOKMARK_TO_LOCAL:
      console.log(action.bookmarks);
      return action.bookmarks;

    case READ_BOOKMARK_FROM_LOCAL:
      const dataLocal = action.bookmark;
      return { [dataLocal.id]: dataLocal };

    default:
      return bookmarks;
  }
};
