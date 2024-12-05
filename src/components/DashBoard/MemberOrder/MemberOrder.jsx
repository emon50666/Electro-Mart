import { FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Loader from "../../Loader/Loader";
import useFilteredOrders from "../../../Hooks/useFilterOrder";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UserAuth from "../../../Hooks/useAuth";
import useOrder from "../../../Hooks/useOrder";

const MemberOrder = () => {
  const { user } = UserAuth();
  const axiosPublic = useAxiosPublic();
  const { orders } = useFilteredOrders(user);
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState({});
  const { refetch } = useOrder();

  // Fetch product details for each order
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const allProductDetails = {};

        await Promise.all(
          orders.flatMap((payment) =>
            payment.products.map(async (product) => {
              const response = await axiosPublic.get(
                `/products/${product.mainProductId}`
              );
              allProductDetails[product.mainProductId] = response.data;
            })
          )
        );

        setProductDetails(allProductDetails);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (orders) fetchProductDetails();
  }, [axiosPublic, orders]);

  // Delete order
  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3B82F6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/orders/${id}`).then(() => {
          refetch();
          // Optionally refetch or update the UI after deletion
        });
      }
    });
  };

  // Toggle order details visibility
  const toggleDetails = (orderId) => {
    setShowDetails((prev) => ({
      ...prev,
      [orderId]: !prev[orderId], // Toggle visibility for the clicked order
    }));
  };

  if (isLoading) return <Loader />;

  return (
    <div className="pt-10">
      <h1 className="font-semibold text-2xl mt-4 mb-4 ml-5">Order List</h1>
      <div className="overflow-x-auto bg-white shadow-md">
        <table className="table">
          <thead>
            <tr className="bg-blue-50 text-md">
              <th>#</th>
              <th>Product Name</th>
              <th>Order ID</th>
              <th>Price (৳)</th>
              <th>Payment Method</th>
              <th>Shipping Charge</th>
              <th>Payment</th>
              <th>Delivery</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((pay, indx) => (
              <tr key={pay._id}>
                <td className="font-normal border">{indx + 1}</td>

                {/* Product Name(s) */}
                <td className="border-r border-gray-200">
                  <div className="font-normal">
                    {pay.products
                      .map(
                        (product) =>
                          productDetails[product.mainProductId]?.title ||
                          "Loading..."
                      )
                      .join(", ")}
                  </div>
                </td>

                {/* Order ID */}
                <td className="text-blue-500 border-r font-semibold">
                  #{pay.tran_id}
                </td>

                {/* Price */}
                <td className="border-r font-semibold">{pay.totalAmount}</td>

                {/* Payment Method */}
                <td className="border-r">{pay.paymentMethod}</td>

                {/* Shipping Charge */}
                <td className="border-r">{pay.shipping}</td>

                {/* Payment Status */}
                <td
                  className={`border-r ${
                    pay.paymentStatus === "pending"
                      ? "text-red-500"
                      : "text-green-400 font-semibold capitalize"
                  }`}
                >
                  {pay.paymentStatus}
                </td>

                {/* Order Status */}
                <td
                  className={`border-r ${
                    pay.orderStatus === "Processing"
                      ? "text-red-500"
                      : "text-green-400 font-semibold capitalize"
                  }`}
                >
                  {pay.orderStatus}
                </td>

                {/* Action Column */}
                <td className="border-r flex flex-col justify-center items-center">
                  <FaRegTrashAlt
                    onClick={() => handleDeleteOrder(pay._id)}
                    className="text-red-500 cursor-pointer text-xl font-bold"
                  />
                  <hr className="border border-gray-200 w-full my-1" />
                  <button
                    className="text-blue-500 ml-3"
                    onClick={() => toggleDetails(pay._id)}
                  >
                    {showDetails[pay._id] ? "Hide Details" : "Show Details"}
                  </button>
                </td>
              </tr>
            ))}

            {/* Show product details */}
            {orders?.map(
              (pay) =>
                showDetails[pay._id] && (
                  <tr key={`details - ${pay._id}`} className="bg-gray-100">
                    <td colSpan="9" className="p-4">
                      <div>
                        <h2 className="font-semibold text-xl mb-2">
                          Ordered Products
                        </h2>
                        <ul>
                          {pay.products.map((product, idx) => {
                            const productDetail =
                              productDetails[product.mainProductId];
                            return (
                              <li
                                key={idx}
                                className="flex justify-between py-2 border-b"
                              >
                                <span>
                                  {productDetail?.title || "Loading..."}
                                </span>
                                <span>
                                  {productDetail?.price
                                    ? `${productDetail.price} ৳`
                                    : "Loading..."}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberOrder;
