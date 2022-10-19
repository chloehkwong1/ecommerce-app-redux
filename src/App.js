import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Checkout from "./features/checkout/Checkout";
import Products from "./features/products/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
