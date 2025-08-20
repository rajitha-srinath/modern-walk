import Image from "next/image";

import { Product } from "@/types/products";

const ClothCardComponent = ({ item }: { item: Product }) => {
  return (
    <div
      key={item.id}
      className="bg-white rounded-xl flex flex-col shadow-custom"
    >
      <div className="p-4 flex-1 flex flex-col">
        <div className="min-h-20">
          <h2 className="text-center font-semibold text-lg mb-2">
            {`${item.title.slice(0, 40)}...`}
          </h2>
        </div>
        <div className="flex justify-center mb-4">
          <Image
            src={item.image}
            width={120}
            height={180}
            alt={item.title}
            className="rounded-lg object-cover"
          />
        </div>

        {/* <p className="text-center text-gray-600 text-sm">{item.desc}</p> */}
      </div>
      <div
        className={`p-3 rounded-lg ${
          item.category === `men's clothing` ? "bg-men-color" : "bg-women-color"
        }`}
      >
        <h4 className="text-center text-xl font-bold text-price-color">
          Rs {item.price}
        </h4>
        <p className="text-center font-normal">
          {`${item.description.slice(0, 70)}...`}
        </p>
      </div>
    </div>
  );
};

export default ClothCardComponent;
