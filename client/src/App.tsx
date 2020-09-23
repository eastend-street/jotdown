import React, { useReducer } from 'react';
import { AppContext } from 'contexts';
import { initialState } from 'store/initialState';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/theme';

import Home from 'pages/Home';
import BookmarkDetail from 'pages/BookmarkDetail';
import NotFound from 'pages/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';
import BookmarkForm from 'components/BookmarkForm/BookmarkForm';

import reducer from 'reducers';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <GlobalStyle />
        <Theme>
          <Container>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" component={BookmarkForm} />
              <Route path="/:id" component={BookmarkDetail} />
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
