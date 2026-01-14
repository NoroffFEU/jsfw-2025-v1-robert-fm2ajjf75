import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/Home/page";
import ProductDetail from "./pages/ProductDetail/page";
import RouteNotFound from "./pages/RouteNotFound/page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ProductDetail" element={<ProductDetail />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
