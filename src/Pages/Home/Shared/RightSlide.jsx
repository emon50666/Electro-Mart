import RightBottomL from "./RightSide/RightBottomL";
import RightBottomR from "./RightSide/RightBottomR";
import RightSideTop from "./RightSide/RightSideTop";

const RightSlide = () => {
  return (
    <div className="max-w-full max-h-[450px] space-y-3">
      <div>
        <RightSideTop />
      </div>
      <div className="grid grid-cols-2 gap-3 max-w-full">
        <div>
          <RightBottomL />
        </div>
        <div>
          <RightBottomR />
        </div>
      </div>
    </div>
  );
};

export default RightSlide;
