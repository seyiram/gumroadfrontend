import React from "react";
import { CurrencyInput, CurrencyOption } from "./CurrencyInput";
import "./NewProductStyles.css";
import TypeOption, { typeOptions } from "./TypeOption";
import { NavLink } from "react-router-dom";

const NewProduct = () => {
  const [focusedIndex, setFocusedIndex] = React.useState(0);
  const [selectedCurrency, setSelectedCurrency] =
    React.useState<CurrencyOption | null>({
      value: "usd",
      symbol: "$",
      label: "US Dollars",
    });
  const [productName, setProductName] = React.useState("");
  const [selectedProductType, setSelectedProductType] = React.useState<
    string | null
  >(null);

  const handleProductName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setProductName(event.target.value);
    console.log("user Product name", productName);
  };

  const handleSelectedProductType = (typeTitle: string) => {
    setSelectedProductType(typeTitle);
    const newIndex = typeOptions.findIndex(
      (option) => option.title === typeTitle
    );
    if (newIndex !== -1) {
      setFocusedIndex(newIndex);
    }

    console.log("user selected product", selectedProductType);
  };

  return (
    <div className="new-product-container">
      <div className="new-product-header">
        <h1 className="new-product-title">Publish your first product</h1>
        <div className="actions">
          <button className="cancel-button">
            <span className="icon icon-x-square"></span>Cancel
          </button>
          <NavLink to="/products/customize-product">
            <button className="customize-button">Next: Customize</button>
          </NavLink>
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
              value={productName}
              onChange={handleProductName}
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
                    index === focusedIndex ? "focused" : ""
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
            <CurrencyInput
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
