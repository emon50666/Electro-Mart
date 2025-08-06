import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Computer & PC",
    imageUrl:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha",
    cat: "laptop",
  },
  {
    id: 2,
    name: "Smart Gadgets",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/060/667/919/non_2x/modern-technology-gadgets-including-smartwatch-smartphone-wireless-mouse-earbuds-and-portable-ssd-on-a-transparent-background-concept-of-digital-lifestyle-and-connectivity-png.png",
    cat: "mobile",
  },
  {
    id: 3,
    name: "TV & Monitor",
    imageUrl:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Monitor/Images/273794_12_yywqfq.png",
    cat: "monitor",
  },
  {
    id: 4,
    name: "Wearable",
    imageUrl:
      "https://i5.walmartimages.com/asr/6bb3c7b0-836b-4956-aa17-e3078f73fc1d.42683095831aadc83fea60e90254ac09.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    cat: "Headphones",
  },
];

const Popular = () => {
  return (
    <div className="px-4">
      <div className="flex lg:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 xl:gap-8 overflow-x-auto lg:overflow-hidden p-10 no-scrollbar">
        {products.map((product, idx) => (
          <Link
            key={idx}
            to={`/shop-page?category=${product.cat}`}
            className="flex flex-col justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-[320px] lg:min-w-0"
          >
            {/* Image Section */}
            <div className="w-auto h-48 overflow-hidden rounded-t-xl bg-gray-100">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="mx-auto w-auto h-full object-fill p-4 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Section */}
            <div className="text-center py-4 px-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500">Explore Now</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
