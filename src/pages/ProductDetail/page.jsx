import LoadingSpinner from "../../components/ui/LoadingSpinner";
import useLoadingState from "../../hooks/useLoadingState";
import ErrorMessage from "../../components/ui/ErrorMessage";

function ProductDetail() {
  const { isLoading, error } = useLoadingState();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return <div>Product Detail Page</div>;
}

export default ProductDetail;
