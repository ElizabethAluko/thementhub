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
   localStorage.setItem('userData', JSON.stringify(userData));
   setUser(userData);
   // localStorage.setItem('userData', userData);
   // Cookies.set('userData', userData);

  };

  const logout = () => {
    setUser(null);
    alert('Logout Successful!');

    // Clear any stored tokens on logout
    // localStorage.removeItem('userData');
    Cookies.remove('userData');
  };

  // const initializeAuth = () => {
   //  const savedUserData = localStorage.getItem('userData');
    //const savedUserData = Cookies.get('userData');
    //if (savedUserData) {
      //setUser(savedUserData);
    //}
  //};

  //useEffect(() => {
    //initializeAuth();
  //}, []);
  useEffect(() => {
    // Check if user data exists in localStorage when the app starts
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      //const parsedUserData = JSON.parse(storedUserData);
      setUser(storedUserData);
    }
  }, []);

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
