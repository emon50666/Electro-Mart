
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

 import paymentimage from '../../assets/images/pay.png'

const Footer = () => {
    return (
        <div>
        <footer className="bg-[#0b0e37] font-sans tracking-wide relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-8 py-14 px-12 relative z-20">
      <div>
          <h2 className="text-lg text-gray-300 font-semibold mb-6 underline-offset-8 underline decoration-orange-500">Products</h2>
          <ul className="space-y-5">
            <li><a href="javascript:void(0)" className="text-gray-300 hover:underline hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Featured</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0 ">
              <path d="M9 18l6-6-6-6" />
            </svg>New Arrivals</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Sale</a></li>
          </ul>
        </div>
        <div>
        <h2 className="text-lg text-gray-300 font-semibold mb-6 underline-offset-8 underline decoration-orange-500">Products</h2>
          <ul className="space-y-5">
            <li><a href="javascript:void(0)" className="text-gray-300 hover:underline hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Featured</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0 ">
              <path d="M9 18l6-6-6-6" />
            </svg>New Arrivals</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Sale</a></li>
          </ul>
        </div>
        <div>
        <h2 className="text-lg text-gray-300 font-semibold mb-6 underline-offset-8 underline decoration-orange-500">Products</h2>
          <ul className="space-y-5">
            <li><a href="javascript:void(0)" className="text-gray-300 hover:underline hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Featured</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0 ">
              <path d="M9 18l6-6-6-6" />
            </svg>New Arrivals</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Sale</a></li>
          </ul>
        </div>
        <div>
        <h2 className="text-lg text-gray-300 font-semibold mb-6 underline-offset-8 underline decoration-orange-500">Products</h2>
          <ul className="space-y-5">
            <li><a href="javascript:void(0)" className="text-gray-300 hover:underline hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Featured</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             className="inline mr-1.5 h-4 w-4 shrink-0 ">
              <path d="M9 18l6-6-6-6" />
            </svg>New Arrivals</a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:translate-x-1   hover:text-orange-500 text-base flex items-center transition-all"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              className="inline mr-1.5 h-4 w-4 shrink-0">
              <path d="M9 18l6-6-6-6" />
            </svg>Sale</a></li>
          </ul>
        </div>

       

      </div>

      <hr className="border-gray-600" />

      <div className="my-8 px-12 grid md:grid-cols-3 flex-wrap sm:justify-between gap-6 relative z-20">
        <div className="flex space-x-5">
          <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-base transition-all">
            <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                  .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"></path>
            </svg>
          </a>
          <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-base transition-all">
            <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                      0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z">
              </path>
            </svg>
          </a>
          <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-base transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-400 hover:fill-white w-5 h-5"
              viewBox="0 0 24 24">
              <path
                d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                ></path>
            </svg>
          </a>
        </div>

        <p className='text-gray-300 text-sm'>© Electro-Mart. All rights reserved.
        </p>
       <img src={paymentimage} alt="" className=' w-96' />
      </div>

      <img src="https://readymadeui.com/bg-image.webp" className="absolute w-full inset-0 object-cover opacity-5 -z-0" />
    </footer>


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
