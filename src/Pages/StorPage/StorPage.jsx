import { FiShoppingCart } from "react-icons/fi";
import { CiShop } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
const StorPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  const stores = [
    {
      storeName: "Broadway Store",
      location: "123 Main St, New York, NY",
      number: "+1-555-123-1234",
      workHours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm, Sun: Closed",
      shortDetails:
        "Specializes in the latest electronic gadgets like smartphones, laptops, and smart home devices. Also offers tech support and repairs.",
      imageUrl:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284467/qktix1clruss0aa2pcwr.jpg",
    },
    {
      storeName: "Valencia Store",
      location: "456 Circuit Lane, San Francisco, CA",
      number: "+1-555-567-5678",
      workHours: "Mon-Sat: 8am-8pm, Sun: 10am-6pm",
      shortDetails:
        "Sells electrical components like circuit boards, wires, and tools for DIY electronics projects. Offers custom electronic solutions for businesses.",
      imageUrl:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284092/jeqyb8lergur1exys1b6.jpg",
    },
    {
      storeName: "Emeryville Store",
      location: "789 Voltage Ave, Austin, TX",
      number: "+1-555-987-9876",
      workHours: "Mon-Fri: 9am-9pm, Sat-Sun: 10am-7pm",
      shortDetails:
        "Provides a wide range of home appliances, including refrigerators, washing machines, and air conditioners. Also offers installation and maintenance services.",
      imageUrl:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284458/cuozpzh0yfdn6ebhiw2u.jpg",
    },
    {
      storeName: "Alameda Store",
      location: "789 Voltage Ave, Austin, TX",
      number: "+1-555-987-9876",
      workHours: "Mon-Fri: 9am-9pm, Sat-Sun: 10am-7pm",
      shortDetails:
        "Provides a wide range of home appliances, including refrigerators, washing machines, and air conditioners. Also offers installation and maintenance services.",
      imageUrl:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1727284478/i876aib3qf8upksm9ncs.jpg",
    },
  ];

  return (
    <div className="lg:px-10 md:px-5 px-2 font_cabin">
      <div className="flex flex-col lg:flex-row items-center  bg-teal-500 p-5 rounded-md my-3">
        <div className="text-slate-700 lg:w-1/2">
          <h1 className="text-3xl font-semibold">Visit Our Stores</h1>
          <p className="mt-2 text-sm font-medium lg:text-base">
            You can receive an order from us, find many products with unique
            discounts, and also, if necessary, contact the service center.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-3 font-bold mt-4 space-y-3 sm:space-y-0">
            <button className="py-4 lg:flex-none flex items-center bg-teal-400 px-3 rounded-md w-full sm:w-auto">
              <FiShoppingCart className="font-extrabold text-xl mr-2" />
              <h6>Convenient store</h6>
            </button>
            <button className="py-4 lg:flex-none flex items-center bg-teal-400 px-3 rounded-md w-full sm:w-auto">
              <CiShop className="font-extrabold text-xl mr-2" />
              <h6>Delivery point</h6>
            </button>
            <button className="py-4 lg:flex-none flex items-center bg-teal-400 px-3 rounded-md w-full sm:w-auto">
              <CiSettings className="font-extrabold text-xl mr-2" />
              <h6>Service center</h6>
            </button>
          </div>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-16">
          <img
            src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727279152/zdt2wfw5ugiwlltnv90t.png"
            className="h-64 lg:w-96 md:w-96  w-full object-cover"
            alt="Store display"
          />
        </div>
      </div>

      <div className="space-y-2 bg-gray-50 p-4 rounded-md">
        <h1 className="text-xl font-bold">
          Online Store of Household Appliances and Electronics
        </h1>
        <p className="text-md">
          The online store of equipment and electronics is one of the leading
          online stores. The band was released in 25 volumes. During this time,
          our team sent 228 cypemapkets and managed to create a powerful,
          fast-working online store. The range of online supply points is huge
          and covers all company categories available for convenience stores.
        </p>
        <p className="text-md">
          In 2019, we presented a new border policy strategy that covers all
          aspects of the company’s activities – corporate style, delivery, and
          consultant work.
        </p>

        {/* Stores List */}
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-white my-5 shadow-lg rounded-lg overflow-hidden relative group"
            >
              <div className="relative ">
                <img
                  src={store.imageUrl}
                  alt={store.storeName}
                  className="w-full h-72  object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="absolute bottom-4 left-4">
                <h2 className="text-white text-lg sm:text-xl font-semibold">
                  {store.storeName}
                </h2>
                <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                  View Store
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mt-4">
          A wonderful serenity has taken possession of my entire soul
        </h3>
        <p className="text-md">
          I should be incapable of drawing a single stroke at the present
          moment; and yet I feel that I never was a greater artist than now.
        </p>

        <h6 className="text-xl font-bold mt-4">
          When, while the lovely valley teems with vapour around me
        </h6>
        <p className="text-md">
          Little world among the stalks, and grow familiar with the countless
          indescribable forms of the insects and flies, then I feel the presence
          of the Almighty, who formed us in his own image...
        </p>

        <h6 className="text-xl  font-bold mt-4">
          Online shopping that really is convenient
        </h6>
        <p className="text-md ">
          The car parts and everything you may need for repairs and regular
          maintenance of your vehicle are listed in a convenient and
          comprehensive catalogue...
        </p>
      </div>

      <div className="container  mt-2 bg-gray-50 p-4 rounded-md mb-5">
        <h2 className="text-xl  font-bold">
          Online store of household appliances and electronics
        </h2>
        <p className="text-md">
          {showMore ? (
            <>
              Then the question arises: where’s the content? Not there yet?
              That’s not so bad, there’s dummy copy to the rescue. But worse,
              what if the fish doesn’t fit in the can, the foot’s too big for
              the boot? Or too small? Too short sentences, too many headings,
              images too large for the proposed design, or too small, or they
              fit in but it looks iffy for reasons. A client that’s unhappy for
              a reason is a problem, a client that’s unhappy though he or she
              can’t quite put a finger on it is worse. Chances are there wasn’t
              collaboration, communication, and...
            </>
          ) : (
            "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue..."
          )}
        </p>
        <button
          onClick={handleReadMore}
          className="mt-3 px-3 py-2 text-md bg-white rounded hover:bg-gray-100"
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default StorPage;
