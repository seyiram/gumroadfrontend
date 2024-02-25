import React from "react";
import { CurrencyInput } from "./CurrencyInput";
import "./NewProductStyles.css";
import TypeOption, { typeOptions } from "./TypeOption";
import { useNavigate } from "react-router-dom";
import { useProductForm } from "../../../context/ProductFormContext";

const NewProduct = () => {
  const navigate = useNavigate();

  const { state, dispatch, handleChange, handleSetError } = useProductForm();
  console.log("Product type before user selects: ", state.selectedProductType)

  const handleSelectedProductType = (typeTitle: string) => {
    const newIndex = typeOptions.findIndex(
      (option) => option.title === typeTitle
    );
    if (newIndex !== -1) {
      dispatch({type: 'SET_FIELD', field: "focusedIndex", value: newIndex})
      console.log("focusedIndex updated: ", state.focusedIndex);
      dispatch({type: 'SET_FIELD', field:"selectedProductType", value: typeTitle});
      console.log("SelectedProductType: ", state.selectedProductType);
    }

    console.log("user selected product", state.selectedProductType);
  };

  const validateAndNavigate = () => {
    let isValid = true;

    dispatch({ type: "CLEAR_ERRORS" });

    if (!state.productName.trim()) {
      handleSetError("productName", "Product name is required!");
      console.log(state.validationErrors.productName);
      isValid = false;
    } else if (!state.price) {
      handleSetError("price", "Price is required!");
      console.log(state.validationErrors.price);
      isValid = false;
    }

    if (isValid) {
      navigate("/products/customize-product");
    }
  };

  return (
    <div className="new-product-container">
      <div className="new-product-header">
        <h1 className="new-product-title">Publish your first product</h1>
        <div className="actions">
          <button className="cancel-button">
            <span className="icon icon-x-square"></span>Cancel
          </button>
          <button className="customize-button" onClick={validateAndNavigate}>
            Next: Customize
          </button>
        </div>
      </div>
      <div className="new-product-description">
        <div className="new-product-info">
          <span>
            Make some selections, fill in some boxes, and go live in minutes.
          </span>
          <span>
            Our <u>Help Center</u> has everything you need to know.
          </span>
        </div>
        <div className="new-product-form">
          <div className="form-group ">
            <label htmlFor="productName">Name</label>
            <input
              type="text"
              id="productName"
              placeholder="Name of product"
              value={state.productName}
              onChange={handleChange("productName")}
              className={
                state.validationErrors.productName ? "input-error" : ""
              }
              required
            />
          </div>
          <div className="form-group type-section">
            <label>Type</label>
            <div className="type-options">
              {typeOptions.map((option, index) => (
                <div
                  key={index}
                  className={`type-option-wrapper ${
                    index === state.focusedIndex ? "focused" : ""
                  }`}
                  onClick={() => handleSelectedProductType(option.title)}
                  role="button"
                  tabIndex={0}
                >
                  <TypeOption
                    iconPath={option.iconPath}
                    title={option.title}
                    description={option.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="form-group currency-input-section">
            <label htmlFor="price">Price</label>
            <CurrencyInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
