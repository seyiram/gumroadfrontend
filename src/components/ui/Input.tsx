import React from "react";
import "./InputStyles.css";

interface InputProps {
  label?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`input ${className}`}
        tabIndex={1}
      />
    </div>
  );
};

export default Input;
