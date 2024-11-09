import { Link } from "react-router-dom";
import usePromotions from "../../Hooks/usePromotions";

const Promotion = () => {
  const { promotionsProducts } = usePromotions();

  return (
    <div className="lg:mt-10 lg:mx-20 font_lexend  md:mx-14 mx-3 mb-5">
      <p className="text-[10px]">GADGET THAT YOU LIKE</p>
      <h2 className="text-2xl lg:pb-5">Promotions</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {promotionsProducts.map((product) => (
          <div
            key={product._id}
            className="relative rounded-lg overflow-hidden bg-gray-100 shadow-lg group"
          >
            <img
              src={product.image}
              className="lg:h-[280px] lg:w-[480px]  object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              alt={product.title}
            />

            <div className="absolute top-5 left-4 text-sm text-slate-300">
              <p>
                {product.offerStartDate} - {product.offerRemoveDate}
              </p>
            </div>

            <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
              <h1 className="lg:text-2xl text-xl font-semibold text-white transform transition-transform duration-500 ease-in-out group-hover:translate-y-0 translate-y-10">
                {product.title}
              </h1>

              <Link to={`/promotionsDetails/${product?._id}`}>
                <button className="bg-blue-400 hover:bg-blue-500 text-xs lg:text-[12px] text-white py-2 lg:px-4 px-3 w-32 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
