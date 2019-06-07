import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GoogleLogin from "react-google-login";

import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #424242;
    box-shadow: none;
  }
`;

const AddButton = styled(Fab)`
  && {
    margin-left: 4rem;
    box-shadow: none;
    color: #fff;
    background-color: #8d6e63;
    :hover {
      background-color: #a1887f;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const WrapLogin = styled.div`
  margin: 0 0 0 auto;
`;

const LoginButton = styled(Button)`
  && {
    color: #fff;
    background-color: #8d6e63;
    :hover {
      background-color: #a1887f;
    }
    text-transform: none;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    console.log(response);
    console.log(response.tokenId);
  }

  render() {
    return (
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLink to="/">
            <Typography variant="h6" color="inherit">
              MemoMemo
            </Typography>
          </StyledLink>
          <AddButton
            color="primary"
            aria-label="Add"
            component={Link}
            to="/new"
            size="small"
          >
            <AddIcon />
          </AddButton>
          <WrapLogin>
            <GoogleLogin
              clientId="193612428659-nh2r4um8j7q15ucufnej0m6rf50n23bq.apps.googleusercontent.com"
              render={renderProps => (
                <LoginButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login
                </LoginButton>
              )}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </WrapLogin>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
