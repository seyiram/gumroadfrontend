import React from "react";
import "./ProductCreateCardStyles.css";
import Button from "../../ui/Button";

interface ProductCardProps {
  image: string;
  altText: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ image, altText }) => {
  return (
    <div className="product-card">
      <img src={image} alt={altText} className="product-card-image" />
      <h2>We're here to help you get paid for your work.</h2>
      <Button className="cta-button">Create your first product</Button>
    </div>
  );
};

export default ProductCard;
