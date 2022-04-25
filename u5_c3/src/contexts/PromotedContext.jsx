import { createContext, useState } from "react";

export const PromotedContext = createContext();

export const PromotedContextProvider = ({ children }) => {
  const [promoted, setPromoted] = useState(0);
  const handlePromoted = () => {
    setPromoted(promoted + 1);
  };
  return (
    <PromotedContext.Provider value={{ promoted, handlePromoted }}>
      {children}
    </PromotedContext.Provider>
  );
};
