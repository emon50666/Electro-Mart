import { Link, useNavigate, useParams } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useCategories from "../../Hooks/useCategories";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaStepBackward } from "react-icons/fa";

const UpdateProduct = () => {
    const { products } = useProduct();
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { categories } = useCategories();
    const navigate = useNavigate();
    const [galleryImages, setGalleryImages] = useState([]); // For previewing gallery images
    const [image, setImage] = useState({ array: [] }); // To store uploaded image URLs
    const [removedImages, setRemovedImages] = useState([]); // Track removed images

    const product = products.find((pack) => pack._id == id);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
        watch,
    } = useForm();

    useEffect(() => {
        // Set current date
        const currentDate = new Date().toISOString().slice(0, 10);
        setValue("addDate", currentDate);

        // Set default values and gallery images from the product object
        if (product) {
            setValue("title", product.title);
            setValue("shortDescription", product.shortDescription);
            setValue("fullDescription", product.fullDescription);
            setValue("price", product.price);
            setValue("discountPercentage", product.discountPercentage);
            setValue("brand", product.brand);
            setValue("category", product.category);
            setValue("quantity", product.quantity);
            setValue("isHot", product.isHot);
            setValue("isNew", product.isNew);
            // Set initial gallery images from product
            if (product.images && product.images.length > 0) {
                setGalleryImages(product.images);
                setImage({ array: product.images }); // Keep existing images
            }
        }
    }, [product, setValue]);

    const price = watch("price");
    const discountPercentage = watch("discountPercentage");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const calculateDiscountPrice = () => {
        if (price && discountPercentage) {
            const discountAmount = (price * discountPercentage) / 100;
            return price - discountAmount;
        }
        return "";
    };

    useEffect(() => {
        const discountPrice = calculateDiscountPrice();
        setValue("discountPrice", discountPrice);
    }, [price, discountPercentage, setValue, calculateDiscountPrice]);

    // Prevent default form submission when interacting with image inputs
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    // Handle image upload preview
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imagesArray = files.map((file) => URL.createObjectURL(file));
        setGalleryImages((prevImages) => [...prevImages, ...imagesArray]);
    };

    // Handle image removal
    const removeImage = (indexToRemove) => {
        const removedImage = galleryImages[indexToRemove];
        // Add removed image to the list of removed images
        setRemovedImages([...removedImages, removedImage]);

        // Remove the image from the gallery preview
        setGalleryImages((prevImages) =>
            prevImages.filter((_, index) => index !== indexToRemove)
        );

        // Remove the image from the stored array
        const newImageArray = image.array.filter((_, index) => index !== indexToRemove);
        setImage({ array: newImageArray });
    };

    const onSubmit = async (data) => {
        try {
            const imgGallery = Array.from(data.gallery || []);
            const uploadedImageUrls = [];

            // Handle asynchronous image uploads
            const uploaded = imgGallery.map((file) => {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "elector_mart_key");
                formData.append("api_key", "211491792754595");

                // Return a promise that resolves to the secure_url of the uploaded image
                return axios.post('https://api.cloudinary.com/v1_1/duv5fiurz/image/upload', formData, {
                    headers: { "X-Requested-With": "XMLHttpRequest" }
                }).then(res => {
                    return res.data.secure_url; // Return image URL
                });
            });

            // Await all uploads and store the resulting URLs in an array
            const imageUrls = await axios.all(uploaded);
            uploadedImageUrls.push(...imageUrls);

            // Merge newly uploaded images with existing ones
            const finalImages = [...image.array, ...uploadedImageUrls].filter(img => !removedImages.includes(img));

            // Create the product info object with all images
            const productInfo = {
                title: data.title,
                shortDescription: data.shortDescription,
                fullDescription: data.fullDescription,
                images: finalImages, // Include all images (existing + newly uploaded - removed)
                quantity: parseInt(data.quantity),
                brand: data.brand,
                category: data.category,
                isHot: data.isHot,
                isNew: data.isNew,
                discountPercentage: parseInt(data.discountPercentage),
                discountPrice: data.discountPrice,
                price: parseInt(data.price),
                addDate: data.addDate,
            };

            // Send the updated product information to the backend
            const response = await axiosPublic.put(`/products/${id}`, productInfo);

            if (response.data.modifiedCount > 0) {
                toast.success(`${data.title} is updated successfully`);
                navigate("/dashboard/manageProduct");
                reset();
            }

        } catch (error) {
            console.error("Error uploading product:", error);
            toast.error("Failed to update product. Please try again.");
        }
    };

    return (
        <div className="bg-gray-50 pt-12 pb-4 sm:px-6">
            <div className='flex justify-between items-center bg-white mt-10 mb-4 lg:my-5 px-7 py-3'>
                <h3 className='text-lg font-semibold'>Change as you need</h3>
                <Link
                    to={`/dashboard/manageProduct`}
                    className='btn bg-slate-500 text-white lg:text-xl'
                >
                    <FaStepBackward />
                </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-full">
                <h2 className="text-2xl mb-4 font-bold text-gray-800 text-center">Update Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown} className="space-y-6">
                    {/* Product Gallery Images */}
                    <div className='p-2 md:p-8 border-2 border-gray-400'>
                        <label htmlFor="productGallery" className="block text-sm font-medium text-gray-700">
                            Product Gallery Images
                        </label>
                        <input
                            type="file"
                            name="productGallery"
                            accept="image/*"
                            multiple
                            {...register("gallery")}
                            onChange={handleImageChange}
                            className="mt-1 block w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                        />
                        {errors.gallery && (
                            <span className="text-sm text-red-600 font-semibold">Fill This Field</span>
                        )}
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-2">
                            {galleryImages.map((image, index) => (
                                <div key={index} className="relative h-20 w-20 overflow-hidden rounded-lg border border-gray-300">
                                    <img src={image} alt={`Product ${index + 1}`} className="w-full h-full" />
                                    <button
                                        onClick={() => removeImage(index)}
                                        type="button"  // Ensure this is not treated as a form submit button
                                        className="absolute top-1 right-1 focus:outline-none text-xs"
                                    >
                                        ✖
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Info Input */}
                    <div className='p-2 md:p-8 border-2 border-gray-400'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Product Title */}
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    {...register("title", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                                {errors.title && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>

                            {/* Product Price */}
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    {...register("price", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                />
                                {errors.price && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>

                            {/* Discount Price */}
                            <div>
                                <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Discount Price</label>
                                <input
                                    type="number"
                                    name="discountPrice"
                                    {...register("discountPrice")} // Register discountPrice
                                    readOnly // Set input to read-only
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* Product Brand */}
                            <div>
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Product Brand</label>
                                <input
                                    type="text"
                                    name="brand"
                                    {...register("brand", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                />
                                {errors.brand && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>

                            {/* Product Category */}
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category</label>
                                <select
                                    name="category"
                                    {...register("category", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((cat, idx) =>
                                        cat?.newCategory && (
                                            <option key={idx} value={cat.newCategory}>
                                                {cat.newCategory}
                                            </option>
                                        )
                                    )}
                                </select>
                                {errors.category && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>

                            {/* quantity */}
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Product Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    {...register("quantity", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                />
                                {errors.quantity && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>
                            {/* Add Date */}
                            <div>
                                <label htmlFor="addDate" className="block text-sm font-medium text-gray-700">Adding Date</label>
                                <input
                                    type="date"
                                    name="addDate"
                                    {...register("addDate", { required: false })}
                                    readOnly // Set input to read-only
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* is hot */}
                            <div>
                                <label htmlFor="isHot" className="block text-sm font-medium text-gray-700">Hot Badge</label>
                                <select
                                    name="isHot"
                                    {...register("isHot", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                >
                                    <option value="">Select a One</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                {errors.isHot && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>

                            {/* is hot */}
                            <div>
                                <label htmlFor="isNew" className="block text-sm font-medium text-gray-700">New Badge</label>
                                <select
                                    name="isNew"
                                    {...register("isNew", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                >
                                    <option value="">Select a One</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                {errors.isNew && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>

                            {/* Offer percent */}
                            <div>
                                <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">Discount Percentage</label>
                                <select
                                    name="discountPercentage"
                                    {...register("discountPercentage", { required: false })}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                                >
                                    <option value="">Select a Percentage</option>
                                    <option value="0">0</option>
                                    {categories.map((cat, idx) =>
                                        cat?.newDiscount && (
                                            <option key={idx} value={cat.newDiscount}>
                                                {cat.newDiscount}
                                            </option>
                                        )
                                    )}
                                </select>
                                {errors.discountPercentage && (
                                    <span className="text-sm text-red-600 font-semibold">
                                        Fill This Field
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Short Description */}
                        <div className='mt-6'>
                            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
                            <textarea
                                name="shortDescription"
                                rows="2"
                                {...register("shortDescription", { required: false })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                            ></textarea>
                            {errors.shortDescription && (
                                <span className="text-sm text-red-600 font-semibold">
                                    Fill This Field
                                </span>
                            )}
                        </div>

                        {/* Full Description */}
                        <div className='mt-6'>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Full Description</label>
                            <textarea
                                name="description"
                                rows="4"
                                {...register("fullDescription", { required: false })}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                            ></textarea>
                            {errors.fullDescription && (
                                <span className="text-sm text-red-600 font-semibold">
                                    Fill This Field
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
