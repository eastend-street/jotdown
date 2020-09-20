import { useState } from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';

import { User } from 'types';

const useLogin = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID || '';
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLoginFailure = (response: any) => {
    console.log('Login failed', response);
    setIsLoggedIn(false);
  };

  const handleLoginSuccess = (response: any) => {
    const token = response.tokenId;
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setUser({ ...response.profileObj, token: token });
  };

  const { signIn } = useGoogleLogin({
    onFailure: handleLoginFailure,
    clientId: clientId,
    onSuccess: handleLoginSuccess,
  });

  const login = async () => {
    setIsLoading(true);
    await signIn();
    setIsLoading(false);
  };

  const handleLogoutFailure = () => {
    console.log('Logout failed');
    setIsLoggedIn(false);
  };

  const handleLogoutSuccess = () => {
    console.log('Logout success');
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
  };

  const { signOut } = useGoogleLogout({
    onFailure: handleLogoutFailure,
    clientId: clientId,
    onLogoutSuccess: handleLogoutSuccess,
  });

  const logout = async () => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  };

  return { isLoggedIn, isLoading, login, logout, user };
};

export default useLogin;

//     if (!localStorage.getItem("bookmarks")) window.location.href = "/";
//     else submitLocalBookmarks();

// {!localStorage.getItem("token") ? (
