import { GoGitCompare } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { LuFacebook } from "react-icons/lu";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTelegram } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types"
import toast from "react-hot-toast";
import Rating from "react-rating";
import {
    TwitterShareButton, TelegramShareButton, LinkedinShareButton, FacebookShareButton, WhatsappShareButton
} from "react-share";
import useAddToCart from "../../../../Hooks/useAddToCart";
import AddCart from "../../../../components/AddToCart/AddCart";
import useAddToCompare from "../../../../Hooks/useAddToCompare";
import useAddToWishlist from "../../../../Hooks/useAddToWishlist";

const OtherProductDetails = ({ product }) => {
    const handleAddCart = useAddToCart();
    const handleAddCompare = useAddToCompare();
    const handleAddWishlist = useAddToWishlist();
    const [quantityCount, setQuantityCount] = useState(1)
    const [disableBtn, setDisableBtn] = useState(false)
    const shareUrl = window.location.href;
    const [cartOpen, setCartOpen] = useState(false);

    const increaseCount = () => {
        if (quantityCount === parseInt(product?.quantity)) {
            toast.error("Stocks Out")
            setDisableBtn(true)
            return;
        } else {
            const increasedCount = quantityCount + 1;
            setQuantityCount(increasedCount)
        }
    }
    const decreaseCount = () => {
        if (quantityCount > 0) {
            const decreasedCount = quantityCount - 1;
            setQuantityCount(decreasedCount)
            setDisableBtn(false)
        }
    }

    const handleAddToCart = () => {
        handleAddCart(product)
        setCartOpen(true);
    }
    const handleAddToCompare = () => {
        handleAddCompare(product)
    }
    const handleAddToWishlist = () =>{
        handleAddWishlist(product)
    }
    return (
        <div >
            <div className="lg:space-y-3 mt-10">
                {/* Title & Rating start */}
                <div>
                    <h3 className="text-xl md:text-2xl lg:text-2xl font-bold lg:font-semibold font_lexend">{product?.title}</h3>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-4 py-1">
                            <Rating
                                initialRating={parseInt(product?.rating) || 0}
                                emptySymbol={<img
                                    src="https://i.ibb.co.com/KN7rSQ6/empty-star-removebg-preview.png"
                                    className="icon h-4 md:h-5" />
                                }
                                fullSymbol={<img src="https://i.ibb.co.com/KGK6qQR/full.jpg" className="icon h-4 md:h-5" />}
                                readonly
                            />
                            <div className="font_cabin text-[#767676]">
                                <p>({ } customer reviews)</p>
                            </div>
                        </div>
                        <div className="font_cabin rounded-full text-orange-500 border-2  px-4">
                            {product.quantity <= 0 ? <p>Stock Out</p> : <p>( {product?.quantity} ) item available</p>}
                        </div>
                    </div>
                </div>
                {/* Title & Rating end */}
                {/* Price & description start */}
                <div className="text-xl gap-2 lg:text-4xl text-orange-500 font-semibold flex items-center font_cabin">
                <p >৳</p>
                    <h3> {product?.price}</h3>
                </div>
                <div className="font_cabin text-sm lg:text-base text-[#777777]">
                    <p>
                        {product?.shortDescription}
                    </p>
                </div>
                {/* Price & description end */}
                <div className="divider my-2 md:my-0 lg:my-auto"></div>
                {/* Quantity & cart start */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-2">
                    <div className="py-2 px-2 inline-block bg-white border border-gray-200 rounded-lg w-1/2 md:w-1/4">
                        <div className="flex items-center justify-between gap-x-3.5">
                            <button type="button"
                                onClick={() => decreaseCount()}
                                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" tabIndex="-1" aria-label="Decrease" data-hs-input-number-decrement="">
                                &minus;
                            </button>
                            <span>{quantityCount}</span>
                            <button
                                type="button"
                                onClick={() => increaseCount()}
                                disabled={disableBtn}
                                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="space-x-3 md:space-x-5">
                        <button
                            onClick={handleAddToCart}
                            className="px-9 md:px-4 py-2 text-sm lg:text-base bg-orange-500 text-white font-semibold rounded-md hover:bg-teal-500 focus:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                            Add to cart
                        </button>
                        <button className="px-9 md:px-4 py-2 text-sm lg:text-base bg-orange-500 text-white font-semibold rounded-md hover:bg-teal-500 focus:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                            Buy now
                        </button>
                    </div>

                </div>
                {/* Quantity & cart end */}
                <div className="divider my-2 md:my-0 lg:my-auto"></div>
                {/* Share & compare start */}
                <div className="lg:my-5 flex flex-col xl:flex-row justify-between gap-y-1 ">
                    <div className="flex text-sm md:text-base lg:text-lg">
                        <button onClick={handleAddToCompare} className="flex items-center hover:text-[#666666] space-x-1">
                            <div>
                                <GoGitCompare />
                            </div>
                            <h3 className="font-medium font_cabin">Compare</h3>
                        </button>
                        <button onClick={handleAddToWishlist}  className="flex items-center hover:text-[#666666] pl-8 space-x-1">
                            <div>
                                <GoHeart />
                            </div>
                            <h3 className="font-medium font_cabin">Add to wishlist</h3>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <h3 className="font-medium font_cabin text-sm md:text-base lg:text-lg">Share:</h3>
                        <div className="flex items-center space-x-2 ml-1 lg:text-xl text-[#666666]">
                            <FacebookShareButton url={shareUrl}>
                                <LuFacebook className="cursor-pointer" />
                            </FacebookShareButton>
                            <TwitterShareButton url={shareUrl}>
                                <FaXTwitter className="cursor-pointer" />
                            </TwitterShareButton>
                            <LinkedinShareButton url={shareUrl}>
                                <SlSocialLinkedin className="cursor-pointer" />
                            </LinkedinShareButton>
                            <TelegramShareButton url={shareUrl}>
                                <BsTelegram className="cursor-pointer" />
                            </TelegramShareButton>
                            <WhatsappShareButton url={shareUrl}>
                                <FaWhatsapp className="cursor-pointer" />
                            </WhatsappShareButton>
                        </div>
                    </div>
                </div>
                {/* Share & compare end */}
            </div>
            <div className="divider my-2 md:my-0 lg:my-auto"></div>
            <div className="flex items-center justify-center gap-x-1 mb-5 mx-2 px-2 xl:px-4 py-2 bg-slate-200 rounded-lg text-sm md:text-base">
                <FaRegEye className="mt-1" />
                <p>
                    {product?.view || 0}
                    {' '}People Watching this product now!
                </p>
            </div>
            {cartOpen && <AddCart setCartOpen={setCartOpen} />}
        </div>
    );
};
OtherProductDetails.propTypes = {
    product: PropTypes.object,
}
export default OtherProductDetails;