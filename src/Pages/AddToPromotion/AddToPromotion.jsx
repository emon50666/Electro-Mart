import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import PropType from 'prop-types';

const AddToPromotion = ({ setIndex }) => {
    const axiosPubic = useAxiosPublic();
    const [promotionImage, setPromotionImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPromotionImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthName = date.toLocaleString('default', { month: 'long' });
        return `${day} ${monthName}`;
    };

    const onSubmit = async (data) => {
        try {
            const selectedStartDate = new Date(data.offerStartDate);
            const day = selectedStartDate.getDate();
            const month = selectedStartDate.getMonth() + 1;
            const offerStartDay = [parseInt(day), parseInt(month)]

            const formattedOfferStartDate = formatDate(data.offerStartDate);
            const formattedOfferRemoveDate = formatDate(data.offerRemoveDate);

            const today = new Date();
            const startOfYear = new Date(today.getFullYear(), 0, 1);
            const daysPassed = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));

            const formData = new FormData();
            formData.append('file', promotionImage);
            formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
            formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

            // Upload image to Cloudinary
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_COULD_NAME}/image/uploa`,
                formData,
                { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
            );
            const imgUrl = res.data.secure_url;

            const promotionData = {
                title: data.title,
                description: data.description,
                offerStartDate: formattedOfferStartDate,
                offerStartDay: offerStartDay,
                offerRemoveDate: formattedOfferRemoveDate,
                image: imgUrl,
                daysPassed
            };

            const response = await axiosPubic.post('/promotions', promotionData);
            if (response.data.insertedId) {
                toast.success(`Promotion is added. Check manage promotions`);
                setIndex(1);
                reset();
            }
            console.log(promotionData);
        } catch (error) {
            console.error('Error uploading promotion:', error);
            toast.error('Failed to upload promotion. Please try again.');
        }
    };

    const offerStartDate = watch('offerStartDate');

    const validateStartDate = (value) => {
        const today = new Date();
        const selectedStartDate = new Date(value);
        return selectedStartDate >= today || 'Offer start date cannot be earlier than today';
    };

    const validateRemoveDate = (value) => {
        const selectedRemoveDate = new Date(value);
        const selectedStartDate = new Date(offerStartDate);
        return selectedRemoveDate >= selectedStartDate || 'Offer remove date cannot be earlier than the start date';
    };

    return (
        <div className="bg-gray-50 pt-12 pb-4 sm:px-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full border border-gray-300">
                <h2 className="text-2xl mb-4 font-bold text-gray-800">Add Promotion</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Promotion Image */}
                    <div className="p-2 md:p-8 border rounded-md border-gray-300">
                        <label htmlFor="promotionImage" className="block text-sm font-medium text-gray-700">
                            Promotion Image
                        </label>
                        <input
                            type="file"
                            name="promotionImage"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 block w-full md:w-1/2 px-4 py-2 border-dashed border border-gray-200 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                        />
                        {imagePreview && (
                            <div className="mt-4">
                                <img src={imagePreview} alt="Promotion Preview" className="w-32 h-32 object-cover" />
                            </div>
                        )}
                        {errors.promotionImage && (
                            <span className="text-sm text-red-600 font-semibold">
                                Fill This Field
                            </span>
                        )}
                    </div>

                    {/* Promotion Title */}
                    <div className="p-2 md:p-8 border rounded-md border-gray-300">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Promotion Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            {...register('title', { required: true })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        {errors.title && (
                            <span className="text-sm text-red-600 font-semibold">
                                Fill This Field
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <div className="p-2 md:p-8 border rounded-md border-gray-300">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Promotion Description
                        </label>
                        <textarea
                            name="description"
                            rows="2"
                            {...register('description', { required: true })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        {errors.description && (
                            <span className="text-sm text-red-600 font-semibold">
                                Fill This Field
                            </span>
                        )}
                    </div>

                    {/* Offer Start Date */}
                    <div className="p-2 md:p-8 border rounded-md border-gray-300">
                        <label htmlFor="offerStartDate" className="block text-sm font-medium text-gray-700">
                            Offer Start Date
                        </label>
                        <input
                            type="date"
                            name="offerStartDate"
                            {...register('offerStartDate', { required: true, validate: validateStartDate })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                        />
                        {errors.offerStartDate && (
                            <span className="text-sm text-red-600 font-semibold">
                                {errors.offerStartDate.message}
                            </span>
                        )}
                    </div>

                    {/* Offer Remove Date */}
                    <div className="p-2 md:p-8 border rounded-md border-gray-300">
                        <label htmlFor="offerRemoveDate" className="block text-sm font-medium text-gray-700">
                            Offer Remove Date
                        </label>
                        <input
                            type="date"
                            name="offerRemoveDate"
                            {...register('offerRemoveDate', { required: true, validate: validateRemoveDate })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                        />
                        {errors.offerRemoveDate && (
                            <span className="text-sm text-red-600 font-semibold">
                                {errors.offerRemoveDate.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Add Promotion
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
AddToPromotion.propTypes = {
    setIndex: PropType.func,
}
export default AddToPromotion;
