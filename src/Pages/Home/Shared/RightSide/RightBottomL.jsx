import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import useRoll from "../../../../Hooks/useRoll";
import RightSideModal from "./RightSideModal";
import useRightBottomL from "../../../../Hooks/useRightBottomL";

const RightBottomL = () => {
  const [role] = useRoll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { rightBottomLImages, refetch } = useRightBottomL();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="relative">
        {rightBottomLImages.length > 0 ? (
          rightBottomLImages.map((rightBottomLImage, idx) => (
            <div key={idx}>
              <img
                src={rightBottomLImage.url}
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
        sendImages={rightBottomLImages}
        refetch={refetch}
        number={2}
      />
    </div>
  );
};

export default RightBottomL;
