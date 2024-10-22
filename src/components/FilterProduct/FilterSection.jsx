/* eslint-disable react/prop-types */
import { useState } from "react";
import './FilterSection.css';
import Loader from "../Loader/Loader";
import useCategories from './../../Hooks/useCategories';
import useBrands from './../../Hooks/useBrands';

const FilterSection = ({ onFilterChange, filters }) => {
    const { categories, isLoading: loadingCategories } = useCategories();
    const { brands, isLoading: loadingBrands } = useBrands();

    const [selectedCategory, setSelectedCategory] = useState(filters.selectedCategory || "");
    const [selectedBrand, setSelectedBrand] = useState(filters.selectedBrand || "");
    const [priceRange, setPriceRange] = useState(filters.priceRange || [0, 1000]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handlePriceChange = (event) => {
        const maxPrice = Number(event.target.value);
        setPriceRange([0, maxPrice]);
    };

    // Removed the automatic filter application from useEffect

    const applyFilters = () => {
        onFilterChange({ selectedCategory, selectedBrand, priceRange });
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
                    {categories.map(category => (
                        <option key={category.id} value={category.newCategory}>
                            {category.newCategory}
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

            <div className="filter-option">
                <label>Price Range</label>
                <input 
                    type="range" 
                    min="0" 
                    max="1000" 
                    value={priceRange[1]} 
                    onChange={handlePriceChange}
                    step="10"
                />
                <span>${priceRange[0]} - ${priceRange[1]}</span>
            </div>

            {/* Manually trigger applyFilters */}
            <button onClick={applyFilters}>
                Apply Filters
            </button>
        </div>
    );
};

export default FilterSection;
