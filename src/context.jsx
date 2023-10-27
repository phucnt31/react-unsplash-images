import { createContext, useContext, useState } from "react";

const AppContent = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AppContent.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContent);
