import Loader from "../../../components/Loader/Loader";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useProduct from "../../../Hooks/useProduct";

const HomeOffers = () => {
  const { products, refetch, isLoading } = useProduct();
  if (isLoading) return <Loader />;
  return (
    <div className="px-8  font_open_sense">
      <div>
        <h3 className="text-2xl mb-5 font-bold">The Best Offers</h3>
      </div>
      {/* preview cards */}
      <div className="flex lg:grid lg:grid-cols-5 gap-3 md:grid-cols-3 sm:grid-cols-1 overflow-x-auto lg:overflow-hidden no-scrollbar snap-x snap-mandatory">
        {products.slice(0, 5).map((product, idx) => (
          <>
            {((product?.isHot === "yes" || product?.isNew === "yes" || product?.discountPercentage > 1) && product?.quantity > 0) && (
              <div key={idx} className="snap-start flex-shrink-0 w-full sm:w-auto">
                <ProductCard product={product} refetch={refetch} />
              </div>
            )}
          </>
        ))}
      </div>


    </div>
  );
};

export default HomeOffers;