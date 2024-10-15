import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import useStores from "../../../../Hooks/useStores";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const ManageStoreTable = () => {
    const { stores, refetch } = useStores();
    const axiosPublic = useAxiosPublic();

    const handleDeleteStore = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/stores/${id}`).then((res) => {
                    if (res.data.deletedCount) {
                        refetch();
                    }
                });
            }
        });
    };

    return (
        <div className="py-6">
            <div className="overflow-x-auto">
                <table className="table border">
                    <thead className="capitalize bg-gray-200 rounded-lg font-semibold">
                        <tr className="text-black">
                            <th className="text-center text-sm md:text-lg"></th>
                            <th className="py-2 md:py-5 text-center text-sm md:text-md">Image</th>
                            <th className="text-center text-sm md:text-md">Title</th>
                            <th className="text-center text-sm md:text-md">Address</th>
                            <th className="text-center text-sm md:text-md">Details</th>
                            <th className="text-center text-sm md:text-md">Delete</th>
                            <th className="text-center text-sm md:text-md">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stores.map((store, idx) => (
                            <tr key={idx} className="shadow-sm border-b-2 border-gray-200">
                                <td className="border-r-2 border-gray-200 text-center font-semibold md:text-xl">{idx + 1}</td>
                                <td className="border-r-2 border-gray-200 text-center md:text-lg">
                                    <img
                                        src={store.image}
                                        alt={store.title}
                                        className="h-16 w-16 object-cover"
                                    />
                                </td>
                                <td className="border-r-2 border-gray-200 text-xs md:text-lg text-center">
                                    <span className="w-36 md:w-52 text-sm xl:w-auto block">
                                        {store?.shopName}
                                    </span>
                                </td>
                                <td className="border-r-2 border-gray-200 text-xs md:text-lg text-center">
                                    <span className="w-36 md:w-52 text-sm xl:w-auto block">
                                        {store?.shopAddress}
                                    </span>
                                </td>
                                <td className="border-r-2 border-gray-200 text-center text-xs md:text-lg">
                                    <Link
                                        to={`/storeDetails/${store._id}`}
                                        className="btn bg-teal-400 hover:bg-teal-500 text-white text-sm md:text-lg"
                                    >
                                        <BsEye />
                                    </Link>
                                </td>
                                <td className="border-r-2 border-gray-200 text-center text-xs md:text-md space-y-2">
                                    <button
                                        onClick={() => handleDeleteStore(store._id)}
                                        className="btn bg-[#B91C1C] hover:bg-red-600 text-white text-sm md:text-2xl"
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                                <td className="border-r-2 border-gray-200 text-center text-xs md:text-lg">
                                    <Link
                                        to={`/dashboard/updateStore/${store._id}`}
                                        className="btn bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-2xl"
                                    >
                                        <FaPencil />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageStoreTable;
