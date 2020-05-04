import axios from "axios";

export const READ_BOOKMARKS = "READ_BOOKMARKS";
export const READ_BOOKMARK = "READ_BOOKMARK";
export const CREATE_BOOKMARK = "CREATE_BOOKMARK";
export const UPDATE_BOOKMARK = "UPDATE_BOOKMARK";
export const DELETE_BOOKMARK = "DELETE_BOOKMARK";
export const SAVE_BOOKMARK_TO_LOCAL = "SAVE_BOOKMARK_TO_LOCAL";
export const READ_BOOKMARKS_FROM_LOCAL = "READ_BOOKMARKS_FROM_LOCAL";
export const READ_BOOKMARK_FROM_LOCAL = "READ_BOOKMARK_FROM_LOCAL";
export const UPDATE_BOOKMARK_TO_LOCAL = "UPDATE_BOOKMARK_TO_LOCAL";
export const DELETE_BOOKMARK_FROM_LOCAL = "DELETE_BOOKMARK_FROM_LOCAL";

const ROOT_URL = process.env.REACT_APP_ROOT_URL;
axios.defaults.headers.common["Authorization"] =
  "Bearer google-oauth2 " + localStorage.getItem("token") || "";

export const readBookmarks = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/bookmarks/`);
  dispatch({ type: READ_BOOKMARKS, response });
};

export const getBookmark = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/bookmarks/${id}/`);
  dispatch({ type: READ_BOOKMARK, response });
  return response;
};

export const deleteBookmark = id => async dispatch => {
  const response = await axios.delete(`${ROOT_URL}/bookmarks/${id}/`);
  dispatch({ type: DELETE_BOOKMARK, response });
  return response;
};

export const putBookmark = (id, values) => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/bookmarks/${id}/`, values);
  dispatch({ type: UPDATE_BOOKMARK, response });
};

export const postBookmark = values => async dispatch => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: "Bearer google-oauth2 " + localStorage.getItem("token") 
    },
    data: values,
    url: `${ROOT_URL}/bookmarks/`
  }
  const response = await axios(options);
  dispatch({ type: CREATE_BOOKMARK, response });
};