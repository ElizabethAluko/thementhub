// Store and Access data
import Cookies from 'js-cookie';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // const userDataJ = JSON.parse(userData);
    setUser(userData);

   // localStorage.setItem('userData', userData);
   Cookies.set('userData', userData);
  };

  const logout = () => {
    setUser(null);
    alert('Logout Successful!');

    // Clear any stored tokens on logout
    // localStorage.removeItem('userData');
    Cookies.remove('userData');
  };

  const initializeAuth = () => {
   //  const savedUserData = localStorage.getItem('userData');
    const savedUserData = Cookies.get('userData');
    if (savedUserData) {
      setUser(savedUserData);
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  const value = {
    user,
    login,
    logout,
    initializeAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
