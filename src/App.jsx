import Layout from "./components/layout";
import Home from "./pages/Home";
import ProductDetailRenderer from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import RouteNotFound from "./pages/RouteNotFound";
import { ProductsProvider } from "./context/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProductsProvider>
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
    </ProductsProvider>
  );
}

export default App;
