/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ filteredProducts }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the index range for the products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Pagination handler functions
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Products Grid */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:gap-3 bg-[#F6F6F6] p-2 lg:p-5 md:grid-cols-3 grid-cols-2 gap-2 overflow-x-auto lg:overflow-hidden no-scrollbar">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="snap-start flex-shrink-0 w-full sm:w-auto"
          >
            <ProductCard product={product} shop={true} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
