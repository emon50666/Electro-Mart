import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PromotionDetails = () => {
  const promotionDetails = useLoaderData();
  const { id } = useParams();
  const promotion = promotionDetails.find((promotion) => promotion._id == id);
  const day = promotion?.offerStartDay[0]
  const month = promotion?.offerStartDay[1]

  const [counter, setCounter] = useState(59);
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), day, month); // November 10 of the current year (month is 0-indexed)
  const daysPassedByTarget = Math.floor((targetDate - new Date(today.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24));
  console.log(daysPassedByTarget);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 59));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="lg:mt-24  lg:mx-10 md:mx-5">
      <div className="relative overflow-hidden bg-blue-600 rounded-xl shadow-lg group font_lexend">
        <div className="p-3 md:p-10 md:flex items-center justify-between">
          {/* info side */}
          <div className="md:w-1/2">
            {/* description */}
            <h2 className="text-3xl font-semibold text-white">{promotion?.description}</h2>
            {/* offer */}
            <div className="md:text-xl text-gray-200 mt-5 flex items-center gap-3">
              <p className="">{promotion?.offerStartDate.slice(0, 6)}</p>
              <span>-</span>
              <p className="">{promotion?.offerRemoveDate.slice(0, 6)}</p>
            </div>
            {/* counter */}
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": { ...counter } }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
          {/* image side */}
          <div className="md:w-1/2">

          </div>
        </div>
      </div>
    </div >
  );
};

export default PromotionDetails;
