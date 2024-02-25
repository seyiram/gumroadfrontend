import React from "react";
import "./HomepageStyles.css";
import { Helmet } from "react-helmet";
import ProductImage from "../../../assets/images/20f9d3e0a6869c1b28a1.webp";
import ProductCard from "./ProductCreateCard";
import ChecklistCard from "./ChecklistCard";
import ActivityCard from "./ActivityCard";

const Homepage = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header className="header">
        <h1>Welcome to Gumroad.</h1>
      </header>
      <div className="page-content">
        <ProductCard
          image={ProductImage}
          altText="Create a product"
          title="We're here to help you get paid for your work."
          buttonText="Create your first product"
        />
        <ChecklistCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default Homepage;
