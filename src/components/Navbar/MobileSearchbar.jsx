import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const MobileSearchBar = () => {
  const { products } = useProduct();
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filtered products based on the search input
  const filteredProducts = products.filter((product) => {
    const searchTerm = search.toLocaleLowerCase();
    return (
      product?.title?.toLocaleLowerCase().includes(searchTerm) ||
      product?.brand?.toLocaleLowerCase().includes(searchTerm) ||
      product?.category?.toLocaleLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="navbar bg-base-100 sticky top-0 z-40 md:px-10 lg:hidden px-2">
      {/* Hide on large screens and show on small/medium */}
      {/* Search form */}
      <form
        onChange={(e) => {
          setSearch(e.target.value.toLocaleLowerCase());
          setShowResults(true);
        }}
        className="w-full mx-auto flex justify-center"
      >
        <span className="flex w-full">
          <input
            type="text"
            name="search"
            placeholder="Search Product, Category, Brand..."
            className="border-l border-t border-b border-blue-400 pt-2 pb-2 px-2 border-dashed rounded-l-sm w-full focus:outline-dashed outline-blue-400 focus:ring-0 ml-14 -mr-5"
          />
          <button className="relative right-12 bg-blue-500 rounded-l-none border-b border-blue-500 border-t-border-blue-500 flex text-white pt-[9px] pr-3 pb-[9px] pl-5 rounded-r-sm focus:outline-none focus:ring-0">
            Search
          </button>
        </span>
      </form>

      {/* Conditionally Render Search Results */}
      {search && showResults && (
        <div
          id="search_id"
          ref={searchRef} // Reference for clicking outside detection
          className="absolute top-14 left-1/2 transform mt-2 -translate-x-1/2 w-full max-h-80 bg-gray-200 shadow-lg rounded-lg overflow-auto p-4 z-50"
        >
          <div className="grid grid-cols-2 sm:grid-cols-1 mt-auto gap-4 w-full">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  to={`/productDetails/${product?._id}`}
                  key={product.id}
                  className="flex items-center space-x-3 bg-white rounded-md px-2 py-3"
                >
                  <img
                    src={product.images[0]} // Assuming your API returns image URL as 'images[0]'
                    alt={product.title}
                    className="w-12 h-12 object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      {product.title.slice(0, 50)}..
                    </h3>
                    <p className="text-blue-500 font-medium flex items-center">
                      <FaBangladeshiTakaSign />
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-2 text-center">
                <p className="inline font-bold text-slate-600 m-auto">
                  Product Not Matched
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSearchBar;
