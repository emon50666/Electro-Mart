import { useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find((pack) => pack._id == id);
    console.log(product);
    return (
        <div  className="pt-12 pb-4 sm:px-6">
            <h2 className="text-3xl font-semibold">This the update page of {product.title}</h2>
        </div>
    );
};

export default UpdateProduct;