import Marquee from "react-fast-marquee";


const About = () => {
  const teamMembers = [
    {
      name: "MD Emon Talukdar",
      title: "Full Stack Developer",
      bio:"Team-Leader",
      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1735997749/emon_rhj883.png",
    },
    {
      name: "MD Ridwanul Islam",
      title: "Full Stack Developer",
      bio:" Team-Leader",
      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1736002287/467748360_950999440461908_6032397009052311263_n_upgxkp.jpg",
    },
    {
      name: "Mohammed Rasif",
      title: "Front-end Developer",
      bio: "contributor",
      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1736002363/471898051_1797182027697229_1934842080457666092_n_msnvgy.jpg",
    },
    {
      name: "Kazi Ahammad Ullah",
      title: "Back-end Developer",
      bio: "contributor",
      image: "https://res.cloudinary.com/dpsgtszzi/image/upload/v1736002970/images_kcr5fs.png",
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
    
      <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
        Meet Our Team
      </h2>
      <div className="container mx-auto grid gap-8  sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 pt-16  rounded-t-full rounded-r-3xl  shadow-sm overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover bg-gray-100"
              />
              <div className="absolute inset-0 bg-black   bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <p className="text-white text-xl font-bold">{member.name}</p>
                  <p className="text-white text-sm">{member.title}</p>
                 
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <p className="text-gray-800 font-bold">{member.name}</p>
              <p className="font-semibold text-blue-500"> {member.bio} </p>
              <p className="text-gray-600">{member.title}</p>

            </div>
          </div>
        ))}
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
