import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ProgressBar from "@ramonak/react-progress-bar";

const ProductReview = () => {
  const ratings = [
    {
      "rating-text":
        "The product quality is excellent! It exceeded my expectations and the delivery was swift. Highly recommend to others.",
      "rating-number": 5,
      name: "John Doe",
      email: "john.doe@example.com",
      date: "September 15, 2023",
    },
    {
      "rating-text":
        "Good value for money. The features are great, but the battery life could be better. Overall, I’m satisfied.",
      "rating-number": 4,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      date: "August 22, 2023",
    },
    {
      "rating-text":
        "Decent product, but I faced some issues with connectivity. Customer service was helpful in resolving it quickly.",
      "rating-number": 3,
      name: "Michael Johnson",
      email: "michael.j@example.com",
      date: "July 30, 2023",
    },
    {
      "rating-text":
        "Not what I expected. The design looks good, but the performance is subpar. Had to return it after a few days of use.",
      "rating-number": 2,
      name: "Emily Davis",
      email: "emily.d@example.com",
      date: "June 10, 2023",
    },
  ];


  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-5 md:mx-16 text-gray-700 max-w-screen-2xl my-5">
        {/* Left Section - Overall Ratings */}
        <div className="md:ml-14">
          <div className="mx-auto my-5 text-center">
            <h1 className="font-semibold text-4xl md:text-6xl">4</h1>
            <Rating style={{ maxWidth: 100 }} value={2} />
            <p className="font-semibold text-base md:text-xl">{ratings.length} Reviews</p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { rating: 5, progress: 40 },
              { rating: 4, progress: 60 },
              { rating: 3, progress: 20 },
              { rating: 2, progress: 70 },
              { rating: 1, progress: 50 },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <Rating style={{ maxWidth: 100 }} value={item.rating} />
                <div className="w-48 md:w-72">
                  <ProgressBar completed={item.progress} maxCompleted={100} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Add a Review Form */}
        <div className="my-5">
          <h1 className="text-lg md:text-xl font-semibold">Add a review</h1>
          <p className="my-4 md:my-7 text-sm md:text-base">
            Your email address will not be published. Required fields are marked *
          </p>
          <div className="flex items-center gap-2 my-2">
            <p className="font-semibold">Your rating * : </p>
            <Rating style={{ maxWidth: 100 }} />
          </div>
          <div className="my-3">
            <label htmlFor="review" className="block font-medium">Your review *</label>
            <textarea
              id="review"
              cols="30"
              rows="5"
              className="w-full md:w-[500px] p-2 bg-white border border-gray-400 rounded-md"
            ></textarea>
          </div>
          <div className="my-3">
            <label htmlFor="name" className="block font-medium">Name *</label>
            <input
              type="text"
              id="name"
              className="w-full md:w-[500px] p-2 bg-white border border-gray-400 rounded-md"
            />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="block font-medium">Email *</label>
            <input
              type="email"
              id="email"
              className="w-full md:w-[500px] p-2 bg-white border border-gray-400 rounded-md"
            />
          </div>
          <button className="btn bg-[#FF5E2B] text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-16 my-6 text-gray-600">
        {ratings.map((rating, index) => (
          <div key={index} className="border border-gray-400 px-6 py-5 rounded-md">
            <div className="flex justify-between">
              <p className="text-lg md:text-xl font-semibold">{rating.name}</p>
              <p className="text-sm md:text-base">{rating.date}</p>
            </div>
            <div className="my-3">
              <Rating style={{ maxWidth: 100 }} value={rating["rating-number"]} />
            </div>
            <p className="text-sm md:text-base">{rating["rating-text"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
