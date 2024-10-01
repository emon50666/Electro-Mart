import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import ProgressBar from "@ramonak/react-progress-bar";
const ProductReview = () => {
  const ratings = [
    {
      "rating-text":
        "If the copy becomes distracting in the design then you are doing something wrong or they are discussing copy changes. It might be a bit annoying but you could tell them that that discussion would be best suited for another time.",
      "rating-number": 3,
      name: "xyz",
      email: "xudvg",
      date: "May 16, 2023",
      
    },
    {
      "rating-text":
        "If the copy becomes distracting in the design then you are doing something wrong or they are discussing copy changes. It might be a bit annoying but you could tell them that that discussion would be best suited for another time.",
      "rating-number": 3,
      name: "xyz",
      email: "xudvg",
      date: "May 16, 2023",
    },
    {
      "rating-text":
        "If the copy becomes distracting in the design then you are doing something wrong or they are discussing copy changes. It might be a bit annoying but you could tell them that that discussion would be best suited for another time.",
      "rating-number": 3,
      name: "xyz",
      email: "xudvg",
      date: "May 16, 2023",
    },
    {
      "rating-text":
        "If the copy becomes distracting in the design then you are doing something wrong or they are discussing copy changes. It might be a bit annoying but you could tell them that that discussion would be best suited for another time.",
      "rating-number": 3,
      name: "xyz",
      email: "xudvg",
      date: "May 16, 2023",
    },
  ];
  return (
    <div className="bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 text-left   text-gray-700  gap-24 max-w-screen-2xl  md:px-16 my-5 mb-10 px-5">
        <div className="  md:ml-14">
          <div className=" mx-24 my-5">
            <h1 className=" mx-8 font-semibold text-6xl">4</h1>
            <Rating style={{ maxWidth: 100 }} value={2} />
            <p className="  font-semibold md:text-xl">{ratings.length} Reviews</p>
          </div>
          <div className=" flex flex-col gap-5">
            <div className=" flex gap-3">
              <Rating style={{ maxWidth: 100 }} value={5} />
              <div className="w-72">
                <ProgressBar completed={40} maxCompleted={100} />
              </div>
            </div>
            <div className=" flex  gap-3">
              <Rating style={{ maxWidth: 100 }} value={4} />
              <div className="w-72">
                <ProgressBar completed={60} maxCompleted={100} />
              </div>
            </div>
            <div className=" flex  gap-3">
              <Rating style={{ maxWidth: 100 }} value={3} />
              <div className="w-72">
                <ProgressBar completed={20} maxCompleted={100} />
              </div>
            </div>
            <div className=" flex  gap-3">
              <Rating style={{ maxWidth: 100 }} value={2} />
              <div className="w-72">
                <ProgressBar completed={70} maxCompleted={100} />
              </div>
            </div>
            <div className=" flex  gap-3">
              <Rating style={{ maxWidth: 100 }} value={1} />
              <div className="w-72">
                <ProgressBar completed={50} maxCompleted={100} />
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5 ">
          <h1 className=" text-xl font-semibold">Add a review</h1>
          <p className=" my-7">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className=" flex">
            <p className=" font-semibold">Your rating * : </p>
            <Rating style={{ maxWidth: 100 }} />
          </div>
          <div className="">
            <p>Your review *</p>
            <textarea
              name=""
              id=""
              cols="100"

              rows="7"
              className="my-1 bg-white border border-gray-500 rounded-md w-[300px] md:w-[500px]"
            ></textarea>
          </div>
          <div className="">
            <p>Name *</p>
            <textarea
              name=""
              id=""
              cols="100"
              rows="2"
              className="my-1 bg-white border border-gray-500 rounded-md w-[300px] md:w-[500px]"
            ></textarea>
          </div>
          <div className="">
            <p>Email *</p>
            <textarea
              name=""
              id=""
              cols="100"
              rows="2"
              className="my-1 bg-white border border-gray-500 rounded-md w-[300px] md:w-[500px]"
            ></textarea>
          </div>
          <button className="btn  bg-[#FF5E2B] text-white border-0 ">
            Submit
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mx-8 my-6 text-gray-600">
        {ratings.map((rating) => (
          <div key={rating} className=" ">
            <div className=" border border-gray-400  px-6 py-5 rounded-md">
              <div className=" flex justify-between">
                <p className=" text-xl font-semibold">{rating.name}</p>
                <p>{rating.date}</p>
              </div>
              <p className=" my-3">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating["rating-number"]}
                />
              </p>
              <p> {rating["rating-text"]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
