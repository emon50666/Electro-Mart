import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import useOrder from "../../../Hooks/useOrder";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Order = () => {
  const { payments, refetch } = useOrder();
  const axiosPublic = useAxiosPublic();
  
  const [expandedProductId, setExpandedProductId] = useState(null);

  // Toggle the accordion for product details
  const toggleAccordion = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId);
  };

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
        axiosPublic.delete(`/order/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="pt-10">
      <h1 className="font-semibold text-2xl mt-4 mb-4 ml-5">Order List</h1>
      <div className="overflow-x-auto md:overflow-x-auto bg-white shadow-md">
        <table className="table">
          <thead>
            <tr className="bg-blue-50 text-md">
              <th></th>
              <th>Product Name</th>
              <th>Order ID</th>
              <th>Price<span className="font-semibold text-black ml-1">( ৳ )</span></th>
              <th>Payment Method</th>
              <th>Shipping Charge</th>
              <th>Status</th>
              <th>Delivery</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((pay, indx) => (
              <React.Fragment key={indx}>
                <tr>
                  <th className="font-normal border">{indx + 1}</th>
                  <td className="border-r cursor-pointer" onClick={() => toggleAccordion(pay._id)}>
                    <div className="flex items-center">
                      <div className="font-normal">{pay?.product_name}</div>
                    </div>
                  </td>
                  <td className="text-blue-500 border-r font-semibold">#{pay?.paymentId}</td>
                  <td className="border-r font-semibold">{pay?.amount}</td>
                  <td className="border-r"><p className="font-normal text-[13px]">{pay?.payment_method}</p></td>
                  <td className="border-r">{pay?.shipping_method}</td>
                  <td className={`border-r ${pay?.status === 'pending' ? 'text-red-500' : 'text-green-400 font-semibold capitalize'}`}>{pay?.status}</td>
                  <td>
                    <Link to={`/complete-order/${pay.paymentId}`} className="border-r cursor-pointer text-blue-500">
                      Package
                    </Link>
                  </td>
                  <td className="border-r">
                    <FaRegTrashAlt onClick={() => handleDeleteOrder(pay._id)} className="text-red-500 cursor-pointer text-xl font-bold" />
                  </td>
                </tr>
                {/* Accordion for product details */}
                {expandedProductId === pay._id && (
                  <tr>
                    <td colSpan="9" className="p-4 bg-gray-100">
                      <div>
                        <h3 className="font-semibold">Product Details</h3>
                        <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Name:</h2>
                            <h2 className="py-2">{pay.cus_name}</h2>
                        </div>
                        <p><strong>Order Date:</strong> {new Date(pay.order_date).toLocaleDateString()}</p>
                        {/* Add more product details as needed */}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
