import { createContext, useContext, useState } from "react";

const AppContent = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
  };

  return (
    <AppContent.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContent);
