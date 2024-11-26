import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth"; // Import Firebase Auth and updateProfile
import useUsers from "../../../Hooks/useUsers";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PropType from "prop-types";

const UpdateUserProfile = ({ handleCloseModal }) => {
    const auth = getAuth(); // Get Firebase Auth instance
    const user = auth.currentUser; // Get the current logged-in user
    const axiosPublic = useAxiosPublic(); // Axios instance for public API calls
    const { theUser } = useUsers(); // Hook to get more user details from DB

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: user?.displayName || "",
            phone: theUser?.phone || "",
            district: theUser?.district || "",
            city: theUser?.city || "",
            country: theUser?.country || "",
            fullAddress: theUser?.fullAddress || "" // New field for full address
        }
    });

    const onSubmit = async (data) => {
        const { name, phone, district, city, country, fullAddress } = data; // Include fullAddress

        // Prepare the data to send to your backend API
        const info = {
            name,
            phone,
            district,
            city,
            country,
            fullAddress // Include full address in info
        };

        try {
            if (name !== user.displayName) {
                await updateProfile(user, { displayName: name });
                // console.log("User name updated successfully");
            }

            const response = await axiosPublic.put(`/user/${user?.email}`, info);
            // console.log("Response from server:", response.data);

            reset(data);
            handleCloseModal();
        } catch (error) {
            console.error("Error updating profile: ", error);
        }
    };

    return (
        <div className="max-h-[80vh] overflow-y-auto" id="updateUserId">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                <button onClick={handleCloseModal} className="text-gray-500 text-2xl hover:text-gray-800">
                    &times;
                </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
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
                    {/* Full Address Display */}
                    <div className="flex flex-row lg:flex-col gap-x-2">
                        <p className="font-bold">Full Address:</p>
                        <p>{theUser?.fullAddress || 'Not Available'}</p>
                    </div>
                </div>

                <div className="p-4 w-full lg:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

                        {/* Full Address Input */}
                        <div>
                            <label className="block text-sm font-medium">Full Address</label>
                            <input
                                type="text"
                                {...register("fullAddress", { required: !theUser?.fullAddress && "Full address is required" })}
                                defaultValue={theUser?.fullAddress || ""}
                                className="mt-1 p-2 w-full border rounded"
                            />
                            {errors.fullAddress && <p className="text-red-500">{errors.fullAddress.message}</p>}
                        </div>

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
    handleCloseModal: PropType.func,
}
export default UpdateUserProfile;
