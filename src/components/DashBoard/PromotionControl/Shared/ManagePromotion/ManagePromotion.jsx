import { Link } from "react-router-dom";
import usePromotions from "../../../../../Hooks/usePromotions";
import { BsEye } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const ManagePromotion = () => {
    const axiosPublic = useAxiosPublic();
    const { promotionsProducts, refetch } = usePromotions();

    const handleDeletePromotion = (id) => {
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
        <div className="py-6">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="capitalize bg-gray-200 rounded-lg font-semibold">
                        <tr className="text-black">
                            <th className="text-center text-sm md:text-lg"></th>
                            <th className="py-2 md:py-5 text-sm md:text-md">Image</th>
                            <th className="text-center text-sm md:text-md">Title</th>
                            <th className="text-center text-sm md:text-md">Offer Start</th>
                            <th className="text-center text-sm md:text-md">Offer end</th>
                            <th className="text-center text-sm md:text-md">Details</th>
                            <th className="text-center text-sm md:text-md">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {promotionsProducts.map((product, idx) => (
                            <tr key={idx} className="shadow-sm">
                                <td className="text-center font-semibold md:text-xl">{idx + 1}</td>
                                <td className="text-center md:text-lg">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-16 w-16 object-cover"
                                    />
                                </td>
                                <td className="text-center">
                                    <span className="w-36 md:w-52 text-xs md:text-lg xl:w-auto block">
                                        {product.title}
                                    </span>
                                </td>
                                <td className="text-center md:text-lg text-slate-500">
                                    {product?.offerStartDate}
                                </td>
                                <td className="text-center md:text-lg text-slate-500">
                                    {product?.offerRemoveDate}
                                </td>
                                <td className="text-center text-xs md:text-lg">
                                    <Link
                                        to={`/productDetails/${product._id}`}
                                        className="btn bg-teal-400 hover:bg-teal-500 text-white text-sm md:text-lg"
                                    >
                                        <BsEye />
                                    </Link>
                                </td>
                                <td className="text-center text-xs md:text-md space-y-2">
                                    <button
                                        onClick={() => handleDeletePromotion(product._id)}
                                        className="btn bg-[#B91C1C] hover:bg-red-600 text-white text-sm md:text-2xl"
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePromotion;