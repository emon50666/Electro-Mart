import Swal from "sweetalert2";
import useProduct from "../../../../Hooks/useProduct";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign, FaPencil } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";

const ManageProductTable = () => {
    const axiosPublic = useAxiosPublic();
    const { products, refetch } = useProduct();
    const handleDeleteProduct = (id) => {
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
                axiosPublic.delete(`/products/${id}`).then((res) => {
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
                <table className="table">
                    <thead className="capitalize bg-gray-200 rounded-lg font-semibold">
                        <tr className="text-black">
                            <th className="text-center text-sm md:text-lg"></th>
                            <th className="py-2 md:py-5 text-center text-sm md:text-md">Image</th>
                            <th className="text-center text-sm md:text-md">Title</th>
                            <th className="text-center text-sm md:text-md">Price</th>
                            <th className="text-center text-sm md:text-md">Details</th>
                            <th className="text-center text-sm md:text-md">Delete</th>
                            <th className="text-center text-sm md:text-md">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, idx) => (
                            <tr key={idx} className="shadow-sm">
                                <td className="text-center font-semibold md:text-xl">{idx + 1}</td>
                                <td className="text-center md:text-lg">
                                    <img
                                        src={product?.images[0]}
                                        alt={product?.title}
                                        className="h-16 w-16 object-cover"
                                    />
                                </td>
                                <td className="text-xs md:text-lg">
                                    <span className="w-36 md:w-52 text-sm xl:w-auto block">
                                        {product?.title?.slice(0, 45) + '...'}
                                    </span>
                                </td>
                                <td className="text-center md:text-lg text-blue-500">
                                    <span className="flex items-center justify-center gap-1">
                                        <FaBangladeshiTakaSign /> <p>{product?.price}</p>
                                    </span>
                                </td>
                                <td className="text-center text-xs md:text-lg">
                                    <Link
                                        to={`/productDetails/${product?._id}`}
                                        className="btn bg-teal-400 hover:bg-teal-500 text-white text-sm md:text-lg"
                                    >
                                        <BsEye />
                                    </Link>
                                </td>
                                <td className="text-center text-xs md:text-md space-y-2">
                                    <button
                                        onClick={() => handleDeleteProduct(product?._id)}
                                        className="btn bg-[#B91C1C] hover:bg-red-600 text-white text-sm md:text-2xl"
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                                <td className="text-center">
                                    <Link
                                        to={`/dashboard/updateProduct/${product?._id}`}
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

export default ManageProductTable;