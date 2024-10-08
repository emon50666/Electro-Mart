import Swal from "sweetalert2";
import useProduct from "../../../../Hooks/useProduct";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { TbListDetails } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";

const ManageProductTable = () => {
    const { products, refetch } = useProduct();
    const axiosPublic = useAxiosPublic();

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
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        refetch();
                    }
                });
            }
        });
    };
    return (
        <div className="container mx-auto px-4 py-6 font_lexend">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="uppercase text-white font-bold">
                        <tr className="bg-gray-300 text-gray-600">
                            <th className="text-center text-sm md:text-xl"></th>
                            <th className="py-2 md:py-5 text-center text-sm md:text-lg">Image</th>
                            <th className="text-center text-sm md:text-lg">Title</th>
                            <th className="text-center text-sm md:text-lg">price</th>
                            <th className="text-center text-sm md:text-lg">Details</th>
                            <th className="text-center text-sm md:text-lg">Delete</th>
                            <th className="text-center text-sm md:text-lg">Update</th>
                            <th className="text-center text-sm md:text-lg">Promotion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, idx) => (
                            <tr key={idx}>
                                <td className="text-center font-semibold text-sm md:text-xl">{idx + 1}</td>
                                <td className="text-center text-xs md:text-lg">
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="h-20 w-20 object-cover"
                                    />
                                </td>
                                <td className="text-xs md:text-lg"><span className="w-36 md:w-auto block">{product.title}</span></td>
                                <td className="text-center text-xs md:text-lg text-orange-500">£ {product.price}</td>
                                <td className="text-center text-xs md:text-lg">
                                    <Link
                                        to={`/productDetails/${product._id}`}
                                        className="btn bg-teal-400 hover:bg-teal-500 text-white text-sm md:text-lg"
                                    >
                                        <TbListDetails />
                                    </Link>
                                </td>
                                <td className="text-center text-xs md:text-lg space-y-2">
                                    <button
                                        onClick={() => handleDeleteProduct(product._id)}
                                        className="btn bg-[#B91C1C] hover:bg-red-600 text-white text-sm md:text-2xl">
                                        <MdDeleteForever />
                                    </button>
                                </td>
                                <td>
                                    <Link
                                        to={`/dashboard/updateProduct/${product._id}`}
                                        className="btn bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-2xl">
                                        <FaPencil />
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        to={`/dashboard/makePromotion/${product._id}`}
                                        className="btn bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">
                                        Add Promotion
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