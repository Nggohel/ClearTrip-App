import { useState, useEffect } from "react";

const useFetch = (initialUrl = "", method = "GET", bodyData = {}) => {
  //
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState();
  const [body, setBody] = useState(bodyData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url, method) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          projectID: "d0hy5azls1gu",
        },
      });

      const result = await response.json();
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const fetchPostData = async (url, method, data) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          projectID: "d0hy5azls1gu",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    url != "" && fetchData(url, method);
  }, []);

  return { data, isLoading, isError, fetchPostData };
};

export default useFetch;
