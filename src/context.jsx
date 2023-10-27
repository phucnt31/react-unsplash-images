import { createContext, useContext, useEffect, useState } from "react";

const AppContent = createContext();

const getDarkTheme = localStorage.getItem("darkTheme") === "true";

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getDarkTheme);
  const [searchValue, setSearchValue] = useState("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContent.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContent);
