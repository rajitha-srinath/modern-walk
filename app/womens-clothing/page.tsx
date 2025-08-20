'use client';

import { useContext } from "react";

import ClothCardComponent from "@/components/cloth-card-component";
import { ProductsContext } from "@/contexts/products-context";

export default function MensClothing() {
  const productsContext = useContext(ProductsContext);
  const womensClothing = productsContext?.womensclothing ?? [];

  return (
    <main className="min-h-screen">
      <section className="my-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Women's Clothing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {womensClothing.map((item, idx) => (
            <ClothCardComponent key={idx} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
