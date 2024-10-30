import { Helmet } from "react-helmet";
import HomeOffers from "./Shared/HomeOffers";
import Popular from "../../components/PopularCategory/Popular";
import BenifetService from "../../components/PopularCategory/BenifetService/BenifetService";
import HomeSliderComponent from "../../components/HomeSliderComponent/SliderComponent";
<<<<<<< HEAD

import Slider from './Shared/Slider';


// // import Slider from "./Shared/Slider"
// import LaptopProduct from "./LaptopProduct";
// import Banner from "./Shared/Banner";




=======
// import FilterProduct from "../../components/FilterProduct/FilterProduct";
import Slider from "./Shared/Slider"
>>>>>>> 81e1375dc4674086cb2cf512aa07b365b2327667
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
      <div>
        <Slider />
>>>>>>> 81e1375dc4674086cb2cf512aa07b365b2327667
      </div>
      <BenifetService />
      <Popular />
      <HomeOffers />
<<<<<<< HEAD
      
      <HomeSliderComponent/>

    
      
=======
      {/* <FilterProduct /> */}
      <HomeSliderComponent />
>>>>>>> 81e1375dc4674086cb2cf512aa07b365b2327667
    </div>
  );
};
export default Home;