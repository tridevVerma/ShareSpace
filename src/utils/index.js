import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from './constants.js';
import { getFormBody } from './getFormData.js';
import {
  setItemInLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from './localStorageHelper.js';

import { getAge, formatBirthday } from './getAge.js';

export {
  API_URLS,
  LOCALSTORAGE_TOKEN_KEY,
  getFormBody,
  setItemInLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  getAge,
  formatBirthday,
};
