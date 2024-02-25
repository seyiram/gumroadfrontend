import React from "react";
import Select, { StylesConfig } from "react-select";
import "./NewProductStyles.css";
import { CurrencyOption } from "../../../context/ProductFormTypes";
import { useProductForm } from "../../../context/ProductFormContext";

const currencyOptions: CurrencyOption[] = [
  { value: "usd", symbol: "$", label: "US Dollars" },
  { value: "gbp", symbol: "£", label: "GBP" },
  { value: "eur", symbol: "€", label: "Euro" },
  { value: "jpy", symbol: "¥", label: "Yen" },
  { value: "inr", symbol: "₹", label: "Rupees" },
  { value: "aud", symbol: "A$", label: "Australian Dollars" },
  { value: "cad", symbol: "CAD$", label: "Canadian Dollars" },
  { value: "hkd", symbol: "HK$", label: "Hong Kong Dollars" },
  { value: "sgd", symbol: "SGD$", label: "Singapore Dollars" },
  { value: "twd", symbol: "NT$", label: "Taiwanese Dollars" },
  { value: "nzd", symbol: "NZ$", label: "New Zealand Dollars" },
  { value: "brl", symbol: "R$", label: "Brazilian Real" },
  { value: "zar", symbol: "ZAR", label: "South African Rand" },
  { value: "chf", symbol: "CHF", label: "Swiss Franc" },
  { value: "ils", symbol: "₪", label: "Israeli Shekel" },
  { value: "php", symbol: "₱", label: "Philippine Peso" },
  { value: "krw", symbol: "₩", label: "Korean Won" },
];

export const CurrencyInput: React.FC = ({}) => {
  const { state, dispatch } = useProductForm();

  const handleCurrencySelection = (newValue: CurrencyOption | null) => {
    if (newValue) {
      dispatch({
        type: "SET_FIELD",
        field: "selectedCurrency",
        value: newValue,
      });
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FIELD", field: "price", value: e.target.value });
  };

  const customStyles: StylesConfig<CurrencyOption, false> = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "black" : provided.borderColor,
      color: "black",

      "&:hover": {
        ...provided[":hover"],
        borderColor: "#000",
      },
      borderRadius: "2rem",
    }),
    indicatorSeparator: () => ({}),
    singleValue: (provided) => ({
      ...provided,
    }),
    option: (provided, state) => ({
      ...provided,

      color: state.isSelected ? "white" : "black",
    }),
    menu: (provided) => ({
      ...provided,
      width: "fit-content",
      whiteSpace: "nowrap",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#000",
    }),
  };

  return (
    <div
      className={`input-group  ${
        state.validationErrors.price ? "input-error" : ""
      }`}
      tabIndex={0}
    >
      <Select
        options={currencyOptions}
        value={state.selectedCurrency}
        getOptionLabel={(option) => `${option.symbol} (${option.label})`}
        onChange={handleCurrencySelection}
        styles={customStyles}
        classNamePrefix="react-select"
        components={{ SingleValue: ({ data }) => <div>{data.symbol}</div> }}
        isSearchable={false}
        menuPlacement="top"
      />
      <input
        type="text"
        className={`price-input`}
        placeholder="Price your product"
        value={state.price}
        onChange={handlePriceChange}
        required
      />
    </div>
  );
};
