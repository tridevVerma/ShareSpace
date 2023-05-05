import { useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../providers';
import {
  register,
  signin,
  editProfile,
  singleImage,
  toggleProfileStatus,
  createFreindship,
  acceptFreindship,
  rejectFreindship,
} from '../api/v1';
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

  const updateUser = async (updates) => {
    const response = await editProfile(updates);

    if (response.success) {
      const payload = jwt_decode(response.data.updatedToken);
      setUser(payload);
      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.updatedToken ? response.data.updatedToken : ''
      );
      return {
        success: true,
      };
    } else if (response.tokenExpired) {
      logout();
    }
    return {
      success: false,
      message: response.message,
    };
  };

  const updateImage = async (type, formData) => {
    const response = await singleImage(type, formData);

    if (response.success) {
      if (type === 'cover') {
        setUser({
          ...user,
          cover: response.data.uploadedPath,
        });
      } else if (type === 'avatar') {
        setUser({
          ...user,
          avatar: response.data.uploadedPath,
        });
      }

      return {
        success: true,
      };
    } else if (response.tokenExpired) {
      logout();
    }
    return {
      success: false,
      message: response.message,
    };
  };

  const toggleProfileLocking = async () => {
    const response = await toggleProfileStatus();

    if (response.success) {
      setUser({
        ...user,
        lockProfile: !user.lockProfile,
      });
      return {
        success: true,
      };
    } else if (response.tokenExpired) {
      logout();
    }
    return {
      success: false,
      message: response.message,
    };
  };

  const logout = () => {
    setUser(null);
    removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };

  const addFreind = async (userId) => {
    const result = await createFreindship(userId);

    if (result.success) {
      setUser({
        ...user,
        freinds: [
          ...user.freinds,
          { freind: result.data.newFreind, status: result.data.status },
        ],
      });
      return {
        success: true,
      };
    } else if (result.tokenExpired) {
      logout();
    }
    return {
      success: false,
      message: result.message,
    };
  };

  const rejectFreind = async (userId) => {
    const result = await rejectFreindship(userId);

    if (result.success) {
      setUser({
        ...user,
        freinds: user.freinds.filter((frData) => {
          return frData.freind._id !== userId;
        }),
      });

      return {
        success: true,
      };
    } else if (result.tokenExpired) {
      logout();
    }
    return {
      success: false,
      message: result.message,
    };
  };

  const acceptFreind = async (userId) => {
    const result = await acceptFreindship(userId);

    if (result.success) {
      setUser({
        ...user,
        freinds: user.freinds.map((frData) => {
          if (frData.freind._id === userId) {
            frData.status = 3;
            return frData;
          }
          return frData;
        }),
      });

      return {
        success: true,
      };
    } else if (result.tokenExpired) {
      logout();
    }
    return {
      success: false,
      message: result.message,
    };
  };

  return {
    user,
    loading,
    signup,
    login,
    updateUser,
    updateImage,
    toggleProfileLocking,
    logout,
    addFreind,
    acceptFreind,
    rejectFreind,
  };
};

export const useAuth = () => useContext(AuthContext);
