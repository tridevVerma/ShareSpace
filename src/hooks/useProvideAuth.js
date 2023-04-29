import { useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../providers';
import { register, signin } from '../api/v1';
import {
  LOCALSTORAGE_TOKEN_KEY,
  removeItemFromLocalStorage,
  setItemInLocalStorage,
  getItemFromLocalStorage,
} from '../utils';

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    if (userToken) {
      const payload = jwt_decode(userToken);
      setUser(payload);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const signup = async (userData) => {
    setLoading(true);
    const response = await register(userData);
    setLoading(false);

    if (response.success) {
      // const payload = jwt_decode(response.data.token);
      return {
        user: response.data,
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const login = async (userData) => {
    setLoading(true);
    const response = await signin(userData);

    setLoading(false);
    if (response.success) {
      console.log(response.data);
      const payload = jwt_decode(response.data.token);
      setUser(payload);
      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : ''
      );
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };
  const logout = () => {
    setUser(null);
    removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };

  return {
    user,
    loading,
    signup,
    login,
    logout,
  };
};

export const useAuth = () => useContext(AuthContext);
