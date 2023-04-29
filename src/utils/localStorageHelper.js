export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    console.log("Can't store in local-storage");
    return;
  }
  let valueToStore = typeof value !== 'string' ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    console.log("Can't get the value from local-storage");
    return;
  }

  return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    console.log("Can't remove the value from local-storage");
    return;
  }

  localStorage.removeItem(key);
};
