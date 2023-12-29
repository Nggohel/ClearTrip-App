import { useState, useEffect } from "react";

const useFetch = (initialUrl, method = "GET") => {
  // body = {}
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState();
  const [body, setBody] = useState(body);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url, method, data) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          projectID: "d0hy5azls1gu",
        },
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
      });

      const result = await response.json();
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url, method, data);
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
