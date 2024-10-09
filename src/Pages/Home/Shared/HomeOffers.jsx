import ProductCard from "../../../components/ProductCard/ProductCard";
import useProduct from "../../../Hooks/useProduct";

const HomeOffers = () => {
    const { products,refetch } = useProduct();
    return (
        <div className="px-8 font_open_sense">
            <div>
                <h3 className="text-3xl font-bold">The Best Offers</h3>
            </div>
            {/* preview cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-6 md:mb-20">
                {products.slice(0, 5).map((product) => {
                 return   <>
                        {(product?.isHot === "yes" || product?.isNew === "yes") && (
                            <ProductCard product={product} refetch={refetch}/>
                        )}
                    </>
                })}
            </div>
        </div>
    );
};

export default HomeOffers;