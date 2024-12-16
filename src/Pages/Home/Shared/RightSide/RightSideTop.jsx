import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import useRoll from "../../../../Hooks/useRoll";
import RightSideModal from "./RightSideModal";
import useRightSideTop from "../../../../Hooks/useRightSideTop";

const RightSideTop = () => {
  const [role] = useRoll();
  const { rightTopImages, refetch } = useRightSideTop();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="relative">
        {rightTopImages.length > 0 ? (
          rightTopImages.map((rightTopImage, idx) => (
            <div key={idx}>
              <img
                src={rightTopImage.url}
                alt={`slide ${idx + 1}`}
                className="w-full lg:min-h-[150px] max-h-[190px] h-[40vh] md:h-auto rounded-lg"
              />
            </div>
          ))
        ) : (
          <div>
            <img
              src="https://placehold.co/620x190" // Placeholder image
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
        sendImages={rightTopImages}
        refetch={refetch}
        number={1}
      />
    </div>
  );
};

export default RightSideTop;
