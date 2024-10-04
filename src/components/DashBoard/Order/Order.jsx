import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const Order = () => {
    return (
        <div className="pt-10">
             <h1 className="font-semibold text-2xl mt-4 mb-4 ml-5"> Order List</h1>
            <div className="overflow-x-auto md:overflow-x-auto  bg-white shadow-md">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-orange-50">
        <th>
        
        </th>
        <th>Product Name</th>
        <th>Order ID</th>

        <th>Price</th>
        <th>Quantity</th>
        <th>Payment</th>
        <th>Status</th>
        <th>Action</th>

        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border-l-4  border-orange-500">
        <th>
        
        </th>
        <td>
          <div className="flex  items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Apple Mac Book</div>
            </div>
          </div>
        </td>
        <td>
         #23546
         
        </td>
        <td>$1220</td>
        <th>
          <button className="btn btn-ghost btn-xs">1,638</button>
        </th>
        <td> cash on delivery</td>
        <td> Pending</td>
       <div className="items-center pt-3">
       <td>
        
         
       
       {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button  onClick={()=>document.getElementById('my_modal_3').showModal()}><LuPencilLine className="text-green-500 text-xl font-extrabold"></LuPencilLine> </button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="mb-3 font-semibold">Change Product Status</h1>
   <select className="select select-bordered w-full max-w-xs">

  <option>Pending</option>
  <option>Cancel</option>
  <option>Processing</option>

</select>
<button className=" ml-10 bg-violet-500 px-3  py-2 rounded-md text-white font-semibold ">Confirm</button>
   
   
  </div>
</dialog>
       </td>
       <td>  <FaRegTrashAlt className="text-red-500 text-xl font-bold"></FaRegTrashAlt> </td>
       
       </div>


      </tr>
      

     
    </tbody>

  </table>
</div>
        </div>
    );
};

export default Order;