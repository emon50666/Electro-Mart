import Marquee from "react-fast-marquee";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      image: "path/to/member1.jpg",
      description:
        "A true friend and brother, working together to achieve our common goals.",
    },
    {
      name: "Jane Smith",
      image: "path/to/member2.jpg",
      description:
        "A true friend and brother, working together to achieve our common goals.",
    },
    {
      name: "Michael Brown",
      image: "path/to/member3.jpg",
      description:
        "A true friend and brother, working together to achieve our common goals.",
    },
    {
      name: "Emily Clark",
      image: "path/to/member4.jpg",
      description:
        "A true friend and brother, working together to achieve our common goals.",
    },
  ];
  return (
    <div className="bg-gray-100 py-16 ">
      <h1 className="text-5xl text-center font-bold text-blue-700 pb-14">
        About Us
      </h1>
      {/* About Section */}
      <section data-aos="fade-up" className=" flex  mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center p-6 space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Image Section */}
          <div
            className="lg:w-1/2 w-full flex justify-center"
            data-aos="fade-left"
          >
            <img
              src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730137730/r4fvkmgrhedjerxwyzgo.jpg"
              alt="Our Vision"
              className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 w-full max-w-lg" // Ensures responsive image size
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 w-full  lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-semibold text-blue-600">
              What We Do
            </h1>
            <p className="mt-4 text-base lg:text-lg mb-6 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              At <strong>Electro Mart</strong>, we’re passionate about
              delivering the best in cutting-edge electronics and gadgets. Our
              e-commerce platform provides a seamless shopping experience,
              offering a wide range of products from the latest smartphones and
              laptops to home appliances and accessories. <br /> <br />
              We carefully curate high-quality, innovative technology that
              caters to every need—whether youre a tech enthusiast, a
              professional, or simply looking to upgrade your devices. Our
              mission is to bring the future of electronics to your doorstep,
              with competitive prices, detailed product information, and
              exceptional customer service. With a focus on customer
              satisfaction, we aim to make shopping for electronics simple,
              secure, and enjoyable. Explore the future with Electro Mart—where
              technology meets convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 py-16 bg-white">
        {/* Text Section */}
        <div
          className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:pr-12"
          data-aos="fade-right" // AOS animation for text
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-700">Our Vision</h2>
          <p className="text-lg text-gray-600 mb-6">
            At <strong>Electro Mart</strong>, we envision a world where
            technology is not just a luxury but an essential tool accessible to
            everyone. Our goal is to bridge the gap between technological
            advancements and the everyday consumer by making cutting-edge
            electronics affordable and within reach.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We are also committed to sustainability, ensuring that our products
            are sourced ethically and produced with minimal environmental
            impact. Our mission is to foster community engagement by partnering
            with local organizations and investing in eco-friendly initiatives
            to make a positive impact on the planet.
          </p>
          <p className="text-lg text-gray-600">
            By focusing on innovation, affordability, and sustainability, we aim
            to build a future where technology empowers and improves lives
            globally, creating a more connected and sustainable world.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="lg:w-1/2 w-full flex justify-center"
          data-aos="fade-left"
        >
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1730137730/xynuwmkuilo6om7c0ykk.jpg"
            alt="Our Vision"
            className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105" // Hover effect and animation
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section
        data-aos="fade-up"
        className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto lg:mt-10"
      >
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-4">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Wide Product Range
            </h3>
            <p className="mt-2 text-gray-600">
              We offer everything from smartphones to smart home devices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Competitive Pricing
            </h3>
            <p className="mt-2 text-gray-600">
              Find the best deals on high-quality electronics.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Fast Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              Your order will reach you quickly and reliably.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Secure Shopping
            </h3>
            <p className="mt-2 text-gray-600">
              We prioritize your privacy and transaction security.
            </p>
          </div>
        </div>
      </section>

      {/* all brand logo section */}

      <div className="mt-10 bg-white text-4xl font-semibold py-3">
        <h1 className="text-center lg:text-3xl md:text-3xl text-2xl text-blue-700">
          Prepare Brand Logos
        </h1>
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

      {/* Team Section (With Images) */}
      <section className="team-section py-12 mx-5 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member text-center bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
