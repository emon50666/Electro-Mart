import useAxiosPublic from '../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useLocation from '../../Hooks/useLocation';
import { useEffect, useState } from 'react';
import ManageCartLink from '../../components/ManageCartLink/ManageCartLink';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import CheckoutTable from './Shared/CheckoutTable';
import useUsers from '../../Hooks/useUsers';

const CheckoutPage = () => {
    const { locations } = useLocation();
    const axiosPublic = useAxiosPublic();
    const { theUser } = useUsers();
    const { theUserCarts } = useCart();
    const [selectedState, setSelectedState] = useState(""); // Selected division
    const [districts, setDistricts] = useState([]); // Districts of the selected division
    const [selectedDistrict, setSelectedDistrict] = useState(""); // Selected district
    const [cities, setCities] = useState([]); // Cities of the selected district
    const userSubtotal = parseInt(theUser?.userSubtotal)
    const [getProductId, setGetProductId] = useState();
    console.table(getProductId);


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

        const formData = {
            name: form.name.value,
            number: form.number.value,
            address: form.address.value,

            city: form.city.value,
            district: form.district.value,
            division: form.division.value,



            shipping: shippingLabel,
        };

        console.table(formData);

        try {
            const { data } = await axiosPublic.post(
                `${import.meta.env.VITE_API_URL}/checkout`,
                formData
            );
            toast.success('Order placed successfully');
            return data;
        } catch (error) {
            console.error(error);
            toast.error('Order placement failed');
        }
    };



    return (
        <div className="md:flex-row gap-10 md:px-10 pb-10">
            <ManageCartLink />
            <form className="space-y-4 mt-10" onSubmit={handleSubmitData}>
                <div className="grid grid-cols-2 gap-5">
                    <div className="w-full bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full border border-gray-300 p-2 rounded-md"
                                    placeholder="Your Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
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
                                <label className="block text-sm font-medium mb-1">Division</label>
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
                                <label className="block text-sm font-medium mb-1">District</label>
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
                            <label className="block text-sm font-medium mb-1">Upazila/City</label>
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
                                <label className="block text-sm font-medium mb-1">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="w-full border border-gray-300 p-2 rounded-md"
                                    placeholder="Enter your address"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Product</span>
                                <span>Subtotal</span>
                            </div>
                            <div className="">
                                {theUserCarts.map((cart, idx) => <CheckoutTable key={idx} cart={cart} setGetProductId={setGetProductId} />)}
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>{userSubtotal}</span>
                            </div>
                            <hr />
                            <div>
                                <label className="block font-medium mb-1">Shipping</label>
                                <div className="space-y-2">
                                    <div>
                                        <input type="radio" id="dhaka-inside" name="shipping" className="mr-2" />
                                        <label htmlFor="dhaka-inside">ঢাকার ভিতরে: 80.00৳</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="dhaka-outside" name="shipping" className="mr-2" />
                                        <label htmlFor="dhaka-outside">ঢাকার বাইরে: 130.00৳</label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span>630.00৳</span>
                            </div>
                            <Link to={'/greeting'}>
                                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md mt-4">
                                    Place Order 630.00৳
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
