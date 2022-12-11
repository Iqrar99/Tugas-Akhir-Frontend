import { useEffect, useState } from "react";
import axiosClient from "../networks/apiClient";
import { FoodInterface } from "../types/food";

const useGetFoodList = (url: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<FoodInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      const response = await axiosClient.get(url);
      const data = await response.data;
      setData(data);
      setStatus("finish");
    };

    fetchData();
  }, [url]);

  return {
    status,
    data,
  };
};

export default useGetFoodList;
