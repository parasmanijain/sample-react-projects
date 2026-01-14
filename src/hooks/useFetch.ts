import { useState, useEffect } from "react";
import axios, { type AxiosResponse, AxiosError } from "axios";

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
};

export function useFetch<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        timeout = setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 500);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err);
        } else {
          setError(new AxiosError("An unknown error occurred"));
        }
      }
    };
    fetchData();
    return () => {
      clearTimeout(timeout);
    };
  }, [url]);

  return { data, loading, error };
}
