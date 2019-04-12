import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import "./Header.css";

const AddButton = styled(Button)`
  && {
    margin-left: 600px;
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
          <AddButton variant="contained" color="primary">
            add
          </AddButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
