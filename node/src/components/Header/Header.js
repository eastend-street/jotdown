import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./Header.css";

const AddButton = styled(Button)`
  && {
    margin-left: 40rem;
  }
`;

class Header extends Component {
  render() {
    return (
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="title" color="inherit">
            MemoMemo
          </Typography>
          <AddButton
            variant="contained"
            color="primary"
            component={Link}
            to="/new"
          >
            add
          </AddButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
