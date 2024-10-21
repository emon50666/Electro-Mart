import LeftSlide from "./LeftSlide";
import RightSlide from "./RightSlide";

const Slider = () => {
    return (
        <div className="flex items-center pt-28 px-10">
            {/* left slide */}
            <div className="w-1/2">
                <LeftSlide />
            </div>
            {/* Right Slide */}
            <div className="w-1/2">
                <RightSlide />
            </div>
        </div>
    );
};

export default Slider;