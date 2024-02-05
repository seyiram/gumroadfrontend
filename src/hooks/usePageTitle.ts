import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const usePageTitle = (defaultTitle: string): string => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>(defaultTitle);

  useEffect(() => {
    const titleMap: { [key: string]: string } = {
      "/": "Home",
      "/products": "Products",
      "/checkout": "Checkout",
    };

    // Determine the page title based on the current pathname
    const currentPageTitle = titleMap[location.pathname] || defaultTitle;

    // Set the document title
    document.title = currentPageTitle;

    // Update state with the current page title
    setPageTitle(currentPageTitle);
  }, [location.pathname, defaultTitle]);

  return pageTitle;
};

export default usePageTitle;
