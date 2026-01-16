import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { useProducts } from "../../context/Products";
import { useCart } from "../../context/Cart";
import ProductDetailRenderer from "./ProductDetailRenderer";

function ProductDetail() {
  const { id } = useParams();
  const { products, isLoading, error } = useProducts();
  const { addToCart } = useCart();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const product = products.find((p) => p.id === id);

  if (!product) return <ErrorMessage message="Product not found" />;

  return <ProductDetailRenderer product={product} onAddToCart={addToCart} />;
}

export default ProductDetail;
