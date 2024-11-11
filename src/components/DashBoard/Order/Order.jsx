
import { FaRegTrashAlt } from "react-icons/fa";
import useOrder from "../../../Hooks/useOrder";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Order = () => {
  const { payments ,refetch} = useOrder();
  console.log(payments);
const axiosPublic = useAxiosPublic()

  // delete order 

  const handleDeleteOrder= (id) => {
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
             <h1 className="font-semibold text-2xl mt-4 mb-4 ml-5"> Order List</h1>
            <div className="overflow-x-auto md:overflow-x-auto  bg-white shadow-md">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-blue-50 text-md">
        <th>
        
        </th>
        <th>Product Name</th>
        <th>Order ID</th>

        <th>Price<span className=" font-semibold text-black ml-1 items-center ">( ৳ )</span> </th>
        <th>Payment Method</th>
        <th>Shipping Charge</th>
        <th>Status</th>
        <th>Action</th>

        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      payments?.map((pay,indx) => <>
       <tr key={indx} className="">
        <th className="font-normal border">
        {indx+1}
        </th>
        <td className="border-r border-gray-200">
          <div className="flex  items-center ">
            
            <div>
              <div className="font-normal ">{pay?.product_name} </div>
            </div>
          </div>
        </td>
        <td className="text-blue-500 border-r font-semibold">
         #{pay?.paymentId}
         
        </td>
        <td className="border-r font-semibold  ">{pay?.amount} </td>
        <th className="border-r" >
          <p className="font-normal text-[13px] ">{pay?.payment_method} </p>
        </th>
        <td className="border-r"> {pay?.shipping_method}  </td>
        <td className={`border-r ${pay?.status === 'pending' ? 'text-red-500' : 'text-green-400 font-semibold capitalize'}`}>
  {pay?.status}
</td>
      
      
       <td className="border-r ">   <FaRegTrashAlt  onClick={() => handleDeleteOrder(pay._id)} className="text-red-500 cursor-pointer text-xl font-bold"></FaRegTrashAlt> </td>
       
     


      </tr>
      </>)
     }
      

     
    </tbody>

  </table>
</div>
        </div>
    );
};

export default Order;
