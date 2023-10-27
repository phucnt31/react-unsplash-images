import { createContext, useContext } from "react";

const AppContent = createContext();

export const AppProvider = ({ children }) => {
  <AppContent.Provider>{children}</AppContent.Provider>;
};

export const useGlobalContext = () => useContext(AppContent);
