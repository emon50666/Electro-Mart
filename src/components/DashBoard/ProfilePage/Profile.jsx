
import UserAuth from "../../../Hooks/useAuth";


const Profile = () => {
    const {user,logOut} = UserAuth()
    return (
        <div className="pt-10">
           <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* User Avatar */}
        <div className="flex justify-center">
        <img src={user?.photoURL} alt="" className="w-40 rounded-full border-2 border-orange-300" />
        </div>

        {/* User Information */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800"> {user?.displayName} </h2>
          <p className="text-gray-600"> {user?.email} </p>
        </div>

        {/* User Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
         
       
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Member Since:</span>
            <span className="text-gray-800">
  {new Date(user?.metadata.creationTime).toLocaleDateString()}
</span>

          </div>
          {/* <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Phone:</span>
            <span className="text-gray-800">+1 234 567 890</span>
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md">Edit Profile</button>
          <button  onClick={logOut} className="px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-md">Logout</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Profile;