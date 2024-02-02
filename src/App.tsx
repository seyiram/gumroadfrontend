import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/fonts/fonts.css";

import "./App.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
