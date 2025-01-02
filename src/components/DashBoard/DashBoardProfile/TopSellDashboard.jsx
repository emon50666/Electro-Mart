import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useProduct from "../../../Hooks/useProduct";
import useOrder from "../../../Hooks/useOrder";

const TopSellDashboard = () => {
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
    <div className="p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-sm font-semibold text-gray-800 mb-6">
        Top Selling Products: {parseInt(topSellingProducts?.length)}
      </h2>
      <div className="space-y-1">
        {topSellingProducts.map((product) => {
          const {
            _id,
            title,
            images,
            discountPrice,
            brand,
            price, // Regular price, if no discount
          } = product;

          // Use discountPrice if available, otherwise fallback to price
          const displayPrice = discountPrice || price;

          return (
            <div key={_id} className="flex gap-2 p-2 border-b border-gray-200">
              {/* Product Image */}
              <Link to={`/productDetails/${_id}`} className="w-12">
                <img
                  src={images?.[0]}
                  alt={title}
                  className="transition-transform transform hover:scale-105 duration-300"
                />
              </Link>
              {/* Product Details */}
              <div>
                <Link
                  to={`/productDetails/${_id}`}
                  className="text-[12px] font-semibold text-gray-900"
                >
                  {title.slice(0, 15) + "..."}
                </Link>
                <p className="text-gray-600 text-[12px]">
                  <strong>Brand:</strong> {brand}
                </p>
                <div className="flex items-center space-x-4">
                  <p className="text-[12px] font-semibold text-blue-500 flex items-center">
                    <FaBangladeshiTakaSign />
                    {displayPrice} {/* Display the price (discount or regular) */}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSellDashboard;
