import React from "react";
import styled from "styled-components";
import BookmarkList from "components/BookmarkList/BookmarkList";

const Container = styled.div`
  margin: 2rem;
`;

const Home = () => (
  <Container>
    <BookmarkList />
  </Container>
);

export default Home;
