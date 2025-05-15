import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulate login by storing user in localStorage
  const login = (email, password) => {
    // For demo, accept only admin@example.com with password '123123'
    if (email === 'admin@example.com' && password === '123123') {
      const loggedInUser = { email };
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      return true;
    }
    // For other users, accept any email/password (simulate normal user)
    if (email !== 'admin@example.com') {
      const loggedInUser = { email };
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      return true;
    }
    return false; // invalid admin password
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = (email, password) => {
    // For demo, just login after register
    return login(email, password);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
