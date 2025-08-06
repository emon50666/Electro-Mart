import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import HPCard from "../../../components/HomeProductCard/HPCard";

const HomeOffers = () => {
  const axiosPublic = useAxiosPublic();

  const myParams = {
    isHot: false,
    discountPercentage: true,
    isNew: false,
    limit: 6,
  };

  const {
    data: offerProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["offerProducts"],
    queryFn: async () => {
      const result = await axiosPublic.get("/offerProducts", {
        params: myParams,
      });
      return result.data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="px-2 lg:px-8 font_open_sense">
      <div>
        {offerProducts.length > 0 && (
          <h3 className="text-2xl mb-5 font-bold">The Best Offers</h3>

        )}
      </div>
      {/* Preview cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {offerProducts.map((product, idx) => (
          <div key={idx} className="snap-start flex-shrink-0 w-full sm:w-auto">
            <HPCard product={product} refetch={refetch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOffers;
