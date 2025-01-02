import { Helmet } from "react-helmet";
import HomeOffers from "./Shared/HomeOffers";
import Popular from "../../components/PopularCategory/Popular";
import BenifetService from "../../components/PopularCategory/BenifetService/BenifetService";
import HomeSliderComponent from "../../components/HomeSliderComponent/SliderComponent";
import Slider from "./Shared/Slider";
import FeaturedProduct from "./FeaturedProduct";
import MouseBanner from "../../components/MouseBanner/MouseBanner";
import NewHomeOffer from "./Shared/NewHomeOffer";

const Home = () => {
  return (
    <div className="bg-[#F6F6F6] pb-16">
      <Helmet>
        <title>Home | Electro Mart</title>
      </Helmet>
      <div>
        <Slider />
      </div>
      <BenifetService />
      <Popular />
      <HomeOffers />
      <HomeSliderComponent />
      <FeaturedProduct />
      <MouseBanner />
      <NewHomeOffer />
    </div>
  );
};
export default Home;
