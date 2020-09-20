import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { postBookmark } from 'actions';

import { useLogin } from 'hooks';

import AddIcon from '@material-ui/icons/Add';
import { AppBar, Fab, Toolbar } from '@material-ui/core';

import LogoSvg from 'static/images/jotdown-logo-white.svg';

const Header: React.FC = () => {
  const { isLoggedIn, isLoading, login, logout } = useLogin();
  const submitLocalBookmarks = async () => {
    let data = localStorage.getItem('bookmarks');
    data = data !== null && JSON.parse(data);

    // TODO: #63 Show Skelton when loading bookmarks
    // Show skelton here
    await postBookmark(data);
    localStorage.removeItem('bookmarks');
    window.location.href = '/';
  };

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
          <LoginButton onClick={isLoggedIn ? logout : login}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </LoginButton>
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

const LoginButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.green};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 0rem;
  padding: 0.7rem 0.5rem;
  margin: 0.5rem 1rem;
  width: 8rem;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  @media (max-width: 960px) {
    width: 8rem;
  }
  @media (max-width: 600px) {
    width: 5rem;
  }

  &:hover {
    opacity: 0.7;
    background-color: ${(props) => props.theme.colors.green};
    opacity: 0.7;
  }
`;

export default Header;
