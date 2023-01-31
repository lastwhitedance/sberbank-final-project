import { createContext, useEffect, useState } from 'react';
import { productsApi } from '../api/Api';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const tokenFromStorage = localStorage.getItem('token');
    return tokenFromStorage ?? '';
  });

  useEffect(() => {
    localStorage.setItem('token', token);
    productsApi.setToken(token);
  }, [token]);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};
