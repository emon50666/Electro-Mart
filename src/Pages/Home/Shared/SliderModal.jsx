import PropTypes from "prop-types";
import { AiOutlineCloseSquare } from "react-icons/ai";
import SlideTable from "./SlideTable";

const SliderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white pt-5 rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div className="flex justify-end px-2 mt-5 md:mt-1">
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-white hover:bg-gray-500 transition-all text-2xl md:text-xl mt-2"
          >
            <AiOutlineCloseSquare />
          </button>
        </div>
        <div className="px-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-slate-700">
              Manage Sliders
            </h2>
            <p className="text-sm text-gray-600">
              image size should be 680x400
            </p>
          </div>
          <div>
            <SlideTable onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

SliderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SliderModal;
