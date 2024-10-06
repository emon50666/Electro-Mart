
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
const AddToCard = () => {


    const [isCartOpen, setIsCartOpen] = useState(false);

    // Sample cart data (replace this with actual product data)
    const cartItems = [
      {
        id: 1,
        name: 'Product 1 erweewrwe',
        image: 'https://via.placeholder.com/100',
        price: '$25',
      },
      {
        id: 2,
        name: 'Product 2 ewrfdsfsdf',
        image: 'https://via.placeholder.com/100',
        price: '$40',
      },
      {
        id: 2,
        name: 'Product 2 dsfsdfsdfsdg',
        image: 'https://via.placeholder.com/100',
        price: '$40',
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/100',
        price: '$40',
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/100',
        price: '$40',
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/100',
        price: '$40',
      },
    ];
  
    // Function to toggle cart visibility
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            <div>
      {/* Cart Icon */}
      <div className="relative bg-orange-200/50 hover:bg-orange-300/50 cursor-pointer rounded-full p-2" onClick={toggleCart}>
        <FaCartShopping className="text-lg text-orange-600" />
        <span className="absolute -right-2 -ml-1 -top-2 rounded-full bg-orange-500 px-1 py-[1px] text-[10px] text-white">9+</span>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed top-0  right-0 w-72  h-screen overflow-x-auto overflow-y-scroll bg-white  shadow-lg rounded-lg p-4 z-50">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={toggleCart}
          >
            ✖
          </button>

          <h3 className="text-lg font-semibold mb-4">Your Cart Items</h3>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Cart and Checkout Buttons */}
          <div className="mt-6 mb-6 space-x-5 ">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md">
              View Cart
            </button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
        </div>
    );
};

export default AddToCard;