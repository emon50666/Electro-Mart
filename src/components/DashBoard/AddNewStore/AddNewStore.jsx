import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddNewStore = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState(null);
    const { register, handleSubmit, reset, control, formState: { errors }, watch } = useForm({
        defaultValues: {
            operatingHours: Array(7).fill({ day: '', openingHour: '', closingHour: '', isClosed: false })
        }
    });

    const { fields } = useFieldArray({ control, name: "operatingHours" });
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("file", data.image[0]);
            formData.append("tags", `hello, medium, gist`);
            formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
            formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

            const imageResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_COULD_NAME}/image/uploa`, formData);
            const imageUrl = imageResponse.data.secure_url;

            // Prepare data to send to the backend
            const storeInfo = {
                shopName: data.shopName,
                shopAddress: data.shopAddress,
                shopContactNumber: data.shopContactNumber,
                shortDescription: data.shortDescription,
                operatingHours: data.operatingHours,
                image: imageUrl,
            };

            const response = await axiosPublic.post("/stores", storeInfo);

            if (response.data.insertedId) {
                toast.success(`Store is added`);
                // navigate("/dashboard/manageProduct");
                navigate("/dashboard/manageStore");
                reset();
            }
            console.log(storeInfo);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error adding store. Please try again.");
        }
    };

    // Function to handle image preview
    const handleImagePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Watch operatingHours fields to conditionally disable opening and closing time
    const operatingHours = watch("operatingHours");

    return (
        <div className="px-2 py-6 md:p-6 bg-gray-100 min-h-screen pt-12">
            <h2 className="text-2xl font-bold mb-6">Add New Store</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 md:space-y-6 bg-white p-2 md:p-6 rounded-lg shadow-md">

                {/* Shop Name */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Shop Name</label>
                    <input
                        {...register('shopName', { required: true })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shopName && <p className="text-red-500 text-sm">Shop Name is required</p>}
                </div>

                {/* Shop Address */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Shop Address</label>
                    <input
                        {...register('shopAddress', { required: true })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shopAddress && <p className="text-red-500 text-sm">Shop Address is required</p>}
                </div>

                {/* Shop Contact Number */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Shop Contact Number</label>
                    <input
                        {...register('shopContactNumber', { required: true })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shopContactNumber && <p className="text-red-500 text-sm">Contact Number is required</p>}
                </div>

                {/* Short Description */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Short Description</label>
                    <textarea
                        {...register('shortDescription', { required: true })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.shortDescription && <p className="text-red-500 text-sm">Description is required</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Upload Image</label>
                    <input
                        type="file"
                        {...register('image', { required: true })}
                        onChange={handleImagePreview}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {errors.image && <p className="text-red-500 text-sm">Image is required</p>}
                    {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-32 h-32 object-cover" />}
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
                                    {...register(`operatingHours.${index}.day`)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            {/* Opening Hour */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Opening Hour</label>
                                <input
                                    type="time"
                                    {...register(`operatingHours.${index}.openingHour`)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    disabled={operatingHours[index]?.isClosed}
                                />
                            </div>
                            {/* Closing Hour */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Closing Hour</label>
                                <input
                                    type="time"
                                    {...register(`operatingHours.${index}.closingHour`)}
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
                        Add Store
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewStore;
