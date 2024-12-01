import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useRoll from "../../../Hooks/useRoll";
import Loader from "../../Loader/Loader";
import UpdateUserProfile from "./UpdateUserProfile";

const Profile = () => {
  const { user,  } = useAuth();
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
              className="w-40 rounded-full border-2 border-blue-300"
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
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleEditClick} // Open modal on button click
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Edit Profile
            </button>
           
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="">
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-sm p-6 md:rounded-lg shadow-lg w-full max-w-3xl lg:max-w-4xl mx-2">
              {/* Modal content */}
              <UpdateUserProfile handleCloseModal={handleCloseModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
