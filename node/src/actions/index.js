import axios from "axios";

export const READ_BOOKMARKS = "READ_BOOKMARKS";
export const READ_BOOKMARK = "READ_BOOKMARK";
export const CREATE_BOOKMARK = "CREATE_BOOKMARK";

const ROOT_URL = "http://localhost:8000/api";
// const QUERYSTRING = "?token=token123";

export const readBookmarks = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/bookmarks/`);
  dispatch({ type: READ_BOOKMARKS, response });
};

export const getBookmark = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/bookmarks/${id}/`);
  dispatch({ type: READ_BOOKMARK, response });
};

export const postBookmark = (values) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/bookmarks/`, values);
  dispatch({ type: CREATE_BOOKMARK, response });
};