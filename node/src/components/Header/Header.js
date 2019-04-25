import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./Header.css";

const AddButton = styled(Fab)`
  && {
    margin-left: 4rem;
  }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class Header extends Component {
  render() {
    return (
      <AppBar position="static" className="header">
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
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
