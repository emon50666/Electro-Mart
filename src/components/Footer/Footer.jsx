import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import FooterCategoryList from "./Shared/FooterCategoryList";

const Footer = () => {
    return (
        <div className="px-4 pt-16 md:px-24 lg:px-8 bg-[#222222] text-white font_inter">
            <div className="grid gap-16 row-gap-10 mb-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                <div className="md:max-w-md col-span-1 md:col-span-2">
                    <h2 className="font-bold text-3xl lg:text-5xl">Elector <span className="text-orange-500">Mart</span></h2>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-lg text-[#B3B3B3]">
                            Call us 24/7
                        </p>
                        <p className="font-semibold text-2xl lg:text-3xl text-white">
                            +880 15 xxxx xxxx
                        </p>
                    </div>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-lg text-white">
                            36/2 M.M Ali Road, Chattogram, Bangladesh
                        </p>
                        <p className="text-lg text-white underline">
                            electro@mart.com
                        </p>
                    </div>
                    <div className="mt-6 lg:max-w-sm">
                        <ul className="flex mt-5 gap-x-5">
                            <li>
                                <Link to="#" className="text-white hover:text-[#00796b]">
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
                    <p className="font-semibold text-xl tracking-wide text-[#818181]">
                        Our Story
                    </p>
                    <ul className="mt-2 space-y-1 md:space-y-2 text-lg">
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
                    <p className="font-semibold text-xl tracking-wide text-[#818181]">
                        Category
                    </p>
                    <ul className="mt-2 space-y-1 md:space-y-2 text-lg">
                        <FooterCategoryList />
                    </ul>
                </div>
                <div className="col-span-1">
                    <p className="font-semibold text-xl tracking-wide text-[#818181]">
                        Quick Links
                    </p>
                    <ul className="mt-2 space-y-1 md:space-y-2 text-lg">
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Brochure
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Nonprofit
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white underline-hover">
                                Educational
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
                    <p className="font-semibold text-xl tracking-wide text-[#818181]">
                        Contact Us
                    </p>
                    <ul className="mt-2 space-y-1 md:space-y-2 text-lg">
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
            <div className="flex flex-col justify-between pt-5 pb-10 border-t xl:flex-row mb-7 xl:mb-auto gap-y-2">
                <p className="text-lg">
                    Copyright © 2024 Electro Mart. Created by Elector Team
                </p>
                <div className="flex flex-col md:flex-row md:items-center mt-4 space-x-4 sm:mt-0">
                    <p className="text-lg">
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
