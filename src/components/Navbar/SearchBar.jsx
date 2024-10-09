import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  // Handle search and fetch results from API
  useEffect(() => {
    const searchData = async () => {
      if (search) {
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/products?search=${search}`);
          setSearchResults(res.data); // Assuming res.data is an array of products
        } catch (error) {
          console.error("Error fetching search results", error);
        }
      } else {
        setSearchResults([]); // Clear results if search is empty
      }
    };
    searchData();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-40 md:px-10">
      {/* Your existing navbar code */}
      
      {/* Search form */}
      <form onSubmit={handleSearch} className="hidden lg:flex lg:-mr-16">
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

    
      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="absolute top-full  left-1/2 transform mt-2  -translate-x-1/2 w-[600px] max-h-80 bg-white shadow-lg rounded-lg overflow-auto p-4 z-50">
          <div className="grid grid-cols-2 gap-4 pt-16">
            {searchResults.map((product) => (
              <div key={product.id} className="flex items-center space-x-3">
                <img
                  src={product.images[0]} // Assuming your API returns image URL as 'image'
                  alt={product.title}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">
                    <Link to={`/productDetails/${product._id}`}>{product.title}</Link>
                  </h3>
                  <p className="text-blue-500 font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default SearchBar;
