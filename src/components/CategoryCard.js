import React from "react";

export default function CategoryCard({ category: { id, title, image } }) {
  return (
    <a className="flex flex-col group items-center text-center p-4 transition hover:bg-purple-50" href="/">
      <img  className="w-12 rounded border border-gray-200" src={image} alt="" />
      <span className="whitespace-nowrap text-sm font-semibold group-hover:text-brand-color tracking-tight">{title}</span>
    </a>
  );
}
