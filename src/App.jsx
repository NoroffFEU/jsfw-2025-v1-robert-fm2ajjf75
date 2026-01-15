import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/Home/page";
import ProductDetailRenderer from "./pages/ProductDetail/page";
import Contact from "./pages/Contact/page";
import Checkout from "./pages/Checkout/page";
import CheckoutSuccess from "./pages/CheckoutSuccess/page";
import RouteNotFound from "./pages/RouteNotFound/page";
import { ProductsProvider } from "./context/Products";
import { CartProvider } from "./context/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<ProductDetailRenderer />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Checkout />} />
              <Route path="checkout-success" element={<CheckoutSuccess />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
