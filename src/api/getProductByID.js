import { BASE_URL } from "./config.js";

export async function getProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}
