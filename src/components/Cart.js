import React from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="font-bold text-4xl">Cart ({totalItems})</h1>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="max-w-sm rounded overflow-hidden shadow-lg gap-y-5 p-10 flex flex-col"
          >
            {item.quantity} x {item.name} &mdash;
            <button
              className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded w-fit"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              Remove item
            </button>
            <button
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-fit"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              Add item
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-fit"
            >
              Remove from cart
            </button>
          </li>
        ))}
      </ul>

      <h2 className="m-10 text-right font-bold text-xl">
        Total Price ${cartTotal}
      </h2>
    </div>
  );
}

export default Cart;
