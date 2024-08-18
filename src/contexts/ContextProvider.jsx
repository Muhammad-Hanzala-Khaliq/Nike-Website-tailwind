import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setCurrentMode(savedMode);
      document.documentElement.classList.add(savedMode);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const setModes = (mode) => {
    setCurrentMode(mode);
    localStorage.setItem("themeMode", mode);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
  };

  return (
    <StateContext.Provider value={{ setModes, currentMode }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
