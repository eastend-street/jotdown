import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import styled from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

import Header from "components/parts/Header/Header";
import BookmarkDetail from "components/BookmarkDetail/BookmarkDetail";
import Home from "components/Home/Home";
import BookmarkForm from "components/BookmarkForm/BookmarkForm";
import Footer from "components/parts/Footer/Footer";
import NotFound from "components/NotFound/NotFound";

import reducer from "reducers";

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(reducer, enhancer);

const Content = styled.div`
  min-height: calc(100vh - 4rem);
`;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Theme>
          <Content>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/new" component={BookmarkForm} />
              <Route path="/detail/:id" component={BookmarkDetail} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer />
        </Theme>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
