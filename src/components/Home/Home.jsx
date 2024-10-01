import Banner from "../Banner/Banner";
import HomeFeature from "./Shared/HomeFeature";



const Home = () => {
    return (
      <section>
        <div className=" flex justify-center bg-[#F6F6F6] min-h-[80vh]">
          <Banner ></Banner>
         
         
        </div>
        <HomeFeature></HomeFeature>
        
        </section>
    );
};

export default Home;