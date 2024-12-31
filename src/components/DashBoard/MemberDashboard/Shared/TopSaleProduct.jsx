import { Link } from "react-router-dom";
import useOrder from "../../../../Hooks/useOrder";
import useProduct from "../../../../Hooks/useProduct";
import ReactHtmlParser from "react-html-parser";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const TopSaleProduct = () => {
  const { products } = useProduct();
  const { payments } = useOrder();

  console.log("Products:", products); // Debug: Check product data
  console.log("Payments:", payments); // Debug: Check payment data

  // Extract user orders and main product IDs
  const allUserOrders = payments?.map((payment) => payment.userOrder).flat() || [];
  const productMainIds = allUserOrders.map((order) => order.mainProductId);

  // Count occurrences of each mainProductId
  const idCounts = productMainIds.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  console.log("ID Counts:", idCounts); // Debug: Check ID counts

  // Sort products by count (descending order)
  const sortedProductIds = Object.keys(idCounts).sort(
    (a, b) => idCounts[b] - idCounts[a]
  );

  // Get details of top-selling products
  const topSellingProducts = sortedProductIds
    .map((id) => products.find((product) => product._id === id))
    .filter(Boolean); // Remove undefined entries

  console.log("Top Selling Products:", topSellingProducts); // Debug: Check top-selling products

  if (!topSellingProducts || topSellingProducts.length === 0) {
    return <div>No top-selling products found. Please try again later.</div>;
  }

  return (
    <div className="p-6 mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Top Selling Products:
      </h2>
      <div className="space-y-6 ">
        {topSellingProducts.map((product) => {
          const {
            _id,
            title,
            images,
            price,
            discountPercentage,
            discountPrice,
            brand,
            shortDescription,
          } = product;

          return (
            <div
              key={_id}
              className="flex flex-col md:flex-row items-center gap-6 p-4 border-b border-gray-200"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md">
                <img
                  src={images?.[0]}
                  alt={title}
                  className="w-full h-56 object-contain rounded-lg transition-transform transform hover:scale-105 duration-300"
                />
              </div>
              {/* Product Details */}
              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">
                  <strong>Brand:</strong> {brand}
                </p>
                <div className="flex items-center space-x-4">
                  <p className="text-2xl font-semibold text-blue-500 flex items-center">
                    <FaBangladeshiTakaSign />
                    {discountPrice}
                  </p>
                  <p className="text-sm line-through text-red-500 flex items-center">
                    <FaBangladeshiTakaSign />
                    {price}
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    {discountPercentage}% off
                  </p>
                </div>
                <p className="text-gray-700 mt-2">
                  {ReactHtmlParser(shortDescription)}
                </p>
                {/* View Details Button */}
                <div>
                  <Link
                    to={`/productDetails/${_id}`}
                    className="text-blue-500 underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSaleProduct;
