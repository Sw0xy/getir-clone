import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default function ProductCard({product}) {
  return (
    <div className="relative bg-white flex flex-col gap-y-1 font-semibold items-center text-center">
      <button className=" bg-white shadow-md absolute top-3 right-3 w-8 h-8 flex items-center  justify-center border border-gray-200 rounded-lg text-brand-color hover:bg-brand-color hover:text-white">
          <AiOutlinePlus/>
      </button>
      <img src={product.image} alt={product.name} />
      <div className="text-brand-color text-xs  mb-2">₺{product.price}</div>
      <div className="text-gray-900 text-sm">{product.title}</div>
      <div className="text-gray-500 text-xs ">{product.alt}</div>
    </div>
  );
}
