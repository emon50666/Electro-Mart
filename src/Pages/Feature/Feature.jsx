import microsoft from "./microsoft-accessories.jpg";
import { FaKeyboard } from "react-icons/fa";
import { IoPencilOutline } from "react-icons/io5";
import { BsFillMouseFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="lg:p-20 p-5 text-black">
      <div className="lg:flex  ">
        <div>
          <img src={microsoft} className="lg:h-96" alt="" />
        </div>
        <div className="space-y-6 lg:my-20">
          <h1 className="text-5xl font-bold">Microsoft Accessories</h1>
          <p>
            Personalize your Surface Pro with Microsoft branded accessories. In
            the presence of many colors for every taste.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:mx-0 md:mx-14 mx-14 ">
            <button className="flex items-center justify-center space-x-2 bg-slate-200 px-3 py-2 font-semibold rounded-sm">
              <h1>
                <FaKeyboard />
              </h1>
              <h1>Keyboard</h1>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-slate-200 px-3 py-2 font-semibold rounded-sm">
              <h1>
                <IoPencilOutline />
              </h1>
              <h1>Pencil</h1>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-slate-200 px-3 py-2 font-semibold rounded-sm">
              <h1>
                <BsFillMouseFill />
              </h1>
              <h1>Mouse</h1>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-slate-200 px-3 py-2 font-semibold rounded-sm">
              <h1>
                <FaHeadphones />
              </h1>
              <h1>HearPhone</h1>
            </button>
          </div>
        </div>
      </div>

      <div className=" lg:flex lg:justify-between lg:items-center mt-8 ">
        <div
          className="relative bg-no-repeat bg-cover bg-center h-[220px] w-[430px] flex flex-col justify-center items-start p-4 rounded-lg object-center  object-none"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dqb5izi3a/image/upload/v1725859347/r8vgbb29wjulu9bia8iz.jpg)",
          }}
        >
          <h1 className="text-white text-xl font-bold">Xiaomi MI 11</h1>
          <p className="text-white text-lg">Discount up to 30%</p>
          <button className="mt-2 p-3 bg-white text-black rounded">
            View Details
          </button>
        </div>
        <div
          className="relative bg-no-repeat bg-cover bg-center h-[220px] w-[430px] flex flex-col justify-center items-start p-4 rounded-lg object-center  object-none"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dqb5izi3a/image/upload/v1725859366/dihobwauszw3l5nczaq0.jpg)",
          }}
        >
          <h1 className="text-white text-xl font-bold">HP Laser Jet</h1>
          <p className="text-white text-lg">Personal printer</p>
          <button className="mt-2 p-3 bg-white text-black rounded">
            View Details
          </button>
        </div>
        <div
          className="relative bg-no-repeat bg-cover bg-center h-[220px] w-[430px] flex flex-col justify-center items-start p-4 rounded-lg object-center  object-none"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dqb5izi3a/image/upload/v1725859357/ciyjgjycpq6y7lqb3yt5.jpg)",
          }}
        >
          <h1 className="text-white text-xl font-bold">White Joy Cons</h1>
          <p className="text-white text-lg">Long-awaited novelty</p>
          <button className="mt-2 p-3 bg-white text-black rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
