import { useState, useCallback } from "react";

function useLoadingState(initialLoading = true) {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [error, setError] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(false);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    setError,
    setIsLoading,
    startLoading,
    stopLoading,
  };
}

export default useLoadingState;
