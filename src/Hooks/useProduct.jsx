import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const result = await axiosPublic.get("/products");
      return result.data;
    },
  });
  return { products, refetch, isLoading };
};

export default useProduct;
