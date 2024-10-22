import { Helmet } from "react-helmet";

import HomeOffers from "./Shared/HomeOffers";
import Popular from "../../components/PopularCategory/Popular";
import BenifetService from "../../components/PopularCategory/BenifetService/BenifetService";
import HomeSliderComponent from "../../components/HomeSliderComponent/SliderComponent";
import FilterProduct from "../../components/FilterProduct/FilterProduct";




const Home = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <Helmet>
        <title>Home | Elector Mart</title>
      </Helmet>
      <div className=" flex justify-center min-h-[80vh]">
        {/* <Banner ></Banner> */}
      </div>
      <BenifetService/>
       <Popular/>
      <HomeOffers />
      <FilterProduct/>
      <HomeSliderComponent/>

    
      
    </div>
  );
};

export default Home;