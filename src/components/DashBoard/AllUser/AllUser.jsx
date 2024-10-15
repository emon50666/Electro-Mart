import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";


const AllUser = () => {
  return (
    <div className="pt-10">
      <h1 className="font-semibold text-2xl mt-4 mb-4 ml-5"> Users List</h1>
      <div className="overflow-x-auto md:overflow-x-auto  bg-white shadow-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-50">
              <th>

              </th>
              <th> Name</th>
              <th>Email</th>

              <th>Date</th>
              <th>Status</th>

              <th>Action</th>
             

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="">
              <th>
              
              </th>
              <td>
             <h1>emon</h1>
              </td>
              
              
              <th>
                <small>emon50666@gamil.com</small>
              </th>
              <td> 2/34/32</td>
              <td> Admin</td>

             
              <div className="items-center pt-3">
                <td>



                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button onClick={() => document.getElementById('my_modal_3').showModal()}><LuPencilLine className="text-green-500 text-xl font-extrabold"></LuPencilLine> </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                      <h1 className="mb-3 font-semibold">Change User Status</h1>
                      <select className="select select-bordered w-full max-w-xs">

                        <option>Admin</option>
                        <option>Member</option>
                        <option>Seller  </option>

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

export default AllUser;