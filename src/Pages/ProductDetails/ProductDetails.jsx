import { useLoaderData, useParams } from "react-router-dom";
import MainProductDetails from "./Shared/topLayer/MainProductDetails";
import TopLayerOfDetails from "./Shared/topLayer/TopLayerOfDetails";
import { Helmet } from "react-helmet";
import RelativeProducts from "../../components/ProductCard/RelativeProducts";
import ProductReview from "./Shared/ProductReview";


const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find((pack) => pack._id == id);
    // // console.log(product);

    return (
        <div className="space-y-9">
            <Helmet>
                <title>Details | Elector Mart</title>
            </Helmet>
            {/* top layer of details */}
            <div className="">
                <TopLayerOfDetails title={product?.title} id={product?._id} />
            </div>
            {/* main details section */}
            <div className="">
                <MainProductDetails product={product} />
            </div>
            {/* review and full description */}
            <ProductReview product={product} />
            {/* same category product */}
            <RelativeProducts category={product?.category} productId={product?._id} />
        </div>
    );
};
export default ProductDetails;