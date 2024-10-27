import { Helmet } from "react-helmet";

import HomeOffers from "./Shared/HomeOffers";
import Popular from "../../components/PopularCategory/Popular";
import BenifetService from "../../components/PopularCategory/BenifetService/BenifetService";
import HomeSliderComponent from "../../components/HomeSliderComponent/SliderComponent";

<<<<<<< HEAD
import Slider from './Shared/Slider';
=======
import FilterProduct from "../../components/FilterProduct/FilterProduct";
>>>>>>> d298577b8ec72c96c38adffc4328141a2564343b


// import Slider from "./Shared/Slider"
import LaptopProduct from "./LaptopProduct";
import Banner from "./Shared/Banner";




const Home = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <Helmet>
        <title>Home | Electro Mart</title>
      </Helmet>
<<<<<<< HEAD
      <div >
        <Slider/>
=======

      <div className=" flex justify-center min-h-[80vh]">
        {/* <Banner ></Banner> */}

      <div>
        {/* <Slider /> */}
        <Banner/>

>>>>>>> d298577b8ec72c96c38adffc4328141a2564343b
      </div>
      <BenifetService/>
       <Popular/>
      <HomeOffers />
      
      <HomeSliderComponent/>

    
      
    </div>
  );
};

export default Home;