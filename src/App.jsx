import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/Home/page";
import ProductDetail from "./pages/ProductDetail/page";
import Contact from "./pages/Contact/page";
import Checkout from "./pages/Checkout/page";
import CheckoutSuccess from "./pages/CheckoutSuccess/page";
import RouteNotFound from "./pages/RouteNotFound/page";
import { ProductsProvider } from "./context/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Checkout" element={<Checkout />} />
            <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </ProductsProvider>
  );
}

export default App;
