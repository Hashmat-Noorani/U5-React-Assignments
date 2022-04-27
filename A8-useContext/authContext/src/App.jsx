import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import UserDetails from "./components/UserDetails";
function App() {
  const { isAuth, handleUserStatus } = useContext(AuthContext);
  return (
    <>
      <nav>
        <button onClick={handleUserStatus}>{isAuth}</button>
      </nav>
      <UserDetails />
    </>
  );
}

export default App;
