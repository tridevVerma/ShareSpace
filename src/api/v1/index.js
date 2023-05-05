import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from '../../utils';
import { getFormBody } from '../../utils';

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = getFormBody(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    } else if (response.status === 400) {
      return {
        success: false,
        message: data.message,
        tokenExpired: true,
      };
    }

    throw new Error(data.message);
  } catch (err) {
    console.log('ERROR:', err);
    return {
      message: err.message,
      success: false,
    };
  }
};

const customFileUpload = async (url, formData) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const config = {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        data: data.data,
      };
    } else if (response.status === 400) {
      return {
        success: false,
        message: data.message,
        tokenExpired: true,
      };
    }
    throw new Error(data.message);
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const getPosts = (page, limit) => {
  return customFetch(API_URLS.posts((page = 1), (limit = 5)), {
    method: 'get',
  });
};

export const signin = (userData) => {
  return customFetch(API_URLS.signIn(), {
    method: 'post',
    body: userData,
  });
};

export const register = (userData) => {
  return customFetch(API_URLS.signUp(), {
    method: 'post',
    body: userData,
  });
};

export const editProfile = (updates) => {
  return customFetch(API_URLS.editUser(), {
    method: 'post',
    body: updates,
  });
};

export const toggleProfileStatus = () => {
  return customFetch(API_URLS.toggleProfileStatus(), {
    method: 'GET',
  });
};

export const singleImage = async (type, content) => {
  if (type === 'cover') {
    return customFileUpload(API_URLS.uploadCover(), content);
  } else if (type === 'avatar') {
    return customFileUpload(API_URLS.uploadAvatar(), content);
  }
};

export const getAllUsers = async () => {
  return customFetch(API_URLS.getAllUsers(), {
    method: 'GET',
  });
};

export const getProfileInfo = async (userId) => {
  return customFetch(API_URLS.userInfo(userId), {
    method: 'GET',
  });
};

export const createFreindship = async (userId) => {
  return customFetch(API_URLS.createFreindship(userId), {
    method: 'GET',
  });
};

export const acceptFreindship = async (userId) => {
  return customFetch(API_URLS.acceptFreindship(userId), {
    method: 'GET',
  });
};

export const rejectFreindship = async (userId) => {
  return customFetch(API_URLS.rejectFreindship(userId), {
    method: 'GET',
  });
};
