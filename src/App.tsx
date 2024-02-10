import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/fonts/fonts.css";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Homepage from "./components/pages/Homepage/Homepage";
import Products from "./components/pages/Products/Products";
import SidebarLayout from "./components/SidebarLayout";
import AllProducts from "./components/pages/Products/AllProducts";
import NewProduct from "./components/pages/Products/NewProduct";
import DiscoverProducts from "./components/pages/Products/DiscoverProducts";
import AffiliatedProducts from "./components/pages/Products/AffiliatedProducts";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<AllProducts />} />
              <Route path="discover" element={<DiscoverProducts />} />
              <Route path="affiliated" element={<AffiliatedProducts />} />
            </Route>
            <Route path="/products/new" element={<NewProduct />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
