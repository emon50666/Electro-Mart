import { Link } from "react-router-dom";
import useOrder from "../../../../Hooks/useOrder";
import useProduct from "../../../../Hooks/useProduct";
import ReactHtmlParser from "react-html-parser";
const TopSaleProduct = () => {
  const { products } = useProduct();
  const { payments } = useOrder();
  // Extract user orders and main product IDs
  const allUserOrders = payments.map((payment) => payment.userOrder).flat();
  const productMainIds = allUserOrders.map((order) => order.mainProductId);
  // Count occurrences of each mainProductId
  const idCounts = productMainIds.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});
  // Find the most frequently ordered product ID
  const mostFrequentId = Object.keys(idCounts).reduce(
    (a, b) => (idCounts[a] > idCounts[b] ? a : b),
    null
  );
  // Get the most ordered product details
  const mostOrderedProduct = products.find(
    (product) => product?._id === mostFrequentId
  );
  if (!mostOrderedProduct) {
    return <div>No top-selling product found.</div>;
  }
  const {
    _id,
    title,
    images,
    price,
    discountPercentage,
    discountPrice,
    brand,
    shortDescription,
  } = mostOrderedProduct;
  return (
    <div className="p-6 mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Top Selling Product
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Product Image */}
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md">
          <img
            src={images?.[0]}
            alt={title}
            className="w-full h-64 object-contain rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-2/3 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">
            <strong>Brand:</strong> {brand}
          </p>
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold text-red-600">
              ${discountPrice.toFixed(2)}
            </p>
            <p className="text-sm line-through text-gray-500">
              ${price.toFixed(2)}
            </p>
            <p className="text-sm text-green-600 font-semibold">
              {discountPercentage}% off
            </p>
          </div>
          <p className="text-gray-700 mt-2">
            {ReactHtmlParser(shortDescription)}
          </p>
          {/* View Details Button */}
          <div className="flex justify-end">
            <Link
              to={`/productDetails/${_id}`}
              className="text-blue-500 underline hover:bg-blue-700 hover:text-white transition duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopSaleProduct;
