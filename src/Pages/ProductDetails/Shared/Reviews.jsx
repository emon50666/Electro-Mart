import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import ReactStars from "react-stars";
import useReview from "../../../Hooks/useReview";
import Loader from "../../../components/Loader/Loader";
import PropType from "prop-types";
import useRoll from "../../../Hooks/useRoll";
const Reviews = ({ mainId }) => {
  const [role] = useRoll();
  const { reviews, refetch, isLoading } = useReview();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [, setUploadedImageUrls] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null); // For popup image
  const allReview = reviews.filter((review) => review?.mainId === mainId);
  const ratingChanged = (newRating) => setRating(newRating);

  const handleFileChange = (e) => setSelectedImages([...e.target.files]);

  const handleReviewSubmit = async () => {
    const imageUploadPromises = selectedImages.map(async (image) => {
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      return data.data.url;
    });

    try {
      const imageUrls = await Promise.all(imageUploadPromises);
      setUploadedImageUrls(imageUrls);

      const reviewData = {
        name,
        review: reviewText,
        rating,
        images: imageUrls,
        mainId,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/reviews`,
        reviewData
      );
      // console.log("Review submitted successfully:", res.data);

      setName("");
      setReviewText("");
      setRating(0);
      setSelectedImages([]);
      if (res.data.insertedId) {
        toast.success("Thanks for your review!");
        refetch();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review");
    }
  };

  const openImageModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setCurrentImage(null);
    setShowImageModal(false);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
      {role === "member" && (
        <div className="p-4">
          <div className="flex mb-5 gap-4 items-center">
            <h2>Your Rating:</h2>
            <ReactStars
              count={5}
              value={rating}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input outline-none focus:border-none input-bordered input-warning w-full"
            />
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="textarea textarea-warning w-full outline-none mt-2 focus:border-none"
              placeholder="Review Message"
            ></textarea>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              className="file-input outline-none focus:border-none mt-2 file-input-bordered w-full"
            />
            <div className="mt-2 flex gap-">
              {selectedImages.length > 0 &&
                selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                    className="w-10 h-10 object-cover mr-2 mt-2"
                  />
                ))}
            </div>
            <button
              onClick={handleReviewSubmit}
              className="px-4 py-2 w-full mt-2 rounded-full text-white font-semibold hover:bg-black hover:text-blue-50 duration-300 bg-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="p-4 border-l-2 border-gray-200">
        <h3 className="text-lg font-semibold border-b w-40 border-gray-200 mb-4">
          Customer Reviews
        </h3>
        <div
          id="review"
          className="space-y-4 overflow-scroll max-h-80 h-auto  overflow-x-hidden"
        >
          {allReview?.map((rev, index) => (
            <div
              key={index}
              className="border-b-8 rounded-md p-3 bg-white shadow-md"
            >
              <div className="flex gap-2 items-center">
                <ReactStars
                  count={5}
                  value={rev.rating}
                  edit={false}
                  size={20}
                  color2={"#ffd700"}
                />
                <h1>{rev.rating}</h1>
              </div>
              <p className="font-semibold mt-2 text-green-600">{rev.name}</p>
              <p className="text-gray-500 mt-1">{rev.review}</p>
              <div className="flex gap-2 mt-2">
                {rev.images &&
                  rev.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt="Review"
                      className="w-20 h-20 object-cover cursor-pointer"
                      onClick={() => openImageModal(image)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={currentImage}
              alt="Full View"
              className="max-w-full max-h-screen"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Reviews.propTypes = {
  mainId: PropType.string,
};

export default Reviews;
