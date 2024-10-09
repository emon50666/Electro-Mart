import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-20 py-0 md:py-10 mb-20 lg:mb-4">
                <aside className="">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Electro Mart</h1>
                    <p className="text-sm sm:text-base lg:text-lg">
                        Condimentum adipiscing vel neque dis nam <br /> parturient orci at scelerisque.
                    </p>
                    <div>
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Subscribe us</h1>
                        <div className="mt-2 space-x-3 ">
                            <button className="text-[16px] sm:text-[19px] p-2 rounded-full bg-blue-800 text-white"><FaFacebookF /></button>
                            <button className="text-[16px] sm:text-[19px] p-2 rounded-full bg-black text-white"><FaXTwitter /></button>
                            <button className="text-[16px] sm:text-[19px] p-2 rounded-full bg-blue-600 text-white"><FaLinkedinIn /></button>
                            <button className="text-[16px] sm:text-[19px] p-2 rounded-full bg-blue-500 text-white"><FaTelegramPlane /></button>
                        </div>
                    </div>
                </aside>

                <nav className="space-y-2">
                    <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">Categories</h6>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Smartphones</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Laptops</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Hardware</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Cameras</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Headphones</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Bathroom</a>
                </nav>

                <nav className="space-y-2">
                    <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">Useful Links</h6>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Promotions</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Stores</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Our contacts</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Delivery & Return</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Outlet</a>
                </nav>

                <nav className="space-y-2">
                    <h6 className="text-lg sm:text-xl lg:text-2xl font-semibold">Useful Links</h6>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Blog</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Our contacts</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Promotions</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Stores</a>
                    <a className="link link-hover text-sm sm:text-base lg:text-lg">Delivery & Return</a>
                </nav>

                <nav className="space-y-2">
                    <h6 className="text-lg font-semibold">Download App on Mobile:</h6>
                    <h1 className="text-sm sm:text-base lg:text-lg">15% discount on your first purchase</h1>
                    <div className="flex space-x-2 md:space-x-0 md:flex-col md:items-start">
                        <img
                            src={`https://res.cloudinary.com/duv5fiurz/image/upload/v1728326107/google_play_button_wgbqub_kfnlf6.png`}
                            className="w-24 lg:w-32"
                            alt="Google Play"
                        />
                        <img
                            src={`https://res.cloudinary.com/duv5fiurz/image/upload/v1728326107/images_gadmv1_utqpyp.png`}
                            className="w-24 lg:w-32"
                            alt="App Store"
                        />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
