import { createContext, useState } from "react";

export const TerminatedContext = createContext();

export const TerminatedContextProvider = ({ children }) => {
  const [terminated, setTerminated] = useState(0);
  const handleTerminated = () => {
    setTerminated(terminated + 1);
  };
  return (
    <TerminatedContext.Provider value={{ terminated, handleTerminated }}>
      {children}
    </TerminatedContext.Provider>
  );
};
