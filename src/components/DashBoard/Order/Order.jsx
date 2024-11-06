import React, {  useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import useOrder from "../../../Hooks/useOrder";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import logo from '../../../assets/images/logo_1.png'; // Adjust the path to your logo image
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

  // Generate PDF
  const downloadPDF = (pay) => {
    const doc = new jsPDF();

    // Adding the logo
   
    doc.addImage(logo, 'PNG', 10, 10, ); // Adjust the position and size of the logo

    // Adding company details
    doc.setFontSize(12);
    doc.text("Company: Electro Mart", 90, 15); // Adjust coordinates (x, y)
    doc.text("Dhaka, Bangladesh , 1230", 90, 20); // Add your company address
    doc.text("Phone: 01786397249", 90, 25); // Add your phone number
    doc.text("electromart@gmail.com", 90, 30); // Add your phone number
    doc.text("www.electromart.com", 90, 35); // Add your phone number



    // Adding title
    doc.setFontSize(18);
    doc.text("Order Details", 10, 50);

    // Define the columns for the table
    const columns = [
        { title: "Detail", dataKey: "detail" },
        { title: "Information", dataKey: "info" },
    ];

    // Prepare the data for the table
    const data = [
        { detail: "Product", info: pay.product_name },
        { detail: "Product Category", info: pay.product_category },
        { detail: "Order ID", info: `#${pay.paymentId}` },
        { detail: "Name", info: pay.cus_name },
        { detail: "Phone", info: pay.cus_phone },
        { detail: "Division", info: pay.cus_state },
        { detail: "District", info: pay.cus_add2 },
        { detail: "City", info: pay.cus_city },
        { detail: "Address", info: pay.cus_add1 },
        { detail: "Payment Method", info: pay.payment_method },
        { detail: "Shipping Method", info: pay.shipping_method },
        { detail: "Status", info: pay.status },
        { detail: "Total Price", info: ` ${pay.amount} Taka` },
    ];

    // Adding the table
    doc.autoTable(columns, data, {
        startY: 55, // Position the table below the title
        margin: { horizontal: 10 },
        styles: { 
            fillColor: [240, 240, 240], // Light gray background for rows
            fontSize: 12,
            cellPadding: 5,
            lineWidth: 0.1,
            lineColor: [200, 200, 200],
        },
        headStyles: {
            fillColor: [54, 162, 235], // Blue background for header
            textColor: [255, 255, 255], // White text
            fontStyle: 'bold',
        },
        alternateRowStyles: {
            fillColor: [255, 255, 255], // White for alternate rows
        },
    });

    // Save the PDF
    doc.save("customer_details.pdf");
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
                  <td> <select name="" id="">
                    <option value="">Complete</option>
                    <option value="">processing</option>
                    <option value="">cancel</option>
                    
                    </select> </td>
                  <td className="border-r">
                    <FaRegTrashAlt onClick={() => handleDeleteOrder(pay._id)} className="text-red-500 cursor-pointer text-xl font-bold" />
                  </td>
                </tr>
                {/* Accordion for product details */}
                {expandedProductId === pay._id && (
                  <tr>
                    <td colSpan="9" className="p-4 bg-gray-100">
                      <div >
                        <h3 className="font-semibold">Customer Details</h3>
                        <div className="grid grid-cols-2">
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Product:</h2>
                            <h2 className="pr-2 py-2 text-sm">({pay?.product_name})</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Product Category:</h2>
                            <h2 className="py-2">{pay?.product_category}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Order ID:</h2>
                            <h2 className="py-2 font-semibold "> #{pay?.paymentId} </h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Name:</h2>
                            <h2 className="py-2">{pay?.cus_name}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Phone:</h2>
                            <h2 className="py-2">{pay?.cus_phone}</h2>
                          </div>

                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Division:</h2>
                            <h2 className="py-2">{pay?.cus_state}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">District:</h2>
                            <h2 className="py-2">{pay?.cus_add2}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">City:</h2>
                            <h2 className="py-2">{pay?.cus_city}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Address:</h2>
                            <h2 className="py-2">{pay?.cus_add1}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Payment Method:</h2>
                            <h2 className="py-2">{pay?.payment_method}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Shipping Method:</h2>
                            <h2 className="py-2">{pay?.shipping_method}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Status:</h2>
                            <h2 className="py-2">{pay?.status}</h2>
                          </div>
                          <div className="border flex items-center">
                            <h2 className="font-semibold px-4 py-2 text-sm">Total Price:</h2>
                            <h2 className="py-2">{pay?.amount}</h2>
                          </div>
                          <div className="border">
                            <button
                              onClick={() => downloadPDF(pay)}
                              className="border-r bg-gradient-to-r my-2 mx-2 from-[#A539D5] via-black to-violet-600 rounded-md py-2 px-6 text-white font-semibold "
                            >
                              Download PDF
                            </button>
                           
                          </div>
                        </div>
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
