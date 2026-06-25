import { productCards } from "../constants/productCards";
import type { Product } from "../types/product";

const normalize = (value: string) => value.trim().toLowerCase();

export const searchProducts = (query: string): Product[] => {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  return productCards.filter((product) => {
    const haystack = [
      product.name,
      product.upper,
      product.medium,
      product.basic,
      product.description,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
};
