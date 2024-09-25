import { FiShoppingCart } from "react-icons/fi";
import { CiShop } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const StoresPage = () => {
  return (
    <div className="lg:mx-52">
      <div className="flex lg:flex-row items-center bg-orange-500 p-5  rounded-md my-3">
        <div className="text-black lg:w-1/2">
          <h1 className="text-3xl font-semibold">Visit Our Stores</h1>
          <p>
            You can receive an order from us, find many products with unique
            discounts, and also, if necessary, contact the service center.
          </p>
          <div className="flex space-x-3 font-bold">
            <button className="mt-4 py-4  items-center bg-orange-400 px-4 rounded-md">
              <FiShoppingCart className="font-extrabold text-xl" />
              <h6 className="">Convenient store</h6>
            </button>
            <button className="mt-4 py-4  items-center bg-orange-400 px-4 rounded-md">
              <CiShop className="font-extrabold text-xl" />
              <h6 className="">Delivery point</h6>
            </button>
            <button className="mt-4 py-4  items-center bg-orange-400 px-4 rounded-md">
              <CiSettings className="font-extrabold text-xl" />
              <h6 className="">Service center</h6>
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727279152/zdt2wfw5ugiwlltnv90t.png"
            className="h-64 lg:w-96 lg:ml-20"
            alt=""
          />
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-[18px] font-bold">
          Online Store of Household Appliances and Electronics
        </h1>
        <p>
          The online store of equipment and electronics is one of the leading
          online stores. The band was released in 25 volumes. During this time,
          our team sent 228 cypemapkets and managed to create a powerful,
          fast-working online store. The range of online supply points is huge
          and covers all company categories available for convenience stores.
        </p>
        <p>
          In 2019, we presented a new border policy strategy that covers all
          aspects of the company’s activities – corporate style, delivery, and
          consultant work.
        </p>
        <div className="my-2 flex space-x-4">
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden relative group">
            {/* Image with hover zoom effect and padding */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284467/qktix1clruss0aa2pcwr.jpg"
                alt="Broadway Store"
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110 mx-auto"
              />
              {/* Full image dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Text and button in the bottom left */}
            <div className="absolute bottom-4 left-4 ">
              <h2 className="text-white text-xl font-semibold">
                Broadway Store
              </h2>
              <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                View Store
              </button>
            </div>
          </div>

          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden relative group">
            {/* Image with hover zoom effect and padding */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284092/jeqyb8lergur1exys1b6.jpg"
                alt="Broadway Store"
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110 mx-auto"
              />
              {/* Full image dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Text and button in the bottom left */}
            <div className="absolute bottom-4 left-4 ">
              <h2 className="text-white text-xl font-semibold">
                Broadway Store
              </h2>
              <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                View Store
              </button>
            </div>
          </div>

          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden relative group">
            {/* Image with hover zoom effect and padding */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284458/cuozpzh0yfdn6ebhiw2u.jpg"
                alt="Broadway Store"
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110 mx-auto"
              />
              {/* Full image dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Text and button in the bottom left */}
            <div className="absolute bottom-4 left-4 ">
              <h2 className="text-white text-xl font-semibold">
                Broadway Store
              </h2>
              <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                View Store
              </button>
            </div>
          </div>

          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden relative group">
            {/* Image with hover zoom effect and padding */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284478/i876aib3qf8upksm9ncs.jpg"
                alt="Broadway Store"
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110 mx-auto"
              />
              {/* Full image dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Text and button in the bottom left */}
            <div className="absolute bottom-4 left-4 ">
              <h2 className="text-white text-xl font-semibold">
                Broadway Store
              </h2>
              <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                View Store
              </button>
            </div>
          </div>
        </div>
        <h6 className="text-[15px] font-bold">A wonderful serenity has taken possession of my entire soul</h6>
        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
        <h6 className="text-[15px] font-bold">When, while the lovely valley teems with vapour around me
        </h6>
        <p>little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God!</p>
        <h6 className="text-[15px] font-bold">Online shopping that really is convenient
        </h6>
        <p>The car parts and everything you may need for repairs and regular maintenance of your vehicle are listed in a convenient and comprehensive catalogue. The innovative search – by name, item ID or OEM number will help you to find automotive parts easily.</p>
        <p>You can choose whichever payment method is most convenient for you from among the various options. Have any questions? Our support service specialists are always on hand to help. Picking and buying car parts with us is an enjoyable experience!</p>
      </div>
    </div>
  );
};

export default StoresPage;
