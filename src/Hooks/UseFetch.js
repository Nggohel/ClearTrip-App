import { useState, useEffect } from "react";

const useFetch = (initialUrl, initialData = null) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (options) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData({ method: "GET" });
  }, [url]);

  const request = async (options) => {
    fetchData(options);
  };

  return { data, isLoading, isError, setUrl, request };
};

export default useFetch;
