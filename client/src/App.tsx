import React, { useReducer } from "react";
import AppContext from "contexts/AppContext";
import { initialState } from "store/initialState";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/theme";

import Header from "components/parts/Header/Header";
import BookmarkDetail from "components/BookmarkDetail/BookmarkDetail";
import Home from "components/Home/Home";
import BookmarkForm from "components/BookmarkForm/BookmarkForm";
import Footer from "components/parts/Footer/Footer";
import NotFound from "components/NotFound/NotFound";

import reducer from "reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <GlobalStyle />
        <Theme>
          <Container>
            <Header />
            <Switch>
              {/* <Route path="/" exact component={Home} />
              <Route path="/new" component={BookmarkForm} />
              <Route path="/detail/:id" component={BookmarkDetail} /> */}
              <Route component={NotFound} />
            </Switch>
          </Container>
          <Footer />
        </Theme>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 4rem);
`;

export default App;
