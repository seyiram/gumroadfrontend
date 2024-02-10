import React from "react";
import Select, { StylesConfig } from "react-select";

export type CurrencyOption = {
  value: string;
  label: string;
  symbol: string;
};

interface CurrencyInputProps {
  selectedCurrency: CurrencyOption | null;
  setSelectedCurrency: React.Dispatch<
    React.SetStateAction<CurrencyOption | null>
  >;
}

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

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const customSingleValue = ({ data }: { data: CurrencyOption }) => (
    <div>{data.symbol}</div>
  );

  const handleChange = (newValue: CurrencyOption | null) => {
    if (newValue !== null) {
      setSelectedCurrency(newValue);
    }
  };

  const customStyles: StylesConfig<CurrencyOption, false> = {
    control: (provided) => ({
      ...provided,
      border: "1px solid",
      borderRadius: "2rem",
      boxShadow: "none",
      width: "100%",
      padding: "0.1rem 0.5rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      marginRight: "0.1rem",
    }),
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      width: "100%",

      color: state.isSelected ? "white" : "black",
    }),
    menu: (provided) => ({
      ...provided,
      width: "auto",
      textAlign: "left",
      whiteSpace: "nowrap",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#000",
      padding: "1px 2px",
    }),
  };

  return (
    <div className="input-group" tabIndex={0}>
      <Select
        options={currencyOptions}
        value={selectedCurrency}
        getOptionLabel={(option) => `${option.symbol} (${option.label})`}
        onChange={handleChange}
        styles={customStyles}
        classNamePrefix="react-select"
        components={{ SingleValue: customSingleValue }}
        isSearchable={false}
      />
      <input
        type="text"
        className="price-input"
        placeholder="Price your product"
        required
      />
    </div>
  );
};
