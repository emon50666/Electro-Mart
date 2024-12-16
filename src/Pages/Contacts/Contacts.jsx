import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,

  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {  RiTelegramFill } from "react-icons/ri";

const Contacts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "Can I add multiple products to my cart?",
      answer:
        "Yes, you can add as many products as you like to your cart, and they will all be stored until you're ready to check out.",
    },
   
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you a tracking number via email, so you can track your package in real-time.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on most products. Make sure the product is in its original condition, and we’ll refund your purchase.",
    },
    {
      question: "Can I edit my account details?",
      answer:
        "Yes, you can update your account information by going to your account settings after logging in.",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="mx-auto p-6 w-full lg:px-20">
          <h1 className="text-2xl xl:text-2xl 2xl:text-2xl font-semibold mb-2">Get In Touch</h1>
          <form className="space-y-4 ">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className=" items-center  lg:mt-10">
        <div className="bg-white px-6 py-6 rounded-lg shadow-md  ">
        <h2 className="text-2xl xl:text-2xl 2xl:text-2xl font-semibold mb-4  ">
            Need Help?
          </h2>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 text-blue-500 mr-3" />
                <span>(+88) 0178-6397249</span>
              </div>
              <div className="flex items-center">
                <FaLocationDot className="w-6 h-6 text-blue-500 mr-3" />
                <span>Dhaka, Bangladesh</span>
              </div>
             
              <div className="flex items-center">
                <MdEmail className="w-6 h-6 text-orange-500 mr-3" />
                <span> electro@gmail.com</span>
              </div>
            </div>
            <h3 className="font-semibold mb-3">Subscribe us:</h3>
            <div className="flex items-center  space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-6 h-6 text-blue-600 hover:text-blue-800" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-7 h-7 text-pink-600 hover:text-pink-800" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTelegramFill className="w-8 h-8 text-blue-400 hover:text-blue-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-7 h-7 text-blue-400 hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-6 h-8 text-blue-700 hover:text-blue-900" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      <div className="grid grid-cols-1 gap-6 mb-5 lg:grid-cols-2 items-center mt-8 lg:mt-20 px-4 lg:px-20">
        <div className="">
          <h2 className="text-2xl font-semibold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="w-full">
            {faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-white shadow-md rounded-lg p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">
                      {item.question}
                    </span>
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="bg-gray-50 border-l-4 border-blue-500 p-4 mt-2 rounded-lg">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className=" ">
        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.499951088!2d90.25452512197852!3d23.781066877945634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1734190324310!5m2!1sen!2sbd"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

       
        </div>
      </div>
    
    </div>
  );
};

export default Contacts;
