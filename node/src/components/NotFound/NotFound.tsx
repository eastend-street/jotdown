import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Container = styled(Grid)`
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 4rem - 66px);
  @media (max-width: 600px) {
    min-height: calc(
      100vh - 3.5rem - 66px
    ); /* subtract header, footer height */
  }
  @media (max-width: 411px) {
    min-height: calc(
      100vh - 3.5rem - 84px
    ); /* subtract header, footer height */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledH3 = styled.h3`
  text-align: center;
`;

const ContentButton = styled.div`
  margin: 2rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  && {
    margin: 1rem;
    min-width: 12rem;
    box-shadow: none;
    color: #fff;
    background-color: #66717e;
    text-transform: none;
    :hover {
      background-color: #838e9a;
    }
  }
`;

class NotFound extends Component {
  render() {
    return (
      <Container container>
        <Grid item xs={11} sm={12}>
          <StyledH1>404 Page not found</StyledH1>
          <StyledH3>
            Sorry, we couldn't find the page....
            <br />
            Please click the button below to go back to the Homepage.
          </StyledH3>
          <ContentButton>
            <StyledLink to="/">
              <StyledButton variant="contained">
                Go to Homepage
              </StyledButton>
            </StyledLink>
          </ContentButton>
        </Grid>
      </Container>
    );
  }
}

export default NotFound;
