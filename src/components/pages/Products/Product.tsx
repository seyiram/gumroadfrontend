import "./Product.css";
import React from "react";
import { useParams } from "react-router-dom";
import Select, { CSSObjectWithLabel, ControlProps } from "react-select";
import useProducts, { Product } from "../../../hooks/useProducts";
import Placeholder from "../../../assets/images/product_placeholder.webp";
import WarningIcon from "./svgs/WarningIcon";
import { useAuth } from "../../../context/AuthContext";

const ProductDetail = () => {
  const { data: productsData } = useProducts();
  const { currentUser } = useAuth();
const [imageError, setImageError] = React.useState(false);

  const { id: productId } = useParams<{ id: string }>();


  const product = productsData?.find(
    (p: Product) => p.id.toString() === productId
  );

  //TODO: change to toast message after redirecting to 404
  if (!product) {
    console.error("Product not found, redirecting to 404");
    return <div>Product Not Found</div>;
  }

  const options = [{ value: "new wishlist", label: "+ New Wishlist" }];

  const styledName = (name: string) => {
    if (!name) return;

    const firstLetter = name.charAt(0).toUpperCase();
    const colors = {
      A: "#98B9F2",
      B: "#79919d",
      c: "#534B62",
    };

    const color: string =
      colors[firstLetter as keyof typeof colors] || "#79919d";

    return (
      <span className="verified-icon" style={{ backgroundColor: color }}>
        {firstLetter}
      </span>
    );
  };

  if (currentUser?.name) {
    console.log(
      "StyledName on User's Name: ",
      <span>styledName(currentUser.name)</span>
    );
  }

  const customStyles = {
    control: (provided: CSSObjectWithLabel, state: ControlProps) => ({
      ...provided,
      padding: "0.5rem",
      outline: state.isFocused ? "2px solid #ff90e8" : "none",
      borderColor: state.isFocused ? "#ff90e8" : "#000",
      "&hover": {
        borderColor: "#000",
      },
      "&focus": {
        borderColor: "#000",
      },
    }),
    placeholder: (provided: CSSObjectWithLabel) => ({
      ...provided,
      textAlign: "left" as const,
      color: "#000",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }),
    menu: (provided: CSSObjectWithLabel) => ({
      ...provided,
      transform: "translate(-0.25rem, -0.25rem);",
      boxShadow: "0.25rem 0.25rem 0rem #000;",
      backgroundColor: "#fff",
      color: "#000",
    }),
  };

  console.log("CurrentUser.Name", currentUser?.name);
  return (
    <div className="pd-container">
      <div className="pd-detail">
        <img
          src={product.cover_image || Placeholder}
          alt=""
          className="pd-placeholder-img"
          style={{ height: product.cover_image && !imageError ? "100%" : "21rem" }}
          onError={() => setImageError(true)}
        />
        <div className="pd-info-wrapper">
          <React.Fragment key={product.id}>
            <div className="pd-info">
              <h1 className="pd-name">{product.name}</h1>
              <div className="pd-details-wrapper">
                <div className="pd-details">
                  <div className="pd-price-wrapper">
                    <div className="pd-price">{`${product.currency}${product.price}`}</div>
                  </div>
                  <div className="pd-seller">
                    {styledName(currentUser?.name || "")}
                    <span className="username">
                      {currentUser?.name || "N/A"}
                    </span>
                  </div>
                  <div className="pd-ratings">0 ratings</div>
                </div>
              </div>
              <div className="pd-info-bottom"></div>
            </div>
          </React.Fragment>

          <div className="pd-sale-info">
            <div className="not-for-sale">
              <span className="not-for-sale-icon">
                <WarningIcon />
              </span>
              This product is not currently for sale.
            </div>
            <div className="wishlist-select-input">
              <Select
                options={options}
                placeholder="Add to wishlist"
                styles={customStyles}
                isSearchable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
