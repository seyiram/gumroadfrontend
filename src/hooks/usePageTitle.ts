import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductForm } from "../context/ProductFormContext";

const usePageTitle = (defaultTitle: string): string => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>(defaultTitle);
  const { state} = useProductForm()

  useEffect(() => {
    const titleMap: { [key: string]: string } = {
      "/": "Sign In",
      "/homepage": "Home",
      "/products": "Products",
      "/products/new": "What are you creating?",
      '/products/customize-product': state.productName,
      "checkout": "Checkout",
    };

    // Extract the first segment of the pathname as the main route
    const mainRoute = location.pathname; 

    // Fix the page title based on the main route, fall back to defaultTitle if not found
    const currentPageTitle = titleMap[mainRoute] ?? defaultTitle;

    // Set the document title
    document.title = currentPageTitle;

    // Update state with the current page title
    setPageTitle(currentPageTitle);
  }, [location.pathname, defaultTitle]);

  return pageTitle;
};

export default usePageTitle;
