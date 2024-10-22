"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

const DARK_MODE_KEY = "DARK_MODE";

const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useDarkMode = () => {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error("useDarkMode must be used inside DarkModeContext.");
  return ctx;
};

type TDarkModeProvider = {
  children: ReactNode;
};
export const DarkModeProvider = ({ children }: TDarkModeProvider) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(JSON.parse(localStorage.getItem(DARK_MODE_KEY) || "false"))
  );
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(!isDarkMode));
  }, []);
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
