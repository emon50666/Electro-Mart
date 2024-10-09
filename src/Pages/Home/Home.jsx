import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import HomeOffers from "./Shared/HomeOffers";




const Home = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <Helmet>
        <title>Home | Elector Mart</title>
      </Helmet>
      <div className=" flex justify-center min-h-[80vh]">
        <Banner ></Banner>
      </div>
      <HomeOffers />

      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Home;