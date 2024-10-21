import LeftSlide from "./LeftSlide";
import RightSlide from "./RightSlide";

const Slider = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-x-5 pt-5 md:pt-6 lg:pt-28 px-2 md:px-5 xl:max-w-[1280px] 2xl:max-w-[1400px] overflow-x-hidden">
            {/* Left slide */}
            <div className="w-full lg:w-1/2 h-full">
                <LeftSlide />
            </div>
            {/* Right Slide */}
            <div className="w-full lg:w-1/2 h-full hidden lg:block">
                <RightSlide />
            </div>
        </div>
    );
};

export default Slider;
