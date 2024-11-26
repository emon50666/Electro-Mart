import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTotalAmount = () => {
    const { user } = useAuth(); 
    const axiosPublic = useAxiosPublic();

    const { data: products = [], refetch, isPending } = useQuery({
        queryKey: ["userProducts", user?.email],
        queryFn: async () => {
            const result = await axiosPublic.get("/carts"); 
            return result.data;
        },
        enabled: !!user?.email, 
    });

    
    const userProducts = products.filter(product => product?.adderMail === user?.email);

    
    const totalPrice = userProducts.reduce((sum, product) => sum + (product?.subtotal || 0), 0);

    return { userProducts, totalPrice, refetch, isPending };
};

export default useTotalAmount;
