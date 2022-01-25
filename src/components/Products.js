import React from "react";
import { useCart } from "react-use-cart";
import { products } from "../data";

function Products() {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col gap-y-5 my-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col gap-y-5 p-10"
        >
          <h2 className="font-bold text-xl">{p.name}</h2>
          <h5>$ {p.price}</h5>
          <button
            onClick={() => addItem(p)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
