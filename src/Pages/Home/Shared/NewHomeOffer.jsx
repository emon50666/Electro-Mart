import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import HPCard from "../../../components/HomeProductCard/HPCard";

const NewHomeOffer = () => {
  const axiosPublic = useAxiosPublic();

  const myParams = {
    isHot: false,
    discountPercentage: true,
    isNew: true,
    limit: 2,
  };

  const {
    data: newProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["newProducts"],
    queryFn: async () => {
      const result = await axiosPublic.get("/newProducts", {
        params: myParams,
      });
      return result.data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="px-2 lg:px-8 font_open_sense">
      <div>
        <h3 className="text-2xl mb-5 font-bold">Our New Products</h3>
      </div>
      {/* Preview cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {newProducts.map((product, idx) => (
          <div key={idx} className="snap-start flex-shrink-0 w-full sm:w-auto">
            <HPCard product={product} refetch={refetch} newHome={"yes"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHomeOffer;
