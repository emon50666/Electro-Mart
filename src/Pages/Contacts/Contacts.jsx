import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiMessengerFill, RiTelegramFill } from "react-icons/ri";

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
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and times will vary depending on your location.",
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
      <div className="flex flex-col lg:flex-row lg:mx-20">
        <div className="mx-auto p-6 w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            The online store of equipment and electronics is one of the leading
            online stores.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-center lg:w-1/3 mt-6 lg:mt-0">
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730214440/p9dkgcqidtlhsgzayyle.png"
            className="h-auto max-w-full"
            alt=""
          />
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      <div className="flex flex-wrap items-start lg:mx-20 md:mx-10 mx-2 lg:-mb-56 lg:mt-10">
        <div className="min-h-screen flex flex-col w-full lg:w-2/3 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-8">
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

        <div className="w-full lg:w-1/3 px-4">
          <h2 className="text-3xl font-bold mb-4 lg:ml-9 md:ml-44">
            Need Help?
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 text-blue-500 mr-3" />
                <span>(208) 555-0112</span>
              </div>
              <div className="flex items-center">
                <RiMessengerFill className="w-6 h-6 text-blue-500 mr-3" />
                <span>Messenger</span>
              </div>
              <div className="flex items-center">
                <RiTelegramFill className="w-6 h-6 text-blue-400 mr-3" />
                <span>Telegram</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="w-6 h-6 text-orange-500 mr-3" />
                <span>Email: electro@mark.com</span>
              </div>
            </div>
            <h3 className="font-semibold mb-3">Subscribe us</h3>
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
      <div className="rounded-2xl px-2 mx-auto h-auto xl:h-full my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d193770.2816154169!2d-74.20528155573243!3d40.63736520687854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Main%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sbd!4v1727703543940!5m2!1sen!2sbd"
          className="w-full h-[450px] outline-none border-none rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
