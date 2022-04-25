import { createContext, useState } from "react";

export const NewEmployeeContext = createContext();

export const NewEmployeeContextProvider = ({ children }) => {
  const [newEmployee, setNewEmployee] = useState(0);
  const handleNewEmployee = () => {
    setNew(newEmployee + 1);
  };
  return (
    <NewEmployeeContext.Provider value={{ newEmployee, handleNewEmployee }}>
      {children}
    </NewEmployeeContext.Provider>
  );
};
