import React, { Component } from "react";
import styled from "styled-components";
import BookmarkList from "../BookmarkList/BookmarkList";
// import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  margin: 2rem;
`;

// const Title = styled(Typography)`
//   && {
//     margin: 3rem auto 1rem 1rem;
//   }
// `;

class Home extends Component {
  render() {
    return (
      <Container>
        {/* <Title variant="h5">My Bookmarks</Title> */}
        <BookmarkList />
      </Container>
    );
  }
}

export default Home;
