import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./features/home/Home";
import Checkout from "./features/checkout/Checkout";
import Products from "./features/products/Products";
import { Counter } from "./features/counter/Counter";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/checkout">Basket</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
