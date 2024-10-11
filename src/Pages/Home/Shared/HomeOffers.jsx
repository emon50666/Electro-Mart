import ProductCard from "../../../components/ProductCard/ProductCard";
import useProduct from "../../../Hooks/useProduct";

const HomeOffers = () => {
    const { products, refetch } = useProduct();
    return (
        <div className="px-8 font_open_sense">
            <div>
                <h3 className="text-2xl mb-5 font-bold">The Best Offers</h3>
            </div>
            {/* preview cards */}

            <div className="flex xl:grid-cols-5 2xl:grid-cols-6 lg:grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-6 overflow-x-auto lg:overflow-hidden snap-x snap-mandatory">
                {products.slice(0, 5).map((product) => {
                    return <>
                        {(product?.isHot === "yes" || product?.isNew === "yes" || product?.discountPercentage > 1) && (
                            <ProductCard product={product} refetch={refetch} />
                        )}
                    </>
                })}
            </div>

        </div>
    );
};

export default HomeOffers;