import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const usePageTitle = (defaultTitle: string): string => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>(defaultTitle);

  useEffect(() => {
    const titleMap: { [key: string]: string } = {
      "": "Home",
      "products": "Products",
      "checkout": "Checkout",
    };

    // Extract the first segment of the pathname as the main route
    const mainRoute = location.pathname.split("/")[1]; // Split and take the second element (first segment after '/')

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
