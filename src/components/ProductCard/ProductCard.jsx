import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaCodeCompare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
    const [over, setOver] = useState(false);
    const [over2, setOver2] = useState(false);
    const [over3, setOver3] = useState(false);
    const [over4, setOver4] = useState(false);
    const [over5, setOver5] = useState(false);
  return (
    <div className=" relative  bg-white w-[220px] rounded-md  h-[450px] my-5 shadow-md ">
              <div
                onMouseOver={() => setOver5(true)}
                onMouseOut={() => setOver5(false)}
                className=" relative h-[200px] cursor-pointer mt-12 pt-5  my-auto mx-auto px-5"
              >
                {!over & !over2 & !over3 & !over4 ? (
                  <img
                    className="w-[200px] h-[150px]"
                    src='https://m.media-amazon.com/images/I/81ux3SQKXrL._AC_UF894,1000_QL80_.jpg'
                    alt="Product Image"
             
                  />
                ) : (
                  ""
                )}
                {over && (
                  <img
                    className="w-[200px] h-[150px]"
                    src={
                      over
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypvw5yJaUvJ7k6YSeqPJuTzSxqAUNmBxuoNHa3-h0Ib-0XyC-tNfTTtLvBQz8RPZpvSU&usqp=CAU"
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK79qWWWGq_X157Ab4xrpK6nkt5Rsjsn84lHAAJSNQHOfem4TcTh8l6S1CpYZPcc98sDY&usqp=CAU"
                    }
                    alt="Product Image"

                  />
                )}
                {over2 && (
                  <img
                    className="w-[200px] h-[150px]"
                    src={
                      over2
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypvw5yJaUvJ7k6YSeqPJuTzSxqAUNmBxuoNHa3-h0Ib-0XyC-tNfTTtLvBQz8RPZpvSU&usqp=CAU"
                        : "https://m.media-amazon.com/images/I/71GCTZOZynL._AC_UF894,1000_QL80_.jpg"
                    }
                    alt="Product Image"

                  />
                )}
                {over3 && (
                  <img
                    className="w-[200px] h-[150px]"
                    src={
                      over3
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypvw5yJaUvJ7k6YSeqPJuTzSxqAUNmBxuoNHa3-h0Ib-0XyC-tNfTTtLvBQz8RPZpvSU&usqp=CAU"
                        : "https://m.media-amazon.com/images/I/81ux3SQKXrL._AC_UF894,1000_QL80_.jpg"
                    }
                    alt="Product Image"

                  />
                )}
                {over4 && (
                  <img
                    className="w-[200px] h-[150px]"
                    src={
                      over4
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypvw5yJaUvJ7k6YSeqPJuTzSxqAUNmBxuoNHa3-h0Ib-0XyC-tNfTTtLvBQz8RPZpvSU&usqp=CAU"
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK79qWWWGq_X157Ab4xrpK6nkt5Rsjsn84lHAAJSNQHOfem4TcTh8l6S1CpYZPcc98sDY&usqp=CAU"
                    }
                    alt="Product Image"

                  />
                )}


              </div>
              {over5 && (
                <div className=" absolute right-0 top-0 bg-white shadow-lg px-3 mt-4 py-3 flex flex-col gap-3 mr-3">
                  <FaCodeCompare />
                  <FaSearch />
                  <GrFavorite />
                </div>
              )}
              <div className=" absolute  left-0 top-0  px-3 py-3 flex flex-col gap-3">
                <p className=" bg-red-600 text-white px-2  rounded-full text-sm">
                  HOT
                </p>
                <p className=" bg-green-700 text-white px-2  rounded-full text-sm">
                  NEW
                </p>
                <p className=" bg-blue-700 text-white px-2  rounded-full text-sm">
                -15%
                </p>
              </div>
              <div className=" flex gap-4 my-2 px-3 ">
                <p
                  onMouseOver={() => setOver(true)}
                  onMouseOut={() => setOver(false)}
                  className={`h-1.5 w-10 rounded-full cursor-pointer ${over ? "bg-[#FF5E2B]" : "bg-[#d5c5bf] "
                    }`}
                ></p>
                <p
                  onMouseOver={() => setOver2(true)}
                  onMouseOut={() => setOver2(false)}
                  className={`h-1.5 w-10 rounded-full cursor-pointer ${over2 ? "bg-[#FF5E2B]" : "bg-[#d5c5bf] "
                    }`}
                ></p>
                <p
                  onMouseOver={() => setOver3(true)}
                  onMouseOut={() => setOver3(false)}
                  className={`h-1.5 w-10 rounded-full cursor-pointer ${over3 ? "bg-[#FF5E2B]" : "bg-[#d5c5bf] "
                    }`}
                ></p>
                <p
                  onMouseOver={() => setOver4(true)}
                  onMouseOut={() => setOver4(false)}
                  className={`h-1.5 w-10 rounded-full cursor-pointer ${over4 ? "bg-[#FF5E2B]" : "bg-[#d5c5bf] "
                    }`}
                ></p>
              </div>
              <div className=" pl-3">
                <div className=" flex items-center justify-between pr-3">
                  <h1 className=" font-medium text-black">Apple MacBook Pro </h1>
                  <p className=" flex items-center gap-1"><FaStar color="#FF5E2B" /> <span className=" font-medium">4.3</span></p>
                </div>
                <p className=" text-[#B4B4B4] py-2">Apple MacBook</p>
                <p className=" flex  items-center gap-1 text-sm">

                  <FaCheck color="#FF5E2B" /> <span className=" text-black font-medium">In Stock</span>
                </p>
                <p className="text-[#FF5E2B] py-2 font-semibold">$5000</p>
              </div>

              <div className=" mx-2">
                <button className="bg-[#FF5E2B] text-white px-5 py-2 rounded-md w-full mb-4">
                  Add To Cart
                </button>
              </div>
            </div>
  )
}

export default ProductCard