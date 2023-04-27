import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from '../../utils';

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
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true,
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

export const getPosts = (page, limit) => {
  return customFetch(API_URLS.posts((page = 1), (limit = 5)), {
    method: 'get',
  });
};
