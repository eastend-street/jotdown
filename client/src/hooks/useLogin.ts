import { useEffect, useState } from 'react';
import axios from 'axios';
import { ROOT_URL } from 'constants/urls';

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<{} | null>(null);

  const login = () => {};
  return { isLoggedIn };
};

export default useLogin;
