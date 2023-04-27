import { useState, useContext } from 'react';
import { AuthContext } from '../providers';
import { signin } from '../api/v1';

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (userData) => {
    const result = await signin(userData);

    console.log(result);
  };
  const logout = () => {};

  return {
    user,
    loading,
    login,
    logout,
  };
};

export const useAuth = () => useContext(AuthContext);
