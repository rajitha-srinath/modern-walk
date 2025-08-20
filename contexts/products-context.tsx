"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Product } from "@/types/products";

interface ProductsContextType {
  womensclothing: Product[];
  mensclothing: Product[];
  bothclothing: Product[];
  loading: boolean;
  error: string | null;
}

export const ProductsContext = createContext<ProductsContextType | undefined>({
  womensclothing: [],
  mensclothing: [],
  bothclothing: [],
  loading: true,
  error: null,
});

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [womensclothing, setWomensClothing] = useState<Product[]>([]);
  const [mensclothing, setMensClothing] = useState<Product[]>([]);
  const [bothclothing, setBothClothing] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products?sort=desc");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const womensItems: Product[] = [];
        const mensItems: Product[] = [];
        const bothItems: Product[] = [];

        for (let i = 0; i < data.length; i++) {
          if (data[i].category === `women's clothing`) {
            womensItems.push(data[i]);
          }

          if (data[i].category === `men's clothing`) {
            mensItems.push(data[i]);
          }

          if (
            data[i].category === `women's clothing` ||
            data[i].category === `men's clothing`
          ) {
            bothItems.push(data[i]);
          }
        }

        setWomensClothing(womensItems);
        setMensClothing(mensItems);
        setBothClothing(bothItems);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError('Error occurred while fetching products');
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  const value = {
    womensclothing,
    mensclothing,
    bothclothing,
    loading,
    error,
  };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}
