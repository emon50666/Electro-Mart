import PropType from "prop-types";
import useUsers from "../../../Hooks/useUsers";


const UpdateUserProfile = ({ handleCloseModal }) => {
    const { theUser } = useUsers();
    console.log(theUser);
    return (
        <div>
            {/* modal close button */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                <button onClick={handleCloseModal} className="text-gray-500 text-2xl hover:text-gray-800">
                    &times;
                </button>
            </div>
            {/* main item of modal */}
            <div className="flex flex-col lg:flex-row">
                {/* user info */}
                <div>

                </div>
                {/* info update form */}
                <div>

                </div>
            </div>
        </div>
    );
};
UpdateUserProfile.propTypes = {
    handleCloseModal: PropType.func,
}
export default UpdateUserProfile;