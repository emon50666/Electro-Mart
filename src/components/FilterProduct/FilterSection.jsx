/* eslint-disable react/prop-types */
import { useState } from "react";
import "./FilterSection.css";
import Loader from "../Loader/Loader";

import useBrands from "./../../Hooks/useBrands";
import useCategory from "../../Hooks/useCategory";

const FilterSection = ({ onFilterChange, filters }) => {
  const { category: categories, isLoading: loadingCategories } = useCategory();
  const { brands, isLoading: loadingBrands } = useBrands();

  const [selectedCategory, setSelectedCategory] = useState(
    filters.selectedCategory || "all"
  );
  const [selectedBrand, setSelectedBrand] = useState(
    filters.selectedBrand || "all"
  );

  const [minPrice, setMinPrice] = useState(""); // For minimum price filter
  const [maxPrice, setMaxPrice] = useState(""); // For maximum price filter


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };


  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const applyFilters = () => {
    onFilterChange({ selectedCategory, selectedBrand });
  };

  if (loadingCategories || loadingBrands) {
    return <Loader />;
  }

  return (
    <div className="filter-section">
      <h3>Filter Products</h3>

      <div className="filter-option">
        <label>Category</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-option">
        <label>Brand</label>
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">All Brands</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
        {/* Price Range Filter */}
        <div className="filter-option">
        <label>Price Range</label>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="price-input"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="price-input"
          />
        </div>
      </div>


      <button
        className="filter-button bg-[#FF5E2B] hover:bg-orange-600"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSection;
