import "./AllProductsStyles.css";
import ProductCard from "./ProductCreateCard";
import ProductNudgeImage from "../../../assets/images/product_nudge-8c7fc991c030d82ce090c71d5dc0640f56e34bac45e8b2c7e6de0bc72ee3fb8d.svg";

const AllProducts = () => {
  return (
    <div className="allproducts-container">
      <ProductCard
        image={ProductNudgeImage}
        altText="product image"
        title="We've never met an idea we didn't like."
        description1="Your first product doesn’t need to be perfect. Just put it out there, and see if it sticks."
        buttonText="New Product"
        description2={
          <span>
            or <u>learn more about the products dashboard</u>
          </span>
        }
      />
    </div>
  );
};

export default AllProducts;
