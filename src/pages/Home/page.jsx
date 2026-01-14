import "../../styles/global.scss";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import useLoadingState from "../../hooks/useLoadingState";
import ErrorMessage from "../../components/ui/ErrorMessage";

function Home() {
  const { isLoading, error } = useLoadingState();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Home</h1>
      <p>Products will be shown here.</p>
    </div>
  );
}

export default Home;
