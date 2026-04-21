import { useState, useEffect } from 'react';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
): UseFetchState<T> {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const result = await fetchFn();
        if (isMounted) {
          setState({ data: result, loading: false, error: null });
        }
      } catch (err) {
        if (isMounted) {
          setState({ data: null, loading: false, error: err as Error });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return state;
}

export default useFetch;
