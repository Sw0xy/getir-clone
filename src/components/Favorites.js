import { useState, useEffect } from "react";
import Products from "api/products.json";
import ProductCard from "./ProductCard";
export default function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
    console.log(Products);
  }, []);
  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2 bg-white rounded-lg overflow-hidden">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
}
