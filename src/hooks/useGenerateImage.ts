import { useMutation } from "@tanstack/react-query";
import { useProductForm } from "../context/ProductFormContext";
interface GenerateImageResponse {
  url: string;
}

async function generateDallEImage(
  prompt: string
): Promise<GenerateImageResponse> {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/openai/generate_image`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ prompt, n: 1, size: "1024x1024" }),
    }
  );

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export function useGenerateImage() {
  const { dispatch } = useProductForm();

  const mutation = useMutation<GenerateImageResponse, Error, string>({
    mutationFn: generateDallEImage,
    onSuccess: (data) => {
      dispatch({ type: "SET_COVER_IMAGE", url: data.url });
      console.log("Image URL: ", data.url);
    },
    onError: (error: Error) => {
      console.error("Error generating image:", error.message);
      throw new Error("Error generating image from DALL-E");
    },
  });
  return {
    ...mutation,
    generateImage: mutation.mutate,
  };
}
