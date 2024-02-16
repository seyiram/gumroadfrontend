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
import CustomizeProduct from "./components/pages/Products/CustomizeProduct/CustomizeProduct";
import ContentTab from "./components/pages/Products/CustomizeProduct/ContentTab";
import ShareTab from "./components/pages/Products/CustomizeProduct/ShareTab";
import DefaultTab from "./components/pages/Products/CustomizeProduct/DefaultTab";

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
            <Route
              path="/products/customize-product"
              element={<CustomizeProduct />}
            >
              <Route index element={<DefaultTab />} /> {/* Default tab */}
              <Route path="content" element={<ContentTab />} />
              <Route path="share" element={<ShareTab />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
