import React from "react";
import "./ButtonStyles.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "submit-btn",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
