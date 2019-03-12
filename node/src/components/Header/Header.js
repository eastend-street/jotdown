import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="title" color="inherit">
            MemoMemo
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
