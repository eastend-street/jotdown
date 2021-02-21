import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLogin } from 'hooks';

import Button from 'components/shared/Button';
import LogoSvg from 'static/images/jotdown-logo-white.svg';

const Header: React.FC = () => {
  const { isLoggedIn, login, logout } = useLogin();
  return (
    <Container>
      <LogoLink to="/">
        <Logo src={LogoSvg} alt="Jot down" />
      </LogoLink>
      <Actions>
        <Link to="/add">
          <AddButton>&#43;</AddButton>
        </Link>
        <LoginButton onClick={isLoggedIn ? logout : login}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </LoginButton>
      </Actions>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${(props) => props.theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 7rem;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.green};
  border: none;
  transition: 0.3s;
  cursor: pointer;
  margin-right: 2rem;
  font-size: 2.5rem;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.green};
    opacity: 0.7;
  }
  @media (max-width: 960px) {
    margin-right: 2rem;
  }
  @media (max-width: 600px) {
    margin-right: 1.5rem;
  }
`;

const LoginButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.white};
  margin: 0.5rem 1rem;
  width: 8rem;
  @media (max-width: 600px) {
    width: 5rem;
  }
`;

export default Header;

// const submitLocalBookmarks = async () => {
//   let data = localStorage.getItem('bookmarks');
//   data = data !== null && JSON.parse(data);

//   // TODO: #63 Show Skelton when loading bookmarks
//   // Show skelton here
//   await postBookmark(data);
//   localStorage.removeItem('bookmarks');
//   window.location.href = '/';
// };
