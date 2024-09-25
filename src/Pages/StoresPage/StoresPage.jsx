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
        <h1 className="text-[18px] font-semibold">
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
      </div>
    </div>
  );
};

export default StoresPage;
