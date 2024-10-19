import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import ReactStars from "react-stars";
import useReview from "../../../Hooks/useReview";
import Loader from "../../../components/Loader/Loader";

const Reviews = () => {
    const { review, refetch, isLoading } = useReview();
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const handleReviewSubmit = async () => {
        const reviewData = {
            name,
            review: reviewText,
            rating,
        };

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/reviews`,
                reviewData
            );
            console.log("Review submitted successfully:", res.data);

            // Clear form fields after submission
            setName("");
            setReviewText("");
            setRating(0);
            toast.success("Thanks For Review");
            refetch();
        } catch (error) {
            console.error("Error submitting review:", error);
            toast.error("Failed to submit review");
        }
    };

    if(isLoading) return <Loader/>
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {/* Left Side: Review Input Form */}
            <div className="p-4">
                <div className="flex mb-5 gap-4 items-center">
                    <h2>Your Rating:</h2>
                    <ReactStars
                        count={5}
                        value={rating}
                        onChange={ratingChanged}
                        size={24}
                        color2={"#ffd700"} // Active star color
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered input-warning mb-2 w-full"
                    />
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="textarea textarea-warning w-full"
                        placeholder="Review Message"
                    ></textarea>
                   
                    <button
                        onClick={handleReviewSubmit}
                        className="px-4 py-2 w-full mt-2 rounded-full text-white font-semibold hover:bg-black hover:text-orange-50 duration-300 bg-orange-500"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {/* Right Side: Display Reviews */}
            <div className="p-4 border-l-2 border-gray-200">
                <h3 className="text-lg font-semibold border-b w-40 border-gray-200 mb-4">
                    Customer Reviews
                </h3>
                <div className="space-y-4 overflow-scroll h-96  overflow-x-hidden">
                    {review?.map((rev, index) => (
                        <div
                            key={index}
                            className="border-b-8 rounded-md p-3 bg-white shadow-md"
                        >
                            {/* Star Rating */}
                            <div className="flex gap-2 items-center">
                                <ReactStars
                                    count={5}
                                    value={rev.rating}
                                    edit={false} // Make it read-only
                                    size={20}
                                    color2={"#ffd700"}
                                />
                                <h1>{rev.rating} </h1>
                            </div>

                            {/* User Name */}
                            <p className="font-semibold mt-2 text-green-600">
                                {rev.name}
                            </p>

                            {/* Review Text */}
                            <p className="text-gray-500 mt-1">{rev.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
