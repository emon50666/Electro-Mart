import useAxiosPublic from '../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useLocation from '../../Hooks/useLocation';
import { useEffect, useState } from 'react';
import ManageCartLink from '../../components/ManageCartLink/ManageCartLink';



import useCart from '../../Hooks/useCart';
import CheckoutTable from './Shared/CheckoutTable';
import useUsers from '../../Hooks/useUsers';
import Loader from '../../components/Loader/Loader';
import UserAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { locations } = useLocation();
    const axiosPublic = useAxiosPublic();
    const {user} = UserAuth()
 const navigate = useNavigate()
    const { theUser ,isPending,refetch} = useUsers();
    const { theUserCarts } = useCart();
    const [selectedState, setSelectedState] = useState(""); // Selected division
    const [districts, setDistricts] = useState([]); // Districts of the selected division
    const [selectedDistrict, setSelectedDistrict] = useState(""); // Selected district
    const [cities, setCities] = useState([]); // Cities of the selected district
    const userSubtotal = parseInt(theUser?.userSubtotal) || 0 ;
    const [getProductId, setGetProductId] = useState();
   console.log(getProductId);

    const [, setShippingCharge] = useState(0); // Store selected shipping charge
    const [totalAmount, setTotalAmount] = useState(userSubtotal)  ; // Store total amount (initially subtotal)

    const handleShippingChange = (e) => {
        const selectedCharge = Number(e.target.value) || 0; // Safeguard against invalid values
        setShippingCharge(selectedCharge);
        setTotalAmount(userSubtotal + selectedCharge); // Update total amount
        refetch()
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

    // Handle form submission
    const handleSubmitData = async (e) => {
        e.preventDefault();

        const form = e.target;
        const selectedShippingInput = form.querySelector(
            'input[name="shipping"]:checked'
        );


        const shippingLabel = selectedShippingInput
            ? form.querySelector(`label[for="${selectedShippingInput.id}"]`).innerText
            : "";

        //  payment 

        const selectedPaymentInput = form.querySelector(
            'input[name="payment"]:checked'
        );
        const selectedPaymentMethod = selectedPaymentInput
            ? selectedPaymentInput.value
            : '';

        const formData = {
            name: form.name.value,
            number: form.number.value,
            address: form.address.value,
            paymentMethod: selectedPaymentMethod,
            getProductId,
            city: form.city.value,
            district: form.district.value,
            division: form.division.value,
            totalAmount,
            shipping: shippingLabel,
            user
        };

        console.table(formData);

        try {
            const { data } = await axiosPublic.post(
                `${import.meta.env.VITE_API_URL}/order`,
                formData
               
            );
            toast.success('Order placed successfully');
            // redirect url to ssl
             // Check the payment method
             if (selectedPaymentMethod === 'Cash on Delivery') {
                toast.success('Order placed successfully!');
                navigate('/thanks'); // Redirect to success page
            } else if (selectedPaymentMethod === 'Bkash') {
                toast.success('Redirecting to SSL payment gateway...');
                window.location.replace(data.paymentUrl); // Redirect to SSL payment gateway
            }
            
            return data;
        } catch (error) {
            console.error(error);
            toast.error('Order placement failed');
        }
    };


    if (isPending) return <Loader />;

    return (
        <div className="md:flex-row gap-10 md:px-10 pb-10">
            <ManageCartLink />
            <form className="space-y-4 mt-10" onSubmit={handleSubmitData}>
                <div className="grid grid-cols-2 gap-5">
                    <div className="w-full bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full border border-gray-300 p-2 rounded-md"
                                    placeholder="Your Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">Phone</label>
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
                                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">Division</label>
                                <select
                                    className="border w-full p-2 rounded-md"
                                    name="division"
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    <option value="">Select Division</option>
                                    {locations.map((location) => (
                                        <option
                                            key={location.division}
                                            value={location.division}
                                        >
                                            {location.division}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">District</label>
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
                            <label className="block text-sm mt-2 text-gray-600 font-medium mb-1">Upazila/City</label>
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
                                <label className="block text-sm text-gray-700 font-medium mb-1">Address</label>
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

                                    value="Cash on Delivery"
                                    className="mr-2"
                                />
                                <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="bkash"
                                    name="payment"
                                    value="Bkash"
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
                            <div id='checkoutId' className="overflow-y-auto h-auto pr-2 max-h-36">
                                {theUserCarts.map((cart, idx) => <CheckoutTable key={idx} cart={cart} setGetProductId={setGetProductId} />)}
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>{userSubtotal}</span>
                            </div>
                            <hr />
                           <div >
                             <h2 className='mb-3 font-semibold'>Shipping Method</h2>
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
                                <label htmlFor="dhaka-inside">ঢাকার ভিতরে: 80.00 <span className='font-semibold'>৳</span></label>
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
                                <label htmlFor="dhaka-outside">ঢাকার বাইরে: 130.00 <span className='font-semibold'>৳</span></label>
                            </div>
                           </div>
                            <hr />
                            <div className="flex font-semibold justify-between">
                                <span >Total</span>
                                <span>{totalAmount} ৳</span>
                            </div>




                            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md mt-4">
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
