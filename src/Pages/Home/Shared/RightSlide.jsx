import RightBottomL from "./RightSide/RightBottomL";
import RightSideTop from "./RightSide/RightSideTop";

const RightSlide = () => {
    return (
        <div className="max-w-full max-h-[450px] space-y-3 px-5">
            <div>
                <RightSideTop />
            </div>
            <div className="flex justify-between space-x-4 max-w-full">
                <RightBottomL />
            </div>
        </div>
    );
};

export default RightSlide;
