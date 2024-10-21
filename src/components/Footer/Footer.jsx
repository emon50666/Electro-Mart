import { FaFacebookF, FaInstagram, FaLocationArrow, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import FooterCategoryList from "./Shared/FooterCategoryList";

const Footer = () => {
    return (
        <div className="px-4 pt-16 md:px-4 lg:px-8 bg-[#222222]  font_inter">
            <div className="grid  row-gap-10 mb-8 grid-cols-1 md:grid-cols-6 md:text-sm  lg:grid-cols-6 xl:grid-cols-6">
                <div className=" md:max-w-md  col-span-1 md:col-span-2 ">
                    <h2 className="font-bold text-3xl text-gray-100 xl:text-5xl">Elector <span className="text-orange-500">Mart</span></h2>
                    <div className="pt-2  gap-2 items-center lg:max-w-md">
                        <p className="text-sm xl:text-lg text-[#B3B3B3]">

                            Call Us 24/7 <br />
                        </p>
                        <p className="font-normal text-base  xl:text-3xl text-white">
                            +8801786397249
                        </p>
                    </div>
                    <div className="pt-3 xl:pt-6 lg:max-w-sm">
                        <p className="text-base xl:text-lg flex gap-2 items-center text-white">
                            <FaLocationArrow />
                            Dhaka,Bangladesh
                        </p>
                        <p className="text-base xl:text-lg flex gap-2 items-center text-white underline">
                            electro@mart.com
                        </p>
                    </div>
                    <div className=" pb-5 lg:max-w-sm">
                        <ul className="flex mt-5 gap-x-5">
                            <li>
                                <Link to="#" className="text-white  hover:text-[#00796b]">
                                    <FaFacebookF className="text-xl" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-white hover:text-[#00796b]">
                                    <FaXTwitter className="text-xl" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-white hover:text-[#00796b]">
                                    <FaInstagram className="text-xl" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-white hover:text-[#00796b]">
                                    <FaTelegramPlane className="text-xl" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1">
                    <p className="font-semibold text-xl md:text-base tracking-wide text-gray-300">
                        Our Story
                    </p>
                    <ul className="mt-2 space-y-1 md:space-y-2 text-md xl:text-lg">
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Web
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                eCommerce
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Business
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Entertainment
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <p className="font-semibold text-xl md:text-base tracking-wide text-gray-300">
                        Category
                    </p>
                    <ul className="mt-2 space-y-1 md:space-y-2 text-md xl:text-lg">
                        <FooterCategoryList />
                    </ul>
                </div>
                <div className="col-span-1 ">
                    <p className="font-semibold text-xl md:text-base tracking-wide text-white">
                        Quick Links
                    </p>
                    <ul className="mt-2 space-y-1 text-base md:space-y-2  ">
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/storesPage" className="text-white  underline-hover">
                                Store
                            </Link>

                        </li>
                        <li>
                            <Link to="/promotion" className="text-white underline-hover">
                                Promotion
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Brochure
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <p className="font-semibold text-xl md:text-base tracking-wide text-gray-300">
                        Contact Us
                    </p>
                    <ul className="mt-2 space-y-1 md:space-y-2 text-md xl:text-lg">
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Infopreneur
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Personal
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Wiki
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Forum
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-1 text-white justify-between pt-5 pb-20 lg:pb-3 border-gray-600 border-t xl:flex-row  xl:mb-auto gap-y-2">
                <p className="text-[10px] lg:text-base">
                    © 2024 Electro Mart. Develope by Elector Team.
                </p>
                <div className="flex  flex-col md:flex-row md:items-center  space-x-4 sm:mt-0">
                    <p className="text-[10px] text-center lg:text-base">
                        We using safe payment for
                    </p>
                    <div>
                        <img src="https://res.cloudinary.com/duv5fiurz/image/upload/v1728717572/Payment_2_yu9afc.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
