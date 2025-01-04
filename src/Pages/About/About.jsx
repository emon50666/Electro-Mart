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
    <div className="bg-gray-100 pb-32 ">
      <h1 className="text-5xl  font-bold text-blue-700 ">
        About Us
      </h1>


      {/* all brand logo section */}

      <div className="mt-10 mb-10 bg-white text-4xl font-semibold py-3">

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



      {/* mobile device show */}

      {/* Image 1 (Top) */}
      
 
 

    </div>
  );
};

export default About;
