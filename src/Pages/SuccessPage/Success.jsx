import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Success = () => {
    const { tranId } = useParams(); // Get tranId from the URL
    const [payment, setPayment] = useState(null); // Store payment details
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/payments/${tranId}`);
                setPayment(response.data);
            } catch (error) {
                console.error("Error fetching payment details:", error);
            } finally {
                setIsLoading(false); // Stop loading
            }
        };

        fetchPayment(); // Fetch payment data when component loads
    }, [tranId]);

    if (isLoading) return <p>Loading...</p>; // Show loading state

    if (!payment) return <p>No payment found for this transaction.</p>; // Handle no payment found

    return (
        <div className="flex items-center pt-6 pb-6 px-2   justify-center  lg:pt-10 lg:pb-10 bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg  w-[800px] ">
                <div className="flex rounded-t-md bg-gradient-to-r  from-[#A539D5] via-gray-100 to-violet-600 flex-col items-center">
                    <AiOutlineCheckCircle className="text-white bg-green-500 rounded-full relative bottom-5 md:bottom-5 lg:bottom-7 text-6xl " />
                    <h1 className="text-4xl relative bottom-3 font-bold text-purple-600 mb-1">
                        Thank You!
                    </h1>
                    <p className="text-gray-800 mb-6 text-lg capitalize">
                        Your order has been received.
                    </p>
                </div>

                <div className="">
                    <div className=" md:flex px-2 lg:flex 2xl:flex text-[16px] py-2 bg-purple-50 justify-center gap-2 ">


                        <h2 className="py-2 px-2 border-r-2 border-gray-300 pr-4 "> <span className="font-semibold">Tran_ID: #</span>{tranId}</h2>
                        <h2 className="px-2 py-2  border-r-2 border-gray-300 pr-4 "> <span className="font-semibold">Date: </span> {new Date().toLocaleDateString()}</h2>

                        <h2 className="px-2 py-2   border-r-2 border-gray-300 pr-4"> <span className="font-semibold">Number:</span> {payment.cus_phone}</h2>

                        <h2 className="px-2 py-2  "> <span className="font-semibold"> Currency:</span> BDT</h2>

                    </div>
                </div>

                <div className="p-2">

                    <div className=" grid-cols-1 mt-5 mb-5 grid lg:grid-cols-2">
                        <div className=" border items-center flex ">
                            <h2 className=" font-semibold  px-4 py-2 text-sm ">Product:</h2>
                            <h2 className=" pr-2 py-2  text-sm ">( {payment.product_name.slice(0, 38) + '...'} ) </h2>
                        </div>

                        <div className=" border items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm"> ProductCategory
                                :</h2>
                            <h2 className=" py-2">{payment.product_category
                            }</h2>
                        </div>
                        <div className=" border items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">Payment Method:</h2>
                            <h2 className=" py-2">{payment.payment_method}</h2>
                        </div>

                        <div className=" border  items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">Shipping:</h2>
                            <h2 className=" py-2">{payment.shipping_method}</h2>
                        </div>

                        <div className=" border  items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">Name:</h2>
                            <h2 className=" py-2">{payment.cus_name}</h2>
                        </div>
                        <div className=" border  items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">Total Price: </h2>
                            <h2 className=" py-2">( {payment.amount} ) Taka</h2>
                        </div>
                        <div className=" border  items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">Division: </h2>
                            <h2 className=" py-2"> {payment.cus_state} </h2>
                        </div>
                        <div className=" border  items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">District: </h2>
                            <h2 className=" py-2"> {payment.cus_add2} </h2>
                        </div>
                        <div className=" border  items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">City: </h2>
                            <h2 className=" py-2"> {payment.cus_city} </h2>
                        </div>
                        <div className=" border  items-center flex ">
                            <h2 className="text-left px-4 py-2 font-semibold text-sm">Address: </h2>
                            <h2 className=" py-2"> {payment.
                                cus_add1} </h2>
                        </div>

                    </div>

                    <div className=" lg:text-center mb-3">
                        <Link to={'/'} className="bg-gradient-to-r  from-[#A539D5] via-black rounded-md  to-violet-600  py-2 px-4 text-white font-semibold">Go To Home Page</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Success;
