import { useState, useEffect } from "react";
import Loader from "../../../components/Loader/Loader";
import ProductCard from "../../../components/ProductCard/ProductCard";
import useProduct from "../../../Hooks/useProduct";

const HomeOffers = () => {
  const { products, refetch, isLoading } = useProduct();
  const [visibleProducts, setVisibleProducts] = useState(5); // Default for smaller screens

  useEffect(() => {
    const updateVisibleProducts = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1280) {
        // xl
        setVisibleProducts(12);
      } else if (screenWidth >= 1024) {
        // lg
        setVisibleProducts(10);
      } else {
        // Smaller screens
        setVisibleProducts(5);
      }
    };

    // Update on load and resize
    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);

    return () => {
      window.removeEventListener("resize", updateVisibleProducts);
    };
  }, []);

  if (isLoading) return <Loader />;

  // Filter products based on discountPercentage
  const filteredProducts = products.filter(
    (product) =>
      product?.title.length > 30 &&
      product?.discountPercentage &&
      product?.isHot != "yes" &&
      product?.isNew != "yes" &&
      product?.quantity > 0
  );

  return (
    <div className="px-2 lg:px-8 font_open_sense">
      <div>
        {filteredProducts.length > 0 && (
          <h3 className="text-2xl mb-5 font-bold">The Best Offers</h3>
        )}
      </div>
      {/* Preview cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {filteredProducts.slice(0, visibleProducts).map((product, idx) => (
          <div key={idx} className="snap-start flex-shrink-0 w-full sm:w-auto">
            <ProductCard product={product} refetch={refetch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOffers;
