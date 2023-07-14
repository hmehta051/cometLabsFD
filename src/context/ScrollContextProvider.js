import React, { createContext } from "react";

export const ScrollContext = createContext();

const ScrollContextProvider = ({ children }) => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <ScrollContext.Provider value={{ handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
export default ScrollContextProvider;
