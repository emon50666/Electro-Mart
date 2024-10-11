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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-x-6 ">
                {products.slice(0, 6).map((product) => {
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