'use client'
import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  
  const login = (userData) => {
    setUser(userData);
    // localStorage.setItem('user', JSON.stringify(userData)); // Save user info to localStorage
  };


  const logout = () => {
    setUser(null);
    // localStorage.removeItem('user'); // Remove user from localStorage
    router.refresh();
  };

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/getme`)
      .then(res => login(res.data))
      .catch(err => logout());
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
