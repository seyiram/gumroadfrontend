import "./assets/fonts/fonts.css";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/auth/SignUp";
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
import RedirectToHomepageIfAuthenticated from "./routes/RedirectToHomepageIfAuthenticated";
import ProtectedRoute from "./routes/ProtectedRoutes";
import NotFound from "./components/pages/NotFound";
import ProductDetail from "./components/pages/Products/Product";
import SignIn from "./components/auth/SignIn";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route element={<RedirectToHomepageIfAuthenticated />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<SidebarLayout />}>
              <Route path="/homepage" element={<Homepage />} />{" "}
              <Route path="/products" element={<Products />}>
                <Route index element={<AllProducts />} />
                <Route path="discover" element={<DiscoverProducts />} />
                <Route path="affiliated" element={<AffiliatedProducts />} />
              </Route>
              <Route path="/products/new" element={<NewProduct />} />
              <Route
                path="/products/customize-product/new/:urlSlug"
                element={<CustomizeProduct />}
              >
                <Route index element={<DefaultTab />} />
                <Route path="content" element={<ContentTab />} />
                <Route path="share" element={<ShareTab />} />
              </Route>
            </Route>
          </Route>
          <Route path="/" element={<RedirectToHomepageIfAuthenticated />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
