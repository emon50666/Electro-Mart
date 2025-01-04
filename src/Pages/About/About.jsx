import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "MD Emon Talukdar Team Leader",
      title: "Full Stack Developer ",

      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1735997749/emon_rhj883.png", // Replace with actual image URL
    },
    {
      name: "MD Ridwanul Islam       Team Leader",
      title: "Full Stack Developer ",
      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1736002287/467748360_950999440461908_6032397009052311263_n_upgxkp.jpg", // Replace with actual image URL

    },
    {
      name: "Mohammed Rasif",
      title: "Front-end Developer ",
      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1736002363/471898051_1797182027697229_1934842080457666092_n_msnvgy.jpg", // Replace with actual image URL

    },
    {
      name: "Kazi Ahammad Ullah",
      title: "Back-end Developer ",
      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1736002970/images_kcr5fs.png", // Replace with actual image URL

    },
  ];





  return (
    <div className="bg-gray-100 pb-10 pt-4">
    

      <section className="bg-gray-100 py-10 px-6 ">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Side - About Us */}
        <div className="bg-white border-l  border-4 border-[#4F46E5] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-indigo-600">Electro Mart</span>, your ultimate destination for the latest and greatest in electronics! We are a premier e-commerce platform dedicated to bringing cutting-edge technology and electronic products to your doorstep. Whether you’re looking for high-performance gadgets, home appliances, or the newest tech innovations, we offer a wide range of products designed to enhance your lifestyle.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At Electro Mart, we are passionate about providing our customers with a seamless shopping experience. Our carefully curated selection includes top-rated brands, the best deals, and the most popular electronic products on the market. From smartphones, laptops, and gaming consoles to kitchen appliances and smart home devices, we have something for everyone.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our commitment to quality and customer satisfaction is at the heart of everything we do. With a secure online shopping experience, fast shipping, and dedicated customer support, we make sure you get the products you love with the convenience you deserve.
          </p>
        </div>

        {/* Right Side - Vision & Mission */}
        <div className="bg-indigo-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>

          {/* Vision */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              At Electro Mart, our vision is to become the leading online retailer of electronics, providing customers with an unparalleled shopping experience through innovation, convenience, and quality products. We strive to connect people with the best technology and gadgets that elevate their lives.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission is to provide customers with a wide selection of the latest and most reliable electronic products at competitive prices. We aim to offer exceptional customer service, ensuring that each shopping experience is smooth and enjoyable. Through our commitment to excellence, we aim to create long-lasting relationships with our customers and become their go-to destination for all things electronics.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Team Section (With Images) */}
      <div className="bg-gray-100 mb-16 ">
        <h2 className="text-center hidden sm:block mb-44 text-3xl font-bold text-gray-800 ">
          Meet Our Team
        </h2>
        <div className="relative  hidden sm:block md:px-4 lg:flex items-center justify-center min-h-screen bg-gray-100">
          {/* Diamond Container */}
          <div className="relative justify-center mx-auto  md:w-7/12 md:h-[400px] lg:w-8/12 lg:h-[510px] ">
            {/* Image 1 (Top) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link to={'https://md-emon.vercel.app/'} className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                <div className="flex-col lg:flex lg:flex-col items-center">
                  <div className="relative w-56 h-56 mx-auto transform rotate-45 overflow-hidden bg-white shadow-md">
                    {/* Image */}


                    <img
                      src={teamMembers[0].image}
                      alt={teamMembers[0].name}
                      className="w-full h-full bg-gray-300 bg-opacity-80 transform object-cover -rotate-45 transition-all duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex  text-start flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xl font-bold -rotate-45">
                        {teamMembers[0].name}
                      </p>


                      <p className="text-white  text-md mt-4 -rotate-45">
                        {teamMembers[0].title}
                      </p>

                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Image 2 (Right) */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                <div className=" flex-col lg:flex lg:flex-col items-center">
                  <div className="relative w-56 h-56 mx-auto transform rotate-45 overflow-hidden bg-white shadow-md">
                    {/* Image */}
                    <img
                      src={teamMembers[3].image}
                      alt={teamMembers[3].name}
                      className="w-full h-full bg-gray-300 bg-opacity-80 transform object-cover -rotate-45 transition-all duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex  flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-bold -rotate-45">
                        {teamMembers[3].name}
                      </p>
                      <p className="text-white text-sm -rotate-45">
                        {teamMembers[3].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image 3 (Bottom) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                <div className="flex-col lg:flex lg:flex-col items-center">
                  <div className="relative w-56 h-56 mx-auto transform rotate-45 overflow-hidden bg-white shadow-md">
                    {/* Image */}
                    <img
                      src={teamMembers[2].image}
                      alt={teamMembers[2].name}
                      className="w-full h-full bg-gray-300 bg-opacity-80 transform object-cover -rotate-45 transition-all duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex  flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-bold -rotate-45">
                        {teamMembers[2].name}
                      </p>
                      <p className="text-white text-sm -rotate-45">
                        {teamMembers[2].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image 4 (Left) */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="flex-col lg:flex lg:flex-col items-center">
                <div className="relative w-56 h-56 mx-auto transform rotate-45 overflow-hidden bg-white shadow-md">
                  {/* Image */}
                  <img
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    className="w-full h-full bg-gray-300 bg-opacity-80 transform object-cover -rotate-45 transition-all duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex  text-start flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-bold -rotate-45">
                      {teamMembers[1].name}
                    </p>
                    <p className="text-white  text-md mt-4 -rotate-45">
                      {teamMembers[1].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>


      {/* all brand logo section */}

      <div className="mt-44  bg-white text-4xl font-semibold py-3">

        <Marquee pauseOnHover speed={50} gradient={false}>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180601/znxp9yobjqu0rxmxqwpm.png"
                className="h-10"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180600/rqonzvztv45fhdufrnff.png"
                className="h-12"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180600/trakr75zy7clyubpffxs.png"
                className="h-11"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180600/deexfnlvbarne9wdgwex.png"
                className="h-9"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180600/gx3s4sxpquwhxsbrfmvl.png"
                className="h-10"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180600/vhpmwjr59ljhcfwivyix.png"
                className="h-20"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180600/qppraopfkwuotquszqrp.png"
                className="h-12"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180599/d0d2crlrfj98f6qe1fwb.png"
                className="h-11"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180599/cchhqsppvpmcz4jmyoet.png"
                className="h-16"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180599/qlnvltrvplemspnr4gae.png"
                className="h-7"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180599/sexwjpglzbhfxpcx1rc6.png"
                className="h-12"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730180599/skfcatgbv5bgtcw3vd7z.png"
                className="h-10"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730181208/bf6ymdvhzc00n5zxphga.png"
                className="h-10"
                alt=""
              />
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730181208/addlpj0ivoa1yyjqlul7.png"
                className="h-16 pr-3"
                alt=""
              />
            </span>
          </div>
        </Marquee>
      </div>





    </div>
  );
};

export default About;
