import { GoChevronRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import img1 from "./google play button.png"
import img2 from "./images.png"
import img3 from "./debit card1.png"
import img4 from "./debit card2.png"
const Footer = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-3 lg:mx-20 my-10">
            <div>
            <div className=" font-semibold items-center flex">
                <h1 className="text-2xl">Broadway Stor</h1>
                <button className="p-1 ml-3 text-white rounded-full bg-orange-500">
                <GoChevronRight></GoChevronRight>
                </button>
            </div>
            <h1>1268 Broadway, San Francisco, CA 94109</h1>
            </div>

            <div>
            <div className=" font-semibold items-center flex">
                <h1 className="text-2xl">Broadway Stor</h1>
                <button className="p-1 ml-3 text-white rounded-full bg-orange-500">
                <GoChevronRight></GoChevronRight>
                </button>
            </div>
            <h1>1268 Broadway, San Francisco, CA 94109</h1>
            </div>

            <div>
            <div className=" font-semibold items-center flex">
                <h1 className="text-2xl">Broadway Stor</h1>
                <button className="p-1 ml-3 text-white rounded-full bg-orange-500">
                <GoChevronRight></GoChevronRight>
                </button>
            </div>
            <h1>1268 Broadway, San Francisco, CA 94109</h1>
            </div>

            <div>
            <div className=" font-semibold items-center flex">
                <h1 className="text-2xl">Broadway Stor</h1>
                <button className="p-1 ml-3 text-white rounded-full bg-orange-500">
                <GoChevronRight></GoChevronRight>
                </button>
            </div>
            <h1>1268 Broadway, San Francisco, CA 94109</h1>
            </div>
      </div>
      {/* ---------------------------------------------- */}

        <hr />
        <footer className="footer text-[17px] text-base-content mx-3 lg:px-20 py-10">
  <aside>
    <h1 className="text-3xl font-semibold">Electro Mart</h1>
    <p>
    Condimentum adipiscing vel neque dis nam <br /> parturient orci at scelerisque.
    </p>
    <div className="">
        <h1 className="text-2xl font-semibold">Subscribe us</h1>
        <div className="mt-2 space-x-3">
        <button className="text-[19px] p-2 rounded-full bg-blue-800 text-white"><FaFacebookF/></button>
        <button className="text-[19px] p-2 rounded-full bg-black text-white"><FaXTwitter/></button>
        <button className="text-[19px] p-2 rounded-full bg-blue-600 text-white"><FaLinkedinIn/></button>
        <button className="text-[19px] p-2 rounded-full bg-blue-500 text-white"><FaTelegramPlane/></button>

        </div>
    </div>
  </aside>
  <nav>
    <h6 className="text-2xl font-semibold">Categories</h6>
    <a className="link link-hover">Smartphones</a>
    <a className="link link-hover">Laptops</a>
    <a className="link link-hover">Hardware</a>
    <a className="link link-hover">Cameras</a>
    <a className="link link-hover">Headphones</a>
    <a className="link link-hover">Bathroom</a>
  </nav>
  <nav>
    <h6 className="text-2xl font-semibold">Useful Links</h6>
    <a className="link link-hover">Promotions</a>
    <a className="link link-hover">Stores</a>
    <a className="link link-hover">Our contacts</a>
    <a className="link link-hover">Delivery & Return</a>
    <a className="link link-hover">Outlet</a>
  </nav>
  <nav>
    <h6 className="text-2xl font-semibold">Useful Links</h6>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Our contacts</a>
    <a className="link link-hover">Promotions</a>
    <a className="link link-hover">Stores</a>
    <a className="link link-hover">Delivery & Return</a>
  </nav>
  <nav>
    <h6 className="text-2xl font-semibold">Download App on Mobile:</h6>
    <h1>15% discount on your first purchase    </h1>
    <div className="flex">
    <img src={img1} className="h-40" alt="" />
    <img src={img2} className="h-40" alt="" />

    </div>
  </nav>
</footer>
{/* ------------------------------------------------------------------------------------------------- */}
    <hr />

    <div className="p-10 flex lg:flex-row flex-col items-center justify-between">
        <div className="text-center mb-2">
        <h1 className="text-[12px]">ELECTRO MART © 2024 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</h1>
        </div>
        <div className="flex">
            <img src={img3} className="h-10" />
            <img src={img3} className="h-10" />
            <img src={img3} className="h-10" />
            <img src={img3} className="h-10" />
        </div>
    </div>


    </div>
  );
};

export default Footer;
