import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./coponents/login";
import Dashboard from "./coponents/dashboard";
import Jokes from "./coponents/jokes";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/jokes" element={<Jokes />} />
    </Routes>
  );
}

export default App;
