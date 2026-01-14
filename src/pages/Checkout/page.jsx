import LoadingSpinner from "../../components/ui/LoadingSpinner";
import useLoadingState from "../../hooks/useLoadingState";
import ErrorMessage from "../../components/ui/ErrorMessage";

function Checkout() {
  const { isLoading, error } = useLoadingState();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return <div>Checkout Page</div>;
}

export default Checkout;
