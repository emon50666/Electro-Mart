import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState, useEffect } from "react";
import axios from "axios";
import useStores from "../../../Hooks/useStores";

const UpdateStore = () => {
    const { id } = useParams();
    const { stores } = useStores();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const theStore = stores.find(store => store?._id == id);
    const [imagePreview, setImagePreview] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [, setIsImageDeleted] = useState(false);

    // Set image preview and default image when store data is available
    useEffect(() => {
        if (theStore?.image) {
            setCurrentImage(theStore.image);
            setImagePreview(theStore.image);
        }
    }, [theStore]);

    // Set default values for all inputs using theStore data
    const { register, handleSubmit, reset, control, formState: { errors }, watch } = useForm({
        defaultValues: {
            shopName: theStore?.shopName,
            shopAddress: theStore?.shopAddress,
            shopContactNumber: theStore?.shopContactNumber,
            shortDescription: theStore?.shortDescription,
            operatingHours: theStore?.operatingHours
        }
    });

    const { fields } = useFieldArray({ control, name: "operatingHours" });

    const onSubmit = async (data) => {
        try {
            let imageUrl = currentImage;

            if (data.image?.[0]) {
                const formData = new FormData();
                formData.append("file", data.image[0]);
                formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
                formData.append("cloud_name", "duv5fiurz");

                const imageResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_COULD_NAME}/image/uploa`, formData);
                imageUrl = imageResponse.data.secure_url;
            }

            // Prepare the updated store information
            const updateStoreInfo = {
                shopName: data.shopName,
                shopAddress: data.shopAddress,
                shopContactNumber: data.shopContactNumber,
                shortDescription: data.shortDescription,
                operatingHours: data.operatingHours,
                image: imageUrl,
            };

            const response = await axiosPublic.put(`/stores/${theStore?._id}`, updateStoreInfo);

            if (response.data.modifiedCount) {
                toast.success(`Store is updated`);
                navigate("/dashboard/manageStore");
                reset();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error updating store. Please try again.");
        }
    };

    // Function to handle image preview and selection
    const handleImagePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setIsImageDeleted(false);  // Reset if the user chooses a new image
        }
    };

    // Function to delete the current image
    const handleDeleteImage = async () => {
        setImagePreview(null);
        setIsImageDeleted(true);
        setCurrentImage(null);
    };

    const operatingHours = watch("operatingHours");

    return (
        <div className="px-2 py-6 md:p-6 bg-gray-100 min-h-screen pt-12">
            <h2 className="text-2xl font-bold mb-6">Update Store</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 md:space-y-6 bg-white p-2 md:p-6 rounded-lg shadow-md">
                {/* Shop Name */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Shop Name</label>
                    <input
                        {...register('shopName', { required: false })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shopName && <p className="text-red-500 text-sm">Shop Name is required</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Shop Address</label>
                    <input
                        {...register('shopAddress', { required: false })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shopAddress && <p className="text-red-500 text-sm">Shop Address is required</p>}
                </div>

                {/* Shop Contact Number */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Shop Contact Number</label>
                    <input
                        {...register('shopContactNumber', { required: false })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shopContactNumber && <p className="text-red-500 text-sm">Contact Number is required</p>}
                </div>

                {/* Short Description */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Short Description</label>
                    <textarea
                        {...register('shortDescription', { required: false })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shortDescription && <p className="text-red-500 text-sm">Description is required</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Upload Image</label>
                    <input
                        type="file"
                        {...register('image')}
                        onChange={handleImagePreview}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {imagePreview && (
                        <div className="mt-4">
                            <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover" />
                            <button
                                type="button"
                                onClick={handleDeleteImage}
                                className="mt-2 text-red-500 underline"
                            >
                                Delete Image
                            </button>
                        </div>
                    )}
                </div>

                {/* Operating Hours */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Operating Hours</h3>
                    {fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b-2 pb-3 -mb-3 md:border-none md:pb-0 md:-mb-0">
                            {/* Day */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Day-{index + 1}</label>
                                <input
                                    {...register(`operatingHours.${index}.day`, { required: false })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            {/* Opening Hour */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Opening Hour</label>
                                <input
                                    type="time"
                                    {...register(`operatingHours.${index}.openingHour`, { required: false })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    disabled={operatingHours[index]?.isClosed}
                                />
                            </div>
                            {/* Closing Hour */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Closing Hour</label>
                                <input
                                    type="time"
                                    {...register(`operatingHours.${index}.closingHour`, { required: false })}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    disabled={operatingHours[index]?.isClosed}
                                />
                            </div>
                            {/* Closed Checkbox */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Closed</label>
                                <input
                                    type="checkbox"
                                    {...register(`operatingHours.${index}.isClosed`)}
                                    className="w-5 h-5"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Update Store
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateStore;
