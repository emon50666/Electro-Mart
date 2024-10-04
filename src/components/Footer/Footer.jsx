import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import img1 from "./google play button.png";
import img2 from "./images.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="footer grid gap-8 text-base-content p-6 md:p-12 lg:px-20 lg:py-10 text-[16px] md:text-[18px] lg:text-[17px]">
        <aside className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold">Electro Mart</h1>
          <p className="text-sm md:text-base">
            Condimentum adipiscing vel neque dis nam <br /> parturient orci at scelerisque.
          </p>
          <div>
            <h2 className="text-lg md:text-2xl font-semibold">Subscribe us</h2>
            <div className="mt-2 flex space-x-3">
              <button className="text-lg md:text-xl p-2 rounded-full bg-blue-800 text-white">
                <FaFacebookF />
              </button>
              <button className="text-lg md:text-xl p-2 rounded-full bg-black text-white">
                <FaXTwitter />
              </button>
              <button className="text-lg md:text-xl p-2 rounded-full bg-blue-600 text-white">
                <FaLinkedinIn />
              </button>
              <button className="text-lg md:text-xl p-2 rounded-full bg-blue-500 text-white">
                <FaTelegramPlane />
              </button>
            </div>
          </div>
        </aside>

        <nav>
          <h6 className="text-xl md:text-2xl font-semibold">Categories</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">Smartphones</a></li>
            <li><a className="link link-hover">Laptops</a></li>
            <li><a className="link link-hover">Hardware</a></li>
            <li><a className="link link-hover">Cameras</a></li>
            <li><a className="link link-hover">Headphones</a></li>
            <li><a className="link link-hover">Bathroom</a></li>
          </ul>
        </nav>

        <nav>
          <h6 className="text-xl md:text-2xl font-semibold">Useful Links</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">Promotions</a></li>
            <li><Link to="/storPage" className="link link-hover">Stores</Link></li>
            <li><a className="link link-hover">Our contacts</a></li>
            <li><a className="link link-hover">Delivery & Return</a></li>
            <li><a className="link link-hover">Outlet</a></li>
          </ul>
        </nav>

        <nav>
          <h6 className="text-xl md:text-2xl font-semibold">Useful Links</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">Blog</a></li>
            <li><a className="link link-hover">Our contacts</a></li>
            <li><a className="link link-hover">Promotions</a></li>
            <li><a className="link link-hover">Stores</a></li>
            <li><a className="link link-hover">Delivery & Return</a></li>
          </ul>
        </nav>

        <nav className="space-y-2">
          <h6 className="text-xl md:text-2xl font-semibold">Download App on Mobile:</h6>
          <p className="text-sm md:text-base">15% discount on your first purchase</p>
          <div className="flex space-x-3">
            <img src={img1} className="h-28 md:h-36" alt="Google Play Button" />
            <img src={img2} className="h-28 md:h-36" alt="App Store Button" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
