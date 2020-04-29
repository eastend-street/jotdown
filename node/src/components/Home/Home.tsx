import React, { Component } from "react";
import styled from "styled-components";
import BookmarkList from "components/BookmarkList/BookmarkList";

const Container = styled.div`
  margin: 2rem;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <BookmarkList />
      </Container>
    );
  }
}

export default Home;
