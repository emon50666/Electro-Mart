import { useLoaderData, useParams } from "react-router-dom";
import ProductReview from "../../components/ProductReview/ProductReview";
import MainProductDetails from "./Shared/topLayer/MainProductDetails";
import TopLayerOfDetails from "./Shared/topLayer/TopLayerOfDetails";


const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const productDetails = products.find((pack) => pack._id == id);
    console.log(productDetails);

    return (
        <div className="space-y-9">
            {/* top layer of details */}
            <TopLayerOfDetails title={productDetails.title} />
            {/* main details section */}
            <MainProductDetails product={productDetails} />
            <ProductReview />
            <br /><br /><br /><br /><br />
        </div>
    );
};

export default ProductDetails;