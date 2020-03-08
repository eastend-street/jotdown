import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { readBookmarks, postBookmark } from "../../../actions";

import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Button from "../Button/Button";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";

import LogoSvg from "../../../static/images/jotdown-logo.svg";

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${props => props.theme.colors.white};
    box-shadow: none;
  }
`;

const WrapLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  && {
    margin-left: 0.5rem;
    width: 8rem;
    transition: 0.5s;
    :hover {
      opacity: 0.7;
    }
  }
`;

const AddButton = styled(Fab)`
  && {
    margin-right: 3rem;
    box-shadow: none;
    color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.white};
    :hover {
      opacity: 0.7s;
    }
    @media (max-width: 960px) {
      margin-right: 2rem;
    }
    @media (max-width: 600px) {
      margin-right: 1.5rem;
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
    color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.white};
    border: 0.1rem solid ${props => props.theme.colors.green};
    text-transform: none;
    width: 10rem;
    @media (max-width: 960px) {
      width: 8rem;
    }
    @media (max-width: 600px) {
      width: 5rem;
    }
  }
`;

const LogoutButton = styled(Button)`
  && {
    color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.white};
    width: 10rem;
    border: 0.1rem solid ${props => props.theme.colors.green};
    background-color: transparent;
    :hover {
      /* opacity: 0.7; */
    }
    text-transform: none;
    @media (max-width: 960px) {
      width: 8rem;
    }
    @media (max-width: 600px) {
      width: 5rem;
    }
  }
`;

// type HeaderProps = {
//   postBookmark: any;
// };

class Header extends Component {
  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  async submitLocalBookmarks() {
    const data = JSON.parse(localStorage.getItem("bookmarks"));
    await this.props.postBookmark(data);
    // ここで読み込み中のダイアログ表示する
    localStorage.removeItem("bookmarks");
    window.location.href = "/";
  }

  responseGoogle(response) {
    if ("accessToken" in response) {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("firstName", response.profileObj.givenName);
      localStorage.setItem("lastName", response.profileObj.familyName);
      if (localStorage.getItem("bookmarks") != null) {
        this.submitLocalBookmarks();
      } else {
        window.location.href = "/";
      }
    } else {
      console.log("Login failed");
    }
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    window.location.href = "/";
  }

  render() {
    const clientID = process.env.REACT_APP_CLIENT_ID;
    return (
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLink to="/">
            <WrapLogo>
              <Logo src={LogoSvg} alt="jot down" />
            </WrapLogo>
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
            {localStorage.getItem("token") == null && (
              <GoogleLogin
                clientId={clientID}
                render={renderProps => (
                  <LoginButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    text="Login"
                  />
                )}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            )}
            {localStorage.getItem("token") != null && (
              <GoogleLogout
                clientId={clientID}
                render={renderProps => (
                  <LogoutButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Logout
                  </LogoutButton>
                )}
                buttonText="Logout"
                onLogoutSuccess={this.logout}
              />
            )}
          </WrapAction>
        </Toolbar>
      </StyledAppBar>
    );
  }
}

const mapDispatchToProps = { readBookmarks, postBookmark };

export default connect(null, mapDispatchToProps)(Header);
