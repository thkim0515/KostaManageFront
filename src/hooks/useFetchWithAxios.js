import { useState, useEffect } from "react";
import axios from "axios";

const useFetchWithAxios = ({
  url,
  method = "get",
  body = null,
  headers = {},
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [requested, setRequested] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data !== null || requested) return;
    const fetchData = async () => {
      setIsLoading(true);
      setRequested(true);
      try {
        const response = await axios({
          method,
          url,
          data: body,
          headers: headers || { "Content-Type": "application/json" },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, body, headers]);

  return { isLoading, data, error };
};

export default useFetchWithAxios;
