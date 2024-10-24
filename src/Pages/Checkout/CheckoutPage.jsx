


import { Country, State, City } from 'country-state-city';
import { useState } from 'react';

const CheckoutPage = () => {
    const [countries, setCountries] = useState(Country.getAllCountries());
    console.log(countries);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);

	const [selectedCountry, setSelectedCountry] = useState(null);
	const [selectedState, setSelectedState] = useState(null);

	const handleCountryChange = (country) => {
		setSelectedCountry(country);
		setStates(State.getStatesOfCountry(country.isoCode));
		setCities([]);
	};

	const handleStateChange = (state) => {
		setSelectedState(state);
		setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
	};
    return (
        <div className="flex flex-col md:flex-row gap-10 p-5 md:p-10">
            {/* Left Side - Checkout Form */}
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
                <form className="space-y-4">
                    <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Your Full Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                            type="tel"
                            className="w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>
                    </div>
                   <div className='grid grid-cols-2 gap-2'>
                   <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <select
                            className="border w-full p-2 rounded-md"
                            onChange={(e) => {
                                
                                handleCountryChange(
                                    countries.find((c) => c.isoCode === e.target.value) 
                                );
                            }}
                        >
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </select>

                    </div>
                   </div>
                   <div className='grid grid-cols-2 gap-2'>
                   <div>
                        <label className="block text-sm font-medium mb-1">State</label>
                        <select className='border w-full p-2 rounded-md' disabled={!selectedCountry}
                        onChange={(e) => {
                                
                            handleStateChange(
                                states.find((s) => s.isoCode === e.target.value) 
                            );
                        }}
                        
                        >
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <select className='border w-full p-2 rounded-md' >
                        {cities.map((city) => (
							<option key={city.name} value={city.name}>
								{city.name}
							</option>
						))}
                        </select>
                    </div>
                   </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Zip Code</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded-md"
                            placeholder="Enter your Zip Code"
                            required
                        />
                    </div>
                </form>
            </div >

            {/* Right Side - Order Summary */}
            < div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md" >
                <h2 className="text-xl font-semibold mb-4">Your Order</h2>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Product</span>
                        <span>Subtotal</span>
                    </div>
                    <div className="flex justify-between">
                        <span>নকশি পিঠা (সিরা ছাড়া) - 1 কেজি</span>
                        <span>550.00৳</span>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>550.00৳</span>
                    </div>
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
                    <div className="mt-4">
                        <label className="block font-medium mb-1">Cash on Delivery</label>
                        <textarea
                            rows="3"
                            className="w-full border border-gray-300 p-2 rounded-md"
                            placeholder="পিঠা হাতে পেয়ে মূল্য পরিশোধ করুন"
                        />
                    </div>
                    <button className="w-full bg-orange-500 text-white py-3 rounded-md mt-4">
                        Place Order 630.00৳
                    </button>
                </div>
            </div >
        </div >
    );
};

export default CheckoutPage;
