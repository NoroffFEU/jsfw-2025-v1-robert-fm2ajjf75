import { BASE_URL } from "./config.js";

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/online-shop`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
