import RightBottomL from "./RightSide/RightBottomL";
import RightBottomR from "./RightSide/RightBottomR";
import RightSideTop from "./RightSide/RightSideTop";

const RightSlide = () => {
    return (
        <div className="max-w-full space-y-3 px-5">
            <div>
                <RightSideTop />
            </div>
            <div className="flex justify-between space-x-4 max-w-full">
                <div className="w-1/2">
                    <RightBottomL />
                </div>
                <div className="w-1/2">
                    <RightBottomR />
                </div>
            </div>
        </div>
    );
};

export default RightSlide;
