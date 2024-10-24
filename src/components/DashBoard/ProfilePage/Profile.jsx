import { useState } from "react";
import UserAuth from "../../../Hooks/useAuth";
import useRoll from "../../../Hooks/useRoll";
import Loader from "../../Loader/Loader";
import UpdateUserProfile from "./UpdateUserProfile";

const Profile = () => {
  const { user, logOut } = UserAuth();
  const [role, isLoading] = useRoll();
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  const handleEditClick = () => {
    setModalOpen(true); // Show modal when "Edit Profile" is clicked
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close modal
  };

  if (isLoading) return <Loader />;

  return (
    <div className="pt-10">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          {/* User Avatar */}
          <div className="flex justify-center">
            <img
              src={user?.photoURL}
              alt=""
              className="w-40 rounded-full border-2 border-orange-300"
            />
          </div>
          <div className="justify-center text-center">
            <button className="bg-green-700 px-2 py-2 rounded-md mt-3 font-semibold text-white">
              {role}
            </button>
          </div>

          {/* User Information */}
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800">{user?.displayName}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>

          {/* User Details */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Member Since:</span>
              <span className="text-gray-800">
                {new Date(user?.metadata.creationTime).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleEditClick} // Open modal on button click
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
            >
              Edit Profile
            </button>
            <button
              onClick={logOut}
              className="px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl lg:max-w-4xl">
            {/* Modal content */}
            <UpdateUserProfile handleCloseModal={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
