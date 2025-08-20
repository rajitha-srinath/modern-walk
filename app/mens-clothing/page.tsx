"use client";

import { useContext } from "react";

import ClothCardComponent from "@/components/cloth-card-component";
import { ProductsContext } from "@/contexts/products-context";

export default function MensClothing() {
  const productsContext = useContext(ProductsContext);
  const mensClothing = productsContext?.mensclothing ?? [];

  return (
    <main className="min-h-screen">
      <section className="my-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Men's Clothing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {mensClothing.map((item, idx) => (
            <ClothCardComponent key={idx} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
