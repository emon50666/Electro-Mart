import { useState } from "react";

const TrackOrder = () => {
    const [orderId, setOrderId] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleTrackOrder = () => {
        // Reset error message
        setErrorMessage("");

        // Validate input length
        if (orderId.trim() === "") {
            setErrorMessage("Order ID cannot be empty.");
            return;
        }

        if (orderId.length !== 5) {
            setErrorMessage("Order ID Not match");
            return;
        }

        // If valid, show popup
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Auto-hide popup after 3 seconds
    };

    return (
        <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-semibold mb-6 text-start px-2 w-80">Track Your Order</h1>
            <div className="w-80 px-2">
                <input
                    type="text"
                    placeholder="Enter Your Order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                {errorMessage && (
                    <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                )}
                <button
                    onClick={handleTrackOrder}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Track Order
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md shadow-md text-center">
                        <p className="text-lg font-semibold">
                            Your product shipment is processing.
                        </p>
                        <img
                            src="https://res.cloudinary.com/dpsgtszzi/image/upload/v1735649045/track_rnisjg.gif"
                            alt="track"
                            className="w-32 h-32"
                        />
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrackOrder;
