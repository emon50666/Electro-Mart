import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import HomeOffers from "./Shared/HomeOffers";
import Popular from "../../components/PopularCategory/Popular";
import BenifetService from "../../components/PopularCategory/BenifetService/BenifetService";
import HomeSliderComponent from "../../components/HomeSliderComponent/SliderComponent";




const Home = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <Helmet>
        <title>Home | Elector Mart</title>
      </Helmet>
      <div className=" flex justify-center min-h-[80vh]">
        <Banner ></Banner>
      </div>
      <BenifetService/>
       <Popular/>
      <HomeOffers />
      <HomeSliderComponent/>

   
    
      
    </div>
  );
};

export default Home;