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
    background-color: #e3e3e3;
    box-shadow: none;
  }
`;

const Logo = styled(Typography)`
  color: #66717e;
  :hover {
    color: #838e9a;
  }
`;

const AddButton = styled(Fab)`
  && {
    margin-right: 3rem;
    box-shadow: none;
    color: #fff;
    background-color: #66717e;
    :hover {
      background-color: #838e9a;
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

const WrapAction = styled.div`
  margin: 0 0 0 auto;
`;

const LoginButton = styled(Button)`
  && {
    color: #fff;
    width: 10rem;
    background-color: #66717e;
    :hover {
      background-color: #838e9a;
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
            <Logo variant="h6">MemoMemo</Logo>
          </StyledLink>
          <WrapAction>
            <AddButton
              color="primary"
              aria-label="Add"
              component={Link}
              to="/new"
              size="small"
            >
              <AddIcon />
            </AddButton>
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
          </WrapAction>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
