import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { useProducts } from "../../context/Products";

function ProductDetail() {
  const { id } = useParams();
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const product = products.find((p) => p.id === id);

  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <div>
      <h1 className="mb-4">{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
