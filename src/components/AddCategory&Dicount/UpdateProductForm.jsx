import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdAddCard } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useCategories from "../../Hooks/useCategories";
import Swal from "sweetalert2";

const UpdateProductForm = () => {
  const axiosPublic = useAxiosPublic();
  const { categories, refetch } = useCategories();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register, handleSubmit, reset, watch } = useForm();
  const [imageUploading, setImageUploading] = useState(false);
  const [showImageError, setShowImageError] = useState(false);

  // Open modal with a delay for smooth transition
  const openModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 10);
  };

  // Close modal with transition
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 300);
  };

  // Cloudinary image upload function
  const uploadImageToCloudinary = async (imageFile) => {
    setImageUploading(true);
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_COULD_NAME);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_COULD_NAME
        }/image/upload`,
        formData
      );
      setImageUploading(false);
      return response.data.url; // URL of the uploaded image
    } catch (error) {
      setImageUploading(false);
      console.error("Image upload failed:", error);
      toast.error("Image upload failed");
      return null;
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setShowImageError(false);

    if (!data.category && data.image[0]) {
      toast.error("Image upload is disabled without a category.");
      return;
    }

    if (data.category && !data.image[0]) {
      setShowImageError(true);
      return;
    }

    let imageUrl = null;
    if (data.image[0]) {
      imageUrl = await uploadImageToCloudinary(data.image[0]);
      if (!imageUrl) {
        toast.error("Failed to upload image");
        return;
      }
    }

    const lowerCat = data.category.toLowerCase();
    const updateFormInfo = {
      newCategory: lowerCat,
      newDiscount: data.discount,
      imageUrl,
    };

    const response = await axiosPublic.post("/categories", updateFormInfo);

    if (response.data.insertedId) {
      toast.success("Form updated successfully!");
      reset();
      refetch();
    }
  };

  // Handle category deletion
  const handleDeleteCategory = (id) => {
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
        axiosPublic
          .delete(`/categories/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              refetch();
              toast.success("Category deleted successfully!");
            }
          })
          .catch(() => {
            toast.error("Failed to delete category");
          });
      }
    });
  };

  return (
    <div>
      {/* Main Form Header */}
      <div className="flex justify-between items-center bg-white mt-10 mb-4 lg:my-5 px-7 py-3">
        <h3 className="text-lg font-semibold">
          Add New Category, Discount & Image
        </h3>
        <button
          className="btn bg-black hover:bg-blue-500 text-white lg:text-xl"
          onClick={openModal}
        >
          <MdAddCard />
        </button>
      </div>

      {/* Modal with smooth transition */}
      {isModalVisible && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center 
                    transition-opacity duration-300 ${
                      isModalOpen ? "opacity-100" : "opacity-0"
                    }`}
        >
          <div
            className={`lg:mt-16 lg:ml-40 bg-white p-5 rounded-md w-full max-w-2xl mx-4 
                        transform transition-transform duration-300 ${
                          isModalOpen ? "scale-100" : "scale-90"
                        } max-h-[80vh] overflow-y-auto`}
          >
            <h2 className="text-xl font-semibold mb-4">
              Add New Category, Discount & Image
            </h2>

            <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
              {/* Left Side: Preview of all categories */}
              <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-md">
                <div className="border-b-2 border-white flex justify-between">
                  <h3 className="font-bold mb-3">Category List</h3>
                  {categories.length > 0 && (
                    <h3 className="font-bold mb-3">Remove</h3>
                  )}
                </div>
                <div
                  id="categoryListId"
                  className="max-h-[30vh] lg:max-h-[60vh] overflow-y-auto"
                >
                  {categories.length > 0 ? (
                    <ul className="space-y-2">
                      {categories.map((item, index) => (
                        <li
                          key={index}
                          className="border-b py-2 flex justify-between"
                        >
                          <span>
                            {item?.newCategory && (
                              <span className="font-medium">
                                {item.newCategory} Added
                              </span>
                            )}
                            {item?.newDiscount && (
                              <span className="font-medium">
                                {item?.newCategory && item?.newDiscount && (
                                  <span className="text-gray-500 mx-4 font-bold">
                                    ||
                                  </span>
                                )}
                                {item.newDiscount}% Discount Added
                              </span>
                            )}
                          </span>
                          <span>
                            <button
                              onClick={() => handleDeleteCategory(item?._id)}
                              className="text-gray-600 hover:text-red-600 transition duration-300"
                            >
                              <FaRegWindowClose />
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No categories added yet.</p>
                  )}
                </div>
              </div>

              {/* Right Side: Form to add new category, discount, and image */}
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      New Category{" "}
                      <span className="font-thin">
                        (Only type the category name)
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("category", { required: false })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      New Discount{" "}
                      <span className="font-thin">(Only type the number)</span>
                    </label>
                    <input
                      type="number"
                      {...register("discount", { required: false })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Image Upload
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("image")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      disabled={!watch("category")} // Disable if category is not provided
                    />
                    {showImageError && (
                      <p className="text-red-500 text-sm mt-1">
                        Please upload an image for the category.
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      className="btn bg-black hover:bg-blue-500 text-white px-4 py-2 rounded-md"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      {imageUploading ? "Uploading..." : "Save Category"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProductForm;
