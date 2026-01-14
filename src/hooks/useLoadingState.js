import { useEffect, useState } from "react";

function useLoadingState(delay = 800) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isLoading, error, setError };
}

export default useLoadingState;
