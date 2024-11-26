import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useCompare from "./useCompare";

const useAddToCompare = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { compares, refetch } = useCompare();

    const handleAddCompare = (product) => {
        const compareItem = compares.find(Compare => Compare?.mainProductId === product?._id && Compare?.adderMail === user?.email);

        if (compareItem) {
            toast.error("Already added to Compare");
            return;
        }

        const CompareProductInfo = {
            mainProductId: product._id,
            adderMail: user?.email,
            image: product.images[0],
            title: product.title,
            brand: product.brand,
            price: product.price,
            quantity: product.quantity,
        };

        axiosPublic.post("/compares", CompareProductInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Added to Compare");
                    refetch()
                }
            })
            .catch(err => {
                console.error(`Error adding to Compare: ${err}`);
                toast.error("Failed to add to Compare");
            });
    };

    return handleAddCompare;
};

export default useAddToCompare;
