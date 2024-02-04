import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/fonts/fonts.css";

import "./App.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Homepage from "./components/pages/Homepage/Homepage";
import Products from "./components/pages/Products/Products";
import SidebarLayout from "./components/SidebarLayout";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
