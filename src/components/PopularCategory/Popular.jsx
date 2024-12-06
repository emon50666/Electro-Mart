import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Computer & PC",
    imageUrl: "https://i.ibb.co.com/VtZ0Q7z/remove1.png",
    cat: "laptop",
  },
  {
    id: 2,
    name: "Smart Gadgets",
    imageUrl: "https://i.ibb.co.com/d2WGRdt/remove2.png",
    cat: "mobile",
  },
  {
    id: 3,
    name: "TV & Monitor",
    imageUrl: "https://i.ibb.co.com/0KbhNXb/remove3.png",
    cat: "monitor",
  },
  {
    id: 4,
    name: "Wearable",
    imageUrl: "https://i.ibb.co.com/S3RCYKX/remove4.png",
    cat: "Headphones",
  },
  // Add more product objects as needed...
];

const Popular = () => {
  return (
    <div className=" mb-10 px-4">
      {/* Grid Layout on larger screens, Horizontal Scroll on Mobile */}
      <div className="flex lg:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 xl:gap-x-20 overflow-x-auto lg:overflow-hidden no-scrollbar">
        {products.map((product, idx) => (
          <Link
            key={idx}
            to={`/shop-page?category=${product?.cat}`}
            className="min-w-[250px] rounded-lg overflow-hidden shadow-md bg-gray-200/60 hover:shadow-2xl transform transition duration-500 hover:scale-105 flex-shrink-0 lg:flex-shrink lg:w-auto"
          >
            {/* Text Section */}
            <div className="text-center p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500">{product.count}</p>
            </div>

            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover pb-6 transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
