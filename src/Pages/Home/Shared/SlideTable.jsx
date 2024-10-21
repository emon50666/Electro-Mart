import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useSlideImage from "../../../Hooks/useSlideImage";
import { Tooltip } from "react-tooltip";
import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const SlideTable = ({ onClose }) => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();
    const [sliderImages, refetch] = useSlideImage();

    const onSubmit = async (data) => {
        const file = data.image[0];
        console.log(file);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'elector_mart_key');
        formData.append('api_key', '211491792754595');

        try {

            const res = await axios.post(
                'https://api.cloudinary.com/v1_1/duv5fiurz/image/upload',
                formData,
                { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
            );

            const url = res.data.secure_url;
            const bannerInfo = { title: data.title || "None", url };


            const response = await axiosPublic.post("/banners", bannerInfo);
            if (response.data.insertedId) {
                toast.success("Slider Added");
                onClose();
            }
        } catch (error) {
            console.error("Error uploading the image:", error);
            Swal.fire("Error", "Failed to add the slider. Please try again.", "error");
        }
    };

    const handleDeleteSlide = (id) => {
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
                axiosPublic.delete(`/banners/${id}`).then((res) => {
                    if (res.data.deletedCount) {
                        refetch();
                    }
                });
            }
        });
    };

    return (
        <div className="py-5">
            <div className="max-h-[30vh] overflow-x-auto overflow-y-auto">
                <table className="table">
                    {/* Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Rows */}
                        {sliderImages.map((image, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask h-12 w-12">
                                                <img
                                                    src={image.url}
                                                    alt="Slider"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{image.title || "Picture"}</td> {/* Assuming each image has a title */}
                                <td>
                                    <button
                                        onClick={() => handleDeleteSlide(image._id)}
                                        className="btn text-lg md:text-xl hover:bg-red-700 hover:text-white"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Delete"
                                    >
                                        <FaDeleteLeft />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="border-2 p-3 my-5">
                <h4 className="text-xl font-semibold">Add Slider</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2">
                        <label className="block text-gray-700">Title (Optional)</label>
                        <input
                            type="text"
                            {...register("title")}
                            className="w-full p-2 border border-gray-300 rounded mt-1 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full max-w-xl rounded-none py-1 px-3 my-1"
                    />
                    <input
                        type="submit"
                        value="Add Slide"
                        className="bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 w-full rounded focus:outline-none focus:bg-teal-400 transition duration-300 ease-in-out transform hover:scale-95"
                    />
                </form>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

SlideTable.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default SlideTable;
