import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useOrder = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: payments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const result = await axiosPublic.get("/orders");
      return result.data;
    },
  });
  return { payments, refetch, isLoading };
};

export default useOrder;
