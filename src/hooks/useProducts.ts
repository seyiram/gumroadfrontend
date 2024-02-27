import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const token = localStorage.getItem("token");
  const fetchProducts = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useProducts;
