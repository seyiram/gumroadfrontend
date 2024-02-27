import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductForm } from "../context/ProductFormContext";

const usePageTitle = (defaultTitle: string): string => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>(defaultTitle);
  const { state } = useProductForm();

  useEffect(() => {
    const titleMap: { [key: string]: string } = {
      "/": "Sign In",
      "/homepage": "Home",
      "/products": "Products",
      "/products/new": "What are you creating?",
      "/checkout": "Checkout",
    };

    // Check if the current pathname starts with the dynamic path
    const dynamicPathRegex = /^\/products\/customize-product\/new\/(.+)/;
    const match = location.pathname.match(dynamicPathRegex);

    let currentPageTitle = titleMap[location.pathname] ?? defaultTitle;

    // If the current pathname matches the dynamic path, use the product name
    if (match && state.productName) {
      currentPageTitle = state.productName;
    }

    // Set the document title
    document.title = currentPageTitle;

    // Update state with the current page title
    setPageTitle(currentPageTitle);
  }, [location.pathname, state.productName, defaultTitle]);

  return pageTitle;
};

export default usePageTitle;