import React from "react";
import "./ProductCreateCardStyles.css";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

interface ProductCardProps {
  image: string;
  altText: string;
  title: string;
  description1?: string;
  description2?: React.ReactNode;
  buttonText: string;
  className?: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  altText,
  title,
  description1,
  description2,
  buttonText,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={altText} className="product-card-image" />
      <h2>{title}</h2>
      <p className="product-description1">{description1 && description1}</p>
      <NavLink to="/products/new">
        <Button className="cta-button">{buttonText}</Button>
      </NavLink>
      <p className="product-description2">{description2 && description2}</p>
    </div>
  );
};

export default ProductCard;
