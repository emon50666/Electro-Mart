import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PromotionDetails = () => {
  const promotionDetails = useLoaderData();
  const { id } = useParams();
  const product = promotionDetails.find((pack) => pack._id == id);
  console.log(product);

  const [counter, setCounter] = useState(59); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 59));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="lg:mt-24  lg:mx-10 md:mx-5">
      <div className="relative  overflow-hidden bg-gray-100 shadow-lg group">
        <img
          src={product.image}
          className=" lg:h-[400px] md:h-[300px] w-full  "
          alt={product.title}
        />

        <div className="absolute lg:bottom-44 md:bottom-44 bottom-28 left-4 text-sm text-slate-300">
          <p>
            {product.offerStartDate} - {product.offerRemoveDate}
          </p>
        </div>

        <div className="absolute lg:bottom-52 md:bottom-52 bottom-36 left-4 flex flex-col space-y-2">
          <h1 className="lg:text-4xl md:text-2xl text-[18px] font-semibold text-white ">
            {product.title}
          </h1>
        </div>

        <div>
          <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3 absolute lg:bottom-16 md:bottom-16 bottom-5  ml-3  text-center auto-cols-max">
            <div className="">
              <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                <span className="countdown font-mono lg:text-5xl md:text-5xl text-xl lg:ml-0 md:ml-0 ml-1">
                  <span style={{ "--value": 3 }}></span>
                </span>
                days
              </div>
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-black">
              <span className="countdown font-mono lg:text-5xl md:text-5xl text-xl lg:ml-0 md:ml-0 ml-2">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-black ">
              <span className="countdown font-mono lg:text-5xl md:text-5xl text-xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-white rounded-box text-black">
              <span className="countdown font-mono lg:text-5xl md:text-5xl text-xl ">
                <span style={{ "--value": counter }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetails;
