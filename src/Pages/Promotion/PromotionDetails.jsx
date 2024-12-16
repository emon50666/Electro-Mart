import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PromotionDetails = () => {
  const promotionDetails = useLoaderData();
  const { id } = useParams();
  const promotion = promotionDetails.find((promotion) => promotion._id == id);

  // Get the start day and month of the promotion
  const day = promotion?.offerStartDay[0];
  const month = promotion?.offerStartDay[1];

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateRemainingTime = () => {
    const today = new Date();
    const targetDate = new Date(
      today.getFullYear(),
      parseInt(month) - 1,
      parseInt(day)
    ); // Adjust month as it's 0-indexed
    const difference = targetDate - today; // Time difference in milliseconds

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    } else {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  // Countdown effect
  useEffect(() => {
    const interval = setInterval(calculateRemainingTime, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month]);

  return (
    <div className="lg:mt-2 lg:mx-10 md:mx-5 p-5">
      <div
        className="relative overflow-hidden rounded-xl shadow-lg group font_lexend mb-2"
        style={{
          backgroundImage: `url(${promotion?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative p-3 md:p-10 lg:flex items-center justify-between lg:gap-x-6 xl:gap-x-8">
          {/* Info Side */}
          <div className="lg:w-1/2 mb-5 md:mb-0">
            {/* Description */}
            <h2 className="text-xl xl:text-3xl font-medium 2xl:font-semibold text-white">
              {promotion?.description}
            </h2>
            {/* Offer */}
            <div className="md:text-xl text-gray-200 mt-3 flex items-center gap-3">
              <p>{promotion?.offerStartDate.slice(0, 6)}</p>
              <span>-</span>
              <p>{promotion?.offerRemoveDate.slice(0, 6)}</p>
            </div>
            {/* Counter */}
            <div className="grid grid-flow-col gap-3 sm:gap-5 text-center auto-cols-max mt-5">
              <div className="flex flex-col p-2 rounded-box bg-white text-black">
                <span className="countdown font-mono text-2xl md:text-3xl xl:text-5xl">
                  <span style={{ "--value": timeRemaining.days }}></span>
                </span>
                <span className="text-sm md:text-base">days</span>
              </div>
              <div className="flex flex-col p-2 rounded-box bg-white text-black">
                <span className="countdown font-mono text-2xl md:text-3xl xl:text-5xl">
                  <span style={{ "--value": timeRemaining.hours }}></span>
                </span>
                <span className="text-sm md:text-base">hours</span>
              </div>
              <div className="flex flex-col p-2 rounded-box bg-white text-black">
                <span className="countdown font-mono text-2xl md:text-3xl xl:text-5xl">
                  <span style={{ "--value": timeRemaining.minutes }}></span>
                </span>
                <span className="text-sm md:text-base">min</span>
              </div>
              <div className="flex flex-col p-2 rounded-box bg-white text-black">
                <span className="countdown font-mono text-2xl md:text-3xl xl:text-5xl">
                  <span style={{ "--value": timeRemaining.seconds }}></span>
                </span>
                <span className="text-sm md:text-base">sec</span>
              </div>
            </div>
          </div>
          {/* Image Side */}
          <div className="lg:w-1/2 md:mt-6">
            <img
              src={promotion?.image}
              alt={promotion?.description}
              className="w-full h-auto md:h-[200px] lg:h-auto object-cover rounded-lg opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetails;
