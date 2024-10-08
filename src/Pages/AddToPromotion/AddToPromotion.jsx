import { useLoaderData, useParams } from "react-router-dom";

const AddToPromotion = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find((pack) => pack._id == id);
    console.log(product);
    return (
        <div  className="pt-12 pb-4 sm:px-6">
            <h2 className="text-3xl font-semibold">{product.title} Add it to promotion</h2>
        </div>
    );
};

export default AddToPromotion;