import { useParams } from "react-router-dom";
import MainProductDetails from "./Shared/topLayer/MainProductDetails";
import TopLayerOfDetails from "./Shared/topLayer/TopLayerOfDetails";
import { Helmet } from "react-helmet";
import RelativeProducts from "../../components/ProductCard/RelativeProducts";
import ProductReview from "./Shared/ProductReview";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/product/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-9">
      <Helmet>
        <title>Details | {product?.title}</title>
      </Helmet>

      {/* Top Layer */}
      <TopLayerOfDetails title={product?.title} id={product?._id} />

      {/* Main Details */}
      <MainProductDetails product={product} />

      {/* Product Review */}
      <ProductReview product={product} />

      {/* Related Products */}
      <RelativeProducts category={product?.category} productId={product?._id} />
    </div>
  );
};

export default ProductDetails;
