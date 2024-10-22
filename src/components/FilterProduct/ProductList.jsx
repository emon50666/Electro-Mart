/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ filteredProducts }) => {
    return (
        <div className="flex lg:grid lg:grid-cols-5 gap-3 md:grid-cols-3 sm:grid-cols-1 overflow-x-auto lg:overflow-hidden no-scrollbar snap-x snap-mandatory">
            {filteredProducts.map(product => (
                <div key={product._id} className="snap-start flex-shrink-0 w-full sm:w-auto">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
