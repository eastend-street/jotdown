import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import styled from "styled-components";
import "./index.css";
import Header from "./components/parts/Header/Header";
import BookmarkDetail from "./components/BookmarkDetail/BookmarkDetail";
import Home from "./components/Home/Home";
import BookmarkForm from "./components/BookmarkForm/BookmarkForm";
import Footer from "./components/parts/Footer/Footer";
import reducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import ogpImage from "./static/images/notebook.jpg"

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

console.log(ogpImage);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Helmet
        title="Jot down"
        meta={[
          {
            property: "og:image",
            content: {ogpImage}
          },
          { property: "og:url", content: "https://jotdown.site" },
          { property: "og:type", content: "website" },
          {
            property: "og:title",
            content: "Jot down - a bookmark and note web service"
          },
          {
            property: "og:description",
            content:
              "Jot down is a bookmark and note web service. You can save some your favorite website or article to Jot down. Also you can write a note with your bookmark."
          },
          {
            property: "og:site_name",
            content: "Jot down - a bookmark and note web service"
          },
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:locale", content: "en_CA" }
        ]}
      />
      <Header />
      <Content>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" component={BookmarkForm} />
          <Route path="/detail/:id" component={BookmarkDetail} />
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
