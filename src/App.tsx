import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import './assets/fonts/fonts.css'

import "./App.css";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
