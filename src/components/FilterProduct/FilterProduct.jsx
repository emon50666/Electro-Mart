import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import "./FilterProduct.css";
import useProduct from "../../Hooks/useProduct";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useLocation } from "react-router-dom";

const FilterProduct = () => {
  const { products, isLoading, refetch } = useProduct();
  const [filters, setFilters] = useState({
    selectedCategory: "all",
    selectedBrand: "all",
    minPrice: "",
    maxPrice: "",
    sortOrder: "new",
  });

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category") || "all";
    setFilters((prevFilters) => ({
      ...prevFilters,
      selectedCategory: category,
    }));
  }, [location]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      filters.selectedCategory === "all" ||
      product.category === filters.selectedCategory;
    const isBrandMatch =
      filters.selectedBrand === "all" ||
      product.brand === filters.selectedBrand;
    const isPriceMatch =
      (!filters.minPrice ||
        product.discountPrice >= filters.minPrice ||
        product.price >= filters.minPrice) &&
      (!filters.maxPrice ||
        product.discountPrice <= filters.maxPrice ||
        product.price <= filters.maxPrice);

    return isCategoryMatch && isBrandMatch && isPriceMatch;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortOrder === "priceLowHigh") {
      return a.price - b.price;
    } else if (filters.sortOrder === "priceHighLow") {
      return b.price - a.price;
    } else {
      // Default sort by newest (assuming there is a property `addDate`)
      return new Date(b.addDate) - new Date(a.addDate);
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="grid grid-filter-column lg:px-8 py-16 gap-10">
        <div>
          <FilterSection
            onFilterChange={handleFilterChange}
            filters={filters}
          />
        </div>

        <section className="product-view--sort">
          <div className="main-product">
            {sortedProducts.length > 0 ? (
              <ProductList
                filteredProducts={sortedProducts}
                refetch={refetch}
              />
            ) : (
              <div className="no-product-alert ">
                <p>No products found matching the selected filters.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FilterProduct;
