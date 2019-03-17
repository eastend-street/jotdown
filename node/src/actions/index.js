import axios from "axios";

export const READ_BOOKMARKS = "READ_BOOKMARKS";

const ROOT_URL = "http://localhost:8000/api";
// const QUERYSTRING = "?token=token123";

export const readBookmarks = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/bookmarks/`);
  dispatch({ type: READ_BOOKMARKS, response });
};