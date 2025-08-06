import Loader from "../../components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import HPCard from "../../components/HomeProductCard/HPCard";

const FeaturedProduct = () => {
  const axiosPublic = useAxiosPublic();
  const myParams = {
    isHot: true,
    discountPercentage: true,
    isNew: false,
    limit: 6,
  };

  const {
    data: featureProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["featureProducts"],
    queryFn: async () => {
      const result = await axiosPublic.get("/featureProducts", {
        params: myParams,
      });
      return result.data;
    },
  });

  // console.log(featureProducts);

  if (isLoading) return <Loader />;

  return (
    <div className="px-2 lg:px-8 pb-10">
      <div>
        <h3 className="text-2xl mb-5 font-bold">Featured Products</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {featureProducts.map((product, idx) => (
          <div key={idx} className="snap-start flex-shrink-0 w-full sm:w-auto">
            <HPCard product={product} refetch={refetch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
