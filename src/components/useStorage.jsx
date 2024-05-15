import React, { useState, useEffect } from "react";

const useStorage = (key) => {
  const [value, setValue] = useState(() => {
    const localStorageItem = window.localStorage.getItem(key);
    const sessionStorageItem = window.localStorage.getItem(key);
    return localStorageItem || sessionStorageItem || "";
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
    window.sessionStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
