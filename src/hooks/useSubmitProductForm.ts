import { useState } from "react";
import { useProductForm } from "../context/ProductFormContext";

interface ProductFormData {
  name: string;
  description: string;
  url: string;
  custom_domain: string;
  cover_image: string;
  thumbnail_image: string;
  product_type: string;
  call_to_action: string;
  custom_summary: string;
  price: number;
  currency: string;
}

const useSubmitProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useProductForm();

  const submitForm = async (formData: ProductFormData) => {
    setIsSubmitting(true);
    setError(null);

    console.log('Submitting form data:', formData);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...formData,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit product form");

      const data = await response.json();
      dispatch({ type: "RESET_FORM" });
      console.log("Product submitted successfully", data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting, error };
};

export default useSubmitProductForm;
