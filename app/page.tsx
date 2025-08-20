'use client';

import Link from "next/link";

import ClothCardComponent from "@/components/cloth-card-component";
import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { ProductsContext } from "@/contexts/products-context";
import { useContext } from "react";


export default function Home() {
  const productsContext = useContext(ProductsContext);
  const bothclothing = productsContext?.bothclothing ?? [];

  return (
    <main className="min-h-screen">
      <section className="my-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Flash Sale</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bothclothing.slice(0, 4).map((item: Product) => (
            <ClothCardComponent key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 my-20">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/mens-clothing" className="group">
            <div className="min-h-40 flex items-center justify-center rounded-xl bg-men-color text-white text-2xl font-semibold shadow-custom">
              Men's Clothing
            </div>
          </Link>
          <Link href="/womens-clothing" className="group">
            <div className="min-h-40 flex items-center justify-center rounded-xl bg-women-color text-white text-2xl font-semibold shadow-custom">
              Women's Clothing
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
