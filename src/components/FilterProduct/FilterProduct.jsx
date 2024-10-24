import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import './FilterProduct.css';
import useProduct from "../../Hooks/useProduct";
import { useState } from "react";
import Loader from "../Loader/Loader";

const FilterProduct = () => {
  const { products, isLoading, refetch } = useProduct(); 
  const [filters, setFilters] = useState({
      selectedCategory: "all", 
      selectedBrand: "all",    
      
  });

  const handleFilterChange = (newFilters) => {
      setFilters(newFilters); 
  };

  // Filter logic
  const filteredProducts = products.filter(product => {
      const isCategoryMatch = filters.selectedCategory === "all" || product.category === filters.selectedCategory;
      const isBrandMatch = filters.selectedBrand === "all" || product.brand === filters.selectedBrand;
     

      return isCategoryMatch && isBrandMatch ;
  });

  if (isLoading) {
      return <Loader />; 
  }

  // If no filters applied, show all products
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

//   console.log(displayProducts);
//   console.log(filteredProducts);
//   console.log(products)

  return (
      <div>
          <div className="container grid grid-filter-column px-8 py-16 gap-10">
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
