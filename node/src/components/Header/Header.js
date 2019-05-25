import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  render() {
    return (
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLink to="/">
            <Typography variant="title" color="inherit">
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
            <LoginButton>Login</LoginButton>
          </WrapLogin>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

export default Header;
