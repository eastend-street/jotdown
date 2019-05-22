import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import styled from "styled-components";
import "./index.css";
import Header from "./components/Header/Header";
import BookmarkEdit from "./components/BookmarkEdit/BookmarkEdit";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import BookmarkForm from "./components/BookmarkForm/BookmarkForm";
import Footer from "./components/Footer/Footer";
import reducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Content>
        <Switch>
          <Route path="/" exact component={BookmarkList} />
          <Route path="/new" component={BookmarkForm} />
          <Route path="/edit/:id" component={BookmarkEdit} />
        </Switch>
      </Content>
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
