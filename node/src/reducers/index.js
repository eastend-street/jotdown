import { combineReducers } from "redux";
import bookmarks from "./bookmarks";
import { reducer as form } from "redux-form";

export default combineReducers({ bookmarks, form });