import PropTypes from 'prop-types';
import { FaDeleteLeft } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { Tooltip } from 'react-tooltip';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const RightSideModal = ({ isOpen, onClose, number, sendImages, refetch }) => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();

    if (!isOpen) return null;

    // console.log(number);
    const getEndpoint = () => {
        if (number === 1) return "/rightTop";
        if (number === 2) return "/rightBottomL";
        return "/rightBottomR";
    };

    const onSubmit = async (data) => {
        const file = data.image?.[0];
        if (!file) {
            Swal.fire("Error", "Please select an image.", "error");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

        try {
            // console.log("Uploading to Cloudinary:", formData);

            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_COULD_NAME}/image/uploa`,
                formData,
                { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
            );

            const url = res.data.secure_url;
            const bannerInfo = { title: data.title || "None", url };

            // console.log(getEndpoint);
            const response = await axiosPublic.post(getEndpoint(), bannerInfo);
            if (response.data.insertedId) {
                toast.success("Slider Added");
                refetch();
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
                axiosPublic.delete(`${getEndpoint()}/${id}`).then((res) => {
                    if (res.data.deletedCount) {
                        toast.success("Slider Deleted");
                        refetch();
                    }
                });
            }
        });
    };

    const isDisabled = sendImages?.length === 1;
    if (isDisabled) {
        toast("Delete the previous image", { icon: '⚠️' });
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    ✕
                </button>
                <div className="py-5">
                    <div className="max-h-[30vh] overflow-x-auto overflow-y-auto">
                        {number == 1 && <p className="text-sm text-gray-600">image size should be 620x190</p>}
                        {number == 2 && <p className="text-sm text-gray-600">image size should be 304x185</p>}
                        {number == 3 && <p className="text-sm text-gray-600">image size should be 304x185</p>}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Img</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sendImages?.map((slide, index) => (
                                    <tr key={slide._id || index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask h-12 w-12">
                                                        <img
                                                            src={slide.url}
                                                            alt="Slider"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{slide.title || "Picture"}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteSlide(slide._id)}
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
                                {...register("image", { required: !isDisabled })}
                                className="file-input file-input-bordered w-full max-w-xl rounded-none py-1 px-3 my-1"
                                disabled={isDisabled}
                            />
                            <input
                                type="submit"
                                value="Add Slide"
                                className="bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 w-full rounded focus:outline-none focus:bg-teal-400 transition duration-300 ease-in-out transform hover:scale-95"
                                disabled={isDisabled}
                            />
                        </form>
                    </div>
                    <Tooltip id="my-tooltip" />
                </div>
            </div>
        </div>
    );
};

RightSideModal.propTypes = {
    number: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    sendImages: PropTypes.array,
    refetch: PropTypes.func,
};

export default RightSideModal;
