import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TerminatedContextProvider } from "./contexts/TerminatedContext";
import { PromotedContextProvider } from "./contexts/PromotedContext";
import { NewEmployeeContextProvider } from "./contexts/NewEmployeeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <NewEmployeeContextProvider>
          <PromotedContextProvider>
            <TerminatedContextProvider>
              <App />
            </TerminatedContextProvider>
          </PromotedContextProvider>
        </NewEmployeeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
