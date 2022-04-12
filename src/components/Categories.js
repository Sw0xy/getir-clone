import { useEffect, useState } from "react";
import categoryData from "api/categories.json";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCategories(categoryData);
    }, 2000);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {!categories.length  && <div>Loading...</div>}
          {categories &&
            categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
