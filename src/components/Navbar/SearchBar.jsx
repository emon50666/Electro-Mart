import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";

const SearchBar = () => {
  const { products } = useProduct();
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(true);
  const searchRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-40 md:px-10">
      {/* Search form */}
      <form 
        onChange={(e) => {
          setSearch(e.target.value.toLocaleLowerCase());
          setShowResults(true); // Show results as the user types
        }} 
        className="hidden lg:flex lg:-mr-16"
      >
        <input
          type="text"
          name="search"
          placeholder="Search Products..."
          className="border-l border-t border-b border-orange-400 w-96 pt-2 pb-2 px-2 py-2 border-dashed rounded-l-full focus:outline-dashed outline-orange-400 focus:ring-0"
        />
        <button className="relative right-12 bg-orange-500 rounded-l-none border-b border-orange-500 border-t-border-orange-500 flex text-white pt-[8px] pr-3 pb-[9px] pl-5 rounded-r-full focus:outline-none focus:ring-0">
          Search
        </button>
      </form>

      {/* Conditionally Render Search Results */}
      {search && showResults && (
        <div 
          id="search_id"
          ref={searchRef} // Reference for clicking outside detection
          className="absolute pt-36 top-20 left-1/2 transform mt-2 -translate-x-1/2 w-[600px] max-h-80 bg-slate-200 shadow-lg rounded-lg overflow-auto p-4 z-50"
        >
          <div className="grid grid-cols-2 gap-4">
            {products
              .filter((product) => {
                const searchTerm = search.toLocaleLowerCase();
                return (
                  product.title.toLocaleLowerCase().includes(searchTerm) ||
                  product.brand.toLocaleLowerCase().includes(searchTerm) ||
                  product.category.toLocaleLowerCase().includes(searchTerm)
                );
              })
              .map((product) => (
                <Link
                  to={`/productDetails/${product?._id}`}
                  key={product.id} className="flex items-center space-x-3 bg-white rounded-md px-2">
                  <img
                    src={product.images[0]} // Assuming your API returns image URL as 'images[0]'
                    alt={product.title}
                    className="w-12 h-12 object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      {product.title.slice(0, 50)}..
                    </h3>
                    <p className="text-blue-500 font-medium">${product.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
