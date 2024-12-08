/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ filteredProducts }) => {
  // // console.log(filteredProducts);
  return (
    <div className=" grid lg:grid-cols-4 xl:grid-cols-4 md:gap-6 bg-[#F6F6F6] p-2 lg:p-5 md:grid-cols-3 grid-cols-2 gap-2 overflow-x-auto lg:overflow-hidden no-scrollbar">
      {filteredProducts.map((product) => (
        <div
          key={product._id}
          className="snap-start  flex-shrink-0 w-full sm:w-auto"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
