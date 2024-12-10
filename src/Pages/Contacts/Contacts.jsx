import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiMessengerFill, RiTelegramFill } from "react-icons/ri";

const Contacts = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:mx-20">
        {/* Contact Form Section */}
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

        {/* Need Help Section */}
        <div className="flex justify-center lg:w-1/3 lg:mt-0 px-4">
          <div className="flex flex-col items-center  mt-6 lg:items-start w-full">
            <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
              Need Help?
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="w-6 h-6 text-blue-500 mr-3" />
                  <span className="text-gray-700">(208) 555-0112</span>
                </div>
                <div className="flex items-center">
                  <RiMessengerFill className="w-6 h-6 text-blue-500 mr-3" />
                  <span className="text-gray-700">Messenger</span>
                </div>
                <div className="flex items-center">
                  <RiTelegramFill className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-gray-700">Telegram</span>
                </div>
                <div className="flex items-center">
                  <MdEmail className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">Email: electro@mark.com</span>
                </div>
              </div>
              <h3 className="font-semibold mt-6 mb-3 text-gray-800">Subscribe to us</h3>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <RiTelegramFill className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
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
