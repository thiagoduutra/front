import { useCallback, useEffect, useRef, useState } from "react";

interface UseAsyncDataOptions {
  errorMessage?: string;
  shouldIgnoreError?: (error: unknown) => boolean;
}

export function useAsyncData<TData>(
  loader: () => Promise<TData>,
  initialData: TData,
  options?: UseAsyncDataOptions,
) {
  const [data, setData] = useState<TData>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const initialDataRef = useRef(initialData);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const nextData = await loader();
      setData(nextData);
    } catch (requestError) {
      if (optionsRef.current?.shouldIgnoreError?.(requestError)) {
        setData(initialDataRef.current);
        setError(null);
        return;
      }

      setError(
        optionsRef.current?.errorMessage ??
          "Não foi possível carregar os dados da API.",
      );
      throw requestError;
    } finally {
      setIsLoading(false);
    }
  }, [loader]);

  useEffect(() => {
    refresh().catch(() => undefined);
  }, [refresh]);

  return { data, setData, isLoading, error, refresh };
}
