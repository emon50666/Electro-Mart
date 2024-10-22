import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import './FilterProduct.css';
import useProduct from "../../Hooks/useProduct";
import { useState } from "react";
import Loader from "../Loader/Loader";

const FilterProduct = () => {
  const { products, isLoading, refetch } = useProduct(); // Fetch all products
  const [filters, setFilters] = useState({
      selectedCategory: "",
      selectedBrand: "",
      priceRange: [0, 1000],
  });

  const handleFilterChange = (newFilters) => {
      setFilters(newFilters); // Update filters state with the new values
  };

  // Filter logic
  const filteredProducts = products.filter(product => {

      console.log(product)
      const isCategoryMatch = !filters.selectedCategory || filters.selectedCategory === "all" || product.category === filters.selectedCategory;
      const isBrandMatch = !filters.selectedBrand || filters.selectedBrand === "all" || product.brand === filters.selectedBrand;
      const isPriceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

      return isCategoryMatch && isBrandMatch && isPriceMatch;
  });

  if (isLoading) {
      return <Loader />; // Loader component while products are being fetched
  }

  // If no filters applied, show all products
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  return (
      <div>
          <div className="container grid grid-filter-column">
              <div>
                  <FilterSection onFilterChange={handleFilterChange} filters={filters} />
              </div>

              <section className="product-view--sort">
                  <div className="main-product">
                      <ProductList filteredProducts={displayProducts} refetch={refetch} />
                  </div>
              </section>
          </div>
      </div>
  );
};

export default FilterProduct;
