import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <CartProvider>
      <div className="m-10 flex justify-between">
        <Products />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
