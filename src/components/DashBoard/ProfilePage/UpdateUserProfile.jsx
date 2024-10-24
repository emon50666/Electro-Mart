import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useUsers from "../../../Hooks/useUsers";
import UserAuth from "../../../Hooks/useAuth";

const UpdateUserProfile = ({ handleCloseModal }) => {
    const { user, updateUserProfile } = UserAuth(); // Hook for user update
    const { theUser } = useUsers(); // Hook to fetch user data from your database

    // React Hook Form setup with default values
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: user?.displayName || "",
            phone: theUser?.phone || "",
            district: theUser?.district || "",
            city: theUser?.city || "",
            country: theUser?.country || ""
        }
    });

    // Function to handle form submission
    const onSubmit = async (data) => {
        const { name, phone, district, city, country } = data;

        try {
            // Update the user's name in Firebase if it's changed
            if (name !== user.displayName) {
                await updateUserProfile({ displayName: name });
                console.log("User name updated successfully");
            }
            // Add your logic to update phone, district, city, and country in your backend/database
            console.log("Updated profile info: ", { phone, district, city, country });
            reset(data); // Reset the form to reflect updated values
            handleCloseModal(); // Close the modal after updating
        } catch (error) {
            console.error("Error updating profile: ", error);
        }
    };

    return (
        <div className="max-h-[80vh] overflow-y-auto">
            {/* Modal close button */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                <button onClick={handleCloseModal} className="text-gray-500 text-2xl hover:text-gray-800">
                    &times;
                </button>
            </div>

            {/* Main content of the modal */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* User Info Display */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                    <div className="flex flex-row lg:flex-col gap-x-2">
                        <p className="font-bold">Name:</p>
                        <p>{user?.displayName || 'Not Available'}</p>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-x-2">
                        <p className="font-bold">Email:</p>
                        <p>{user?.email || 'Not Available'}</p>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-x-2">
                        <p className="font-bold">Phone:</p>
                        <p>{theUser?.phone || 'Not Available'}</p>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-x-2">
                        <p className="font-bold">District:</p>
                        <p>{theUser?.district || 'Not Available'}</p>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-x-2">
                        <p className="font-bold">City:</p>
                        <p>{theUser?.city || 'Not Available'}</p>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-x-2">
                        <p className="font-bold">Country:</p>
                        <p>{theUser?.country || 'Not Available'}</p>
                    </div>
                </div>

                {/* Form to Update User Info */}
                <div className="p-4 w-full lg:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: !user?.displayName && "Name is required" })}
                                defaultValue={user?.displayName || ""}
                                className="mt-1 p-2 w-full border rounded"
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium">Phone</label>
                            <input
                                type="text"
                                {...register("phone", { required: !theUser?.phone && "Phone number is required" })}
                                defaultValue={theUser?.phone || ""}
                                className="mt-1 p-2 w-full border rounded"
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </div>

                        {/* District */}
                        <div>
                            <label className="block text-sm font-medium">District</label>
                            <input
                                type="text"
                                {...register("district", { required: !theUser?.district && "District is required" })}
                                defaultValue={theUser?.district || ""}
                                className="mt-1 p-2 w-full border rounded"
                            />
                            {errors.district && <p className="text-red-500">{errors.district.message}</p>}
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium">City</label>
                            <input
                                type="text"
                                {...register("city", { required: !theUser?.city && "City is required" })}
                                defaultValue={theUser?.city || ""}
                                className="mt-1 p-2 w-full border rounded"
                            />
                            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium">Country</label>
                            <input
                                type="text"
                                {...register("country", { required: !theUser?.country && "Country is required" })}
                                defaultValue={theUser?.country || ""}
                                className="mt-1 p-2 w-full border rounded"
                            />
                            {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="lg:flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

UpdateUserProfile.propTypes = {
    handleCloseModal: PropTypes.func,
};

export default UpdateUserProfile;
