import React from "react";
import "./CustomizeProductStyles.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useProductForm } from "../../../../context/ProductFormContext";
import useSubmitProductForm from "../../../../hooks/useSubmitProductForm";

const CustomizeProduct = () => {
  const { state } = useProductForm();
  const { submitForm, isSubmitting, error } = useSubmitProductForm();
  const navigate = useNavigate();

  const handleProductSubmit = async () => {
    const formData = {
      name: state.productName,
      description: state.productDescription,
      url: state.urlSlug,
      custom_domain: state.customDomain,
      cover_image: state.coverImage[0] || "",
      thumbnail_image: state.thumbnailImage,
      product_type: state.selectedProductType || "",
      call_to_action: state.selectedAction,
      price: parseFloat(state.price.toString()),
      currency: state.selectedCurrency.symbol,
      custom_summary: state.summary,
    };
    console.log("Form Data here", formData);
    console.log("Current state: ", state);
    try {
      await submitForm(formData);
      navigate("/");
    } catch (error) {
      console.error("There was error submitting the product data", error);
    }
  };

  return (
    <div className="customize-product-container">
      <div className="customize-product-header">
        <div className="header-top-row">
          <h2>{state.productName}</h2>
          <button
            onClick={handleProductSubmit}
            className={`product-submit-btn ${isSubmitting ? "disabled" : ""}`}
          >
            Save and continue
          </button>
        </div>
        <nav className="customize-product-tablist">
          <NavLink
            to=""
            end
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Product
          </NavLink>
          <NavLink
            to="content"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Content
          </NavLink>
          <NavLink
            to="share"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Share
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default CustomizeProduct;
