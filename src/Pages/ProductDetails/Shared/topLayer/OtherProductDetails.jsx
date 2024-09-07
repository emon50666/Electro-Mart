import { FaRegStar } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

const OtherProductDetails = () => {
    const [countView, setCountView] = useState(10)
    return (
        <div >
            <div className="">
                <div>
                    <h1 className="text-4xl font-semibold">Basic Rib Legging</h1>
                    <div className="flex items-center space-x-4 py-1">
                        <div className="flex items-start space-x-1">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div>
                            <h1>({ } customer reviews)</h1>
                        </div>
                    </div>
                </div>
                <div className="text-4xl text-orange-500 items-center font-semibold py-3 flex">
                    <h1>
                        <AiOutlineDollar />
                    </h1>
                    <h1>50.00</h1>
                </div>

                <div className="">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae velit eum fuga repellat pariatur est dolorem consequuntur nostrum nam voluptatem, possimus recusandae eveniet at iure accusamus alias rerum odio harum, natus ut obcaecati sapiente exercitationem nihil! Veniam, quidem perspiciatis. Obcaecati doloremque earum corrupti temporibus natus. Sunt distinctio, nihil culpa, sapiente laborum in, debitis dolores magni veritatis temporibus nobis tempora recusandae voluptatibus rem asperiores laboriosam architecto quod doloribus accusantium sequi quis magnam quia deserunt? Necessitatibus, ratione. Quidem possimus unde distinctio voluptatem ipsam magni molestias hic veritatis animi impedit officiis illo corrupti similique aut sit nisi ipsum, deserunt expedita amet cumque?
                    </p>
                </div>
                <div className="space-x-2">
                    <button className="px-14 py-1 bg-orange-500 text-white font-semibold rounded-md">
                        Add to cart
                    </button>
                    <button className="px-14 py-1 bg-orange-500 text-white font-semibold rounded-md">
                        Buy now
                    </button>
                </div>
                
                <div className="flex items-center space-x-2 m-5 px-3 py-2 bg-slate-200 rounded-lg">
                    <FaRegEye />
                    <h1>{countView}</h1>
                    <p>People Watching this product now!</p>
                </div>
            </div>
        </div>
    );
};

export default OtherProductDetails;