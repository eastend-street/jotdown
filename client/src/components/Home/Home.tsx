import React from "react";
import styled from "styled-components";
import BookmarkList from "components/BookmarkList/BookmarkList";

const Home = () => (
  <Container>
    <BookmarkList />
  </Container>
);

const Container = styled.div`
  margin: 2rem;
`;

export default Home;
