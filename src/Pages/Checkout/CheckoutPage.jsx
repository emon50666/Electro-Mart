import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useLocation from "../../Hooks/useLocation";
import { useEffect, useState } from "react";
import ManageCartLink from "../../components/ManageCartLink/ManageCartLink";

import useCart from "../../Hooks/useCart";
import CheckoutTable from "./Shared/CheckoutTable";

// import Loader from '../../components/Loader/Loader';
import UserAuth from "../../Hooks/useAuth";

import useTotalAmount from "../../Hooks/useTotalAmount";

import useFilteredOrders from "../../Hooks/useFilterOrder";


const CheckoutPage = () => {
  const { locations } = useLocation();
  const axiosPublic = useAxiosPublic();
  const { user } = UserAuth();

  const [recent,setRecent] = useState();


  const { orders } = useFilteredOrders(user);

  // Check if the orders array is not empty
 useEffect(()=>{
  if (orders && orders.length > 0) {
    const lastOrder = orders[orders.length - 1]; // Get the last order
    setRecent(lastOrder)
    console.log('Last order:', lastOrder);
  } else {
    console.log('No orders found.');
  }
 },[orders])
  console.log('recent id',recent);
  


  const { totalPrice } = useTotalAmount();

  const { theUserCarts } = useCart();
  const [selectedState, setSelectedState] = useState(""); // Selected division
  const [districts, setDistricts] = useState([]); // Districts of the selected division
  const [selectedDistrict, setSelectedDistrict] = useState(""); // Selected district
  const [cities, setCities] = useState([]); // Cities of the selected district
  const userSubtotal = parseInt(totalPrice) || 0;
  const [getProductId, setGetProductId] = useState();
  // console.log(getProductId);
  const userOrder = theUserCarts;

  // const [ setShippingCharge] = useState(0); // Store selected shipping charge
  const [totalAmount, setTotalAmount] = useState(userSubtotal); // Store total amount (initially subtotal)

  const handleShippingChange = (e) => {
    const selectedCharge = Number(e.target.value) || 0;
    // console.log(e.target.value);
    // setShippingCharge(selectedCharge);
    setTotalAmount(userSubtotal + selectedCharge);
    // console.log("Selected shipping charge:", selectedCharge);
  };

  // Update districts when a division is selected
  useEffect(() => {
    if (selectedState) {
      const division = locations.find(
        (location) => location.division === selectedState
      );

      if (division) {
        setDistricts(division.districts);
        setCities([]); // Reset cities when division changes
        setSelectedDistrict(""); // Clear district selection
      } else {
        setDistricts([]);
      }
    }
  }, [selectedState, locations]);

  // Update cities when a district is selected
  useEffect(() => {
    if (selectedDistrict) {
      const district = districts.find(
        (district) => district.name === selectedDistrict
      );

      if (district) {
        setCities(district.upazilas); // Set cities (upazilas) for the selected district
      } else {
        setCities([]);
      }
    }
  }, [selectedDistrict, districts]);

 
  const handleSubmitData = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Validate form inputs
    if (!form.name.value || !form.number.value || !form.address.value) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const selectedShippingInput = form.querySelector(
      'input[name="shipping"]:checked'
    );
    const shippingLabel = selectedShippingInput
      ? form.querySelector(`label[for="${selectedShippingInput.id}"]`).innerText
      : "";

    // Payment
    const selectedPaymentInput = form.querySelector(
      'input[name="payment"]:checked'
    );
    const selectedPaymentMethod = selectedPaymentInput
      ? selectedPaymentInput.value
      : "";

    const formData = {
      name: form.name.value,
      number: form.number.value,
      address: form.address.value,
      paymentMethod: selectedPaymentMethod,
      getProductId,
      userOrder,
      city: form.city.value,
      district: form.district.value,
      division: form.division.value,
      totalAmount,
      shipping: shippingLabel,
      orderStatus: "processing", // Default status
      products: theUserCarts,
      userId: user._id,
      userEmail: user.email,
      adderMail: user?.email,
      cartIds: theUserCarts.map((cart) => cart._id),
    };

    // console.log(formData);

    try {
      const { data } = await axiosPublic.post(
        `${import.meta.env.VITE_API_URL}/order`,
        formData
      );

      // console.log(data);

      if (selectedPaymentMethod === "cashOnDelivery") {
        toast.success("Order placed successfully!");
     
        window.location.replace(`/thanks/${recent.tran_id}`);
      } else if (selectedPaymentMethod === "bkash") {
        toast.success("Redirecting to SSL payment gateway...");
        window.location.replace(data.paymentUrl);
      }
    } catch (error) {
      console.error("Order placement error:", error);
      if (error.response) {
        toast.error(
          `Error: ${error.response.data.message || "Order placement failed"}`
        );
      } else {
        toast.error("Order placement failed");
      }
    }
  };

  // if (isPending) return <Loader />;

  return (
    <div className="md:flex-row gap-10 md:px-10 pb-10">
      <ManageCartLink />
      <form className="space-y-4 mt-10" onSubmit={handleSubmitData}>
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="number"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>

            <div className="">
              <div>
                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">
                  Division
                </label>
                <select
                  className="border w-full p-2 rounded-md"
                  name="division"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select Division</option>
                  {locations.map((location) => (
                    <option key={location.division} value={location.division}>
                      {location.division}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">
                  District
                </label>
                <select
                  className="border w-full p-2 rounded-md"
                  name="district"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">
                Upazila/City
              </label>
              <select className="border w-full p-2 rounded-md" name="city">
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>
            {/* payment method */}
            <h1 className="mt-5 text-lg font-normal text-gray-800 mb-5">
              Select Your Payment Method
            </h1>
            <div className="border mt-5 p-2  rounded-md space-y-2" required>
              <div>
                <input
                  type="radio"
                  id="cash-on-delivery"
                  name="payment"
                  required
                  value="cashOnDelivery"
                  className="mr-2"
                />
                <label htmlFor="cash-on-delivery">Cash on Delivery</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bkash"
                  name="payment"
                  value="bkash"
                  required
                  className="mr-2"
                />
                <img
                  src="https://i.ibb.co/JvBbrr1/bkash.png"
                  alt="Bkash"
                  className="w-20"
                />
              </div>
            </div>
          </div>

          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Product</span>
                <span>Price</span>
              </div>
              <div
                id="checkoutId"
                className="overflow-y-auto h-auto pr-2 max-h-36"
              >
                {theUserCarts.map((cart, idx) => (
                  <CheckoutTable
                    key={idx}
                    cart={cart}
                    setGetProductId={setGetProductId}
                  />
                ))}
              </div>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{userSubtotal}</span>
              </div>
              <hr />
              <div>
                <h2 className="mb-3 font-semibold">Shipping Method</h2>
                <div>
                  <input
                    type="radio"
                    id="dhaka-inside"
                    name="shipping"
                    value="80"
                    required
                    className="mr-2"
                    onChange={handleShippingChange}
                  />
                  <label htmlFor="dhaka-inside">
                    InSide Dhaka: 80 <span className="font-semibold">Taka</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="dhaka-outside"
                    name="shipping"
                    value="130"
                    required
                    className="mr-2"
                    onChange={handleShippingChange}
                  />
                  <label htmlFor="dhaka-outside">
                    OutSide Dhaka: 130{" "}
                    <span className="font-semibold">Taka</span>
                  </label>
                </div>
              </div>
              <hr />
              <div className="flex font-semibold justify-between">
                <span>Total</span>
                <span>{totalAmount} ৳</span>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md mt-4"
              >
                Place Order {totalAmount}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
