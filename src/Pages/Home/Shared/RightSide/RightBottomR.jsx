import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import useRoll from "../../../../Hooks/useRoll";
import RightSideModal from "./RightSideModal";
import useRightBottomR from "../../../../Hooks/useRightBottomR";

const RightBottomR = () => {
  const [role] = useRoll();
  const { rightBottomRImages, refetch } = useRightBottomR();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="relative">
        {rightBottomRImages.length > 0 ? (
          rightBottomRImages.map((rightBottomRImage, idx) => (
            <div key={idx}>
              <img
                src={rightBottomRImage.url}
                alt={`slide ${idx + 1}`}
                className="w-full lg:min-h-[150px] max-h-[190px] h-[40vh] md:h-auto rounded-lg"
              />
            </div>
          ))
        ) : (
          <div>
            <img
              src="https://placehold.co/304x185" // Static placeholder image
              alt="Default slide"
              className="w-full lg:min-h-[150px] max-h-[190px] h-[40vh] md:h-auto rounded-lg"
            />
          </div>
        )}

        {role === "admin" && (
          <span
            onClick={openModal}
            className="absolute top-3 right-3 border-2 p-2 rounded-full bg-white/30 hover:bg-slate-700 hover:text-gray-300 cursor-pointer"
          >
            <MdModeEdit className="text-xl" />
          </span>
        )}
      </div>

      {/* Modal */}
      <RightSideModal
        isOpen={isModalOpen}
        onClose={closeModal}
        sendImages={rightBottomRImages}
        refetch={refetch}
        number={3}
      />
    </div>
  );
};

export default RightBottomR;
