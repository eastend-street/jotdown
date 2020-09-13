import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { postBookmark } from "actions";

import AddIcon from "@material-ui/icons/Add";
import { AppBar, Button, Fab, Toolbar } from "@material-ui/core";

import LogoSvg from "static/images/jotdown-logo-white.svg";

const Header: React.FC = () => {
  const responseGoogle = (response: any) => {
    if ("accessToken" in response) {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("firstName", response.profileObj.givenName);
      localStorage.setItem("lastName", response.profileObj.familyName);

      if (!localStorage.getItem("bookmarks")) window.location.href = "/";
      else submitLocalBookmarks();
    } else {
      console.log("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    window.location.href = "/";
  };

  const submitLocalBookmarks = async () => {
    let data = localStorage.getItem("bookmarks");
    data = data !== null && JSON.parse(data);

    // TODO: #63 Show Skelton when loading bookmarks
    // Show skelton here
    await postBookmark(data);
    localStorage.removeItem("bookmarks");
    window.location.href = "/";
  };

  const clientID = process.env.REACT_APP_CLIENT_ID || "";

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledLink to="/">
          <WrapLogo>
            <Logo src={LogoSvg} alt="Jot down" />
          </WrapLogo>
        </StyledLink>
        <WrapAction>
          <Link to="/add">
            <AddButton color="primary" aria-label="Add" size="small">
              <AddIcon />
            </AddButton>
          </Link>
          {!localStorage.getItem("token") ? (
            <GoogleLogin
              clientId={clientID}
              render={(renderProps) => (
                <LoginButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login
                </LoginButton>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          ) : (
            <GoogleLogout
              clientId={clientID}
              render={(renderProps) => (
                <LogoutButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Logout
                </LogoutButton>
              )}
              buttonText="Logout"
              onLogoutSuccess={logout}
            />
          )}
        </WrapAction>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${(props) => props.theme.colors.green};
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
    width: 7rem;
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
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.green};
    border: 0.09rem solid ${(props) => props.theme.colors.white};
    transition: 0.5s;
    :hover {
      background-color: ${(props) => props.theme.colors.green};
      opacity: 0.7;
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
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.green};
    border: 0.09rem solid ${(props) => props.theme.colors.white};
    text-transform: none;
    width: 8rem;
    transition: 0.5s;
    box-shadow: none;
    :hover {
      background-color: ${(props) => props.theme.colors.green};
      opacity: 0.7;
      box-shadow: none;
    }
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
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.green};
    border: 0.09rem solid ${(props) => props.theme.colors.white};
    text-transform: none;
    width: 8rem;
    :hover {
      background-color: ${(props) => props.theme.colors.green};
      opacity: 0.7;
      box-shadow: none;
    }
    @media (max-width: 960px) {
      width: 8rem;
    }
    @media (max-width: 600px) {
      width: 5rem;
    }
  }
`;

export default Header;
