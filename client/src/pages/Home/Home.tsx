import React from 'react';
import styled from 'styled-components';
import BookmarkList from 'components/BookmarkList';

const Home: React.FC = () => (
  <Container>
    <BookmarkList />
  </Container>
);

const Container = styled.div`
  margin: 2rem;
`;

export default Home;
