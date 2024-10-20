import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PromotionDetails = () => {
  const promotionDetails = useLoaderData();
  const { id } = useParams();
  const product = promotionDetails.find((pack) => pack._id == id);
  console.log(product);

  const [counter, setCounter] = useState(59); // Assuming the countdown starts at 59 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 59));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="lg:mt-24 mx-10">
      <div className="relative  overflow-hidden bg-gray-100 shadow-lg group">
        <img
          src={product.image}
          className=" lg:h-[400px] w-full  "
          alt={product.title}
        />

        <div className="absolute bottom-44 left-4 text-sm text-slate-300">
          <p>
            {product.offerStartDate} - {product.offerRemoveDate}
          </p>
        </div>

        <div className="absolute bottom-52 left-4 flex flex-col space-y-2">
          <h1 className="lg:text-4xl text-xl font-semibold text-white ">
            {product.title}
          </h1>
        </div>

        <div>
        <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3 absolute bottom-16 ml-3  text-center auto-cols-max">
              <div className="hidden lg:inline-block md:inline-block ">
                <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 3 }}></span>
                  </span>
                  days
                </div>
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
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
