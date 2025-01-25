'use client'
import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user info to localStorage
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
    router.push('/login'); // Redirect to login page
  };

  useEffect(() => {
    // On initial load, check for a user in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      // Optionally, fetch the user details here to populate `user`
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
