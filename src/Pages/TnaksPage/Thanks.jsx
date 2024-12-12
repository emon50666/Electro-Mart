import { Link, useParams } from "react-router-dom";
import useOrder from "../../Hooks/useOrder";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";

const Thanks = () => {
    const { sTranId } = useParams();

    const [productDetails, setProductDetails] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(true);
    console.log(sTranId);
    const {payments} = useOrder();
    const the_last_order = payments.find(pay => pay.tran_id == sTranId )
    console.log(the_last_order);


    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            if (the_last_order?.products) {
              const promises = the_last_order.products.map((product) =>
                axiosPublic.get(`/products/${product.mainProductId}`)
              
              );
              const responses = await Promise.all(promises);
              setProductDetails(responses.map((response) => response.data));
            }
          } catch (error) {
            console.error("Error fetching product details:", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        if (the_last_order) fetchProductDetails();
      }, [axiosPublic, the_last_order]);


      if (isLoading) return <Loader />;

    return (
        <div>
           <div className="flex items-center pt-6 pb-6 px-2 justify-center lg:pt-10 lg:pb-10 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-[800px]">
        <div className="flex rounded-t-md bg-gradient-to-r from-[#A539D5] via-gray-100 to-violet-600 flex-col items-center">
          <AiOutlineCheckCircle className="text-white bg-green-500 rounded-full relative bottom-5 md:bottom-5 lg:bottom-7 text-6xl" />
          <h1 className="text-4xl relative bottom-3 font-bold text-purple-600 mb-1">
            Thank You!
          </h1>
          <p className="text-gray-800 mb-6 text-lg capitalize">
            Your order has been received.
          </p>
        </div>

        <div className="bg-purple-50 px-2 py-2 text-[16px] md:flex lg:flex 2xl:flex justify-center gap-2">
          <h2 className="py-2 px-2 border-r-2 border-gray-300 pr-4">
            <span className="font-semibold">Tran_ID: #</span>
            {sTranId}
          </h2>
          <h2 className="px-2 py-2 border-r-2 border-gray-300 pr-4">
            <span className="font-semibold">Date: </span>
            {new Date().toLocaleDateString()}
          </h2>
          <h2 className="px-2 py-2 border-r-2 border-gray-300 pr-4">
            <span className="font-semibold">Number: </span>
            {the_last_order?.number}
          </h2>
          <h2 className="px-2 py-2">
            <span className="font-semibold">Currency: </span>BDT
          </h2>
        </div>

        <div className="p-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5 mb-5">
            {productDetails.map((product, index) => (
              <div key={index} className="border flex items-center">
                <h2 className="font-semibold px-4 py-2 text-sm">Product:</h2>
                <h2 className="pr-2 py-2 text-sm">{product.title}</h2>
              </div>
            ))}
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">
                Product Category:
              </h2>
              <h2 className="py-2">{productDetails[0]?.category}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">
                Payment Method:
              </h2>
              <h2 className="py-2">{the_last_order.paymentMethod}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">Shipping:</h2>
              <h2 className="py-2">{the_last_order.shipping}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">Name:</h2>
              <h2 className="py-2">{the_last_order?.name}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">Total Price:</h2>
              <h2 className="py-2">({the_last_order?.totalAmount}) Taka</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">Division:</h2>
              <h2 className="py-2">{the_last_order?.division}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">District:</h2>
              <h2 className="py-2">{the_last_order?.district}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">City:</h2>
              <h2 className="py-2">{the_last_order?.city}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">Address:</h2>
              <h2 className="py-2">{the_last_order?.address}</h2>
            </div>
            <div className="border flex items-center">
              <h2 className="font-semibold px-4 py-2 text-sm">Order Status:</h2>
              <h2 className="py-2">{the_last_order?.orderStatus}</h2>
            </div>
          </div>

          <div className="lg:text-center mb-3">
            <Link
              to="../dashboard/my-account"
              className="bg-gradient-to-r from-[#A539D5] via-black to-violet-600 rounded-md py-2 px-4 text-white font-semibold"
            >
              Go To Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default Thanks;