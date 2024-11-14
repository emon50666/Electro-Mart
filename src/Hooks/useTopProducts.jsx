import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTopProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data: payments = [], refetch, isLoading } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
            const result = await axiosPublic.get("/payments");
            return result.data;
        },
    });

    // Calculate top-selling products
    const productOrderCounts = payments.reduce((acc, payment) => {
        // Assuming each `payment` contains an array of products in `payment.products`
        payment?.products?.forEach(product => {
            const productId = product.productId; // Use the unique product ID
            const quantity = product.quantity || 1; // Assuming `quantity` represents the number ordered

            // Increment count for this product in the accumulator
            acc[productId] = (acc[productId] || 0) + quantity;
        });
        return acc;
    }, {});

    // Convert the product order counts to an array and sort by order count
    const topSellingProducts = Object.entries(productOrderCounts)
        .map(([productId, orderCount]) => ({ productId, orderCount }))
        .sort((a, b) => b.orderCount - a.orderCount); // Sort in descending order

    return { payments, topSellingProducts, refetch, isLoading };
};

export default useTopProducts;
