import { FaRegTrashAlt } from "react-icons/fa";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";
import useFilteredOrders from "../../../Hooks/useFilterOrder";
import UserAuth from "../../../Hooks/useAuth";

const MemberOrder = () => {
    const {user} = UserAuth();
 
  const axiosPublic = useAxiosPublic();
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { orders } = useFilteredOrders(user);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const allProductDetails = {};
        
        await Promise.all(
          orders.flatMap(payment =>
            payment.products.map(async (product) => {
              const response = await axios.get(`http://localhost:9000/products/${product.mainProductId}`);
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
  }, [orders]);

  // Delete order
  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3B82F6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/orders/${id}`).then(() => {
         
        });
      }
    });
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
                <td className="border-r border-gray-200">
                  <div className="font-normal">
                    {pay.products.map((product) =>
                      productDetails[product.mainProductId]?.title || "Loading..."
                    ).join(", ")}
                  </div>
                </td>
                <td className="text-blue-500 border-r font-semibold">#{pay.tran_id}</td>
                <td className="border-r font-semibold">{pay.totalAmount}</td>
                <td className="border-r">{pay.paymentMethod}</td>
                <td className="border-r">{pay.shipping}</td>
                <td className={`border-r ${pay.paymentStatus === "pending" ? "text-red-500" : "text-green-400 font-semibold capitalize"}`}>
                  {pay.paymentStatus}
                </td>
                <td className={`border-r ${pay.orderStatus === "Processing" ? "text-red-500" : "text-green-400 font-semibold capitalize"}`}>
                  {pay.orderStatus}
                </td>
                <td className="border-r">
                  <FaRegTrashAlt
                    onClick={() => handleDeleteOrder(pay._id)}
                    className="text-red-500 cursor-pointer text-xl font-bold"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberOrder;
