import Banner from "../Banner/Banner";
import HomeFeatuer from "./Shared/HomeFeatuer";



const Home = () => {
    return (
      <section>
        <div className=" flex justify-center bg-[#F6F6F6] min-h-[80vh]">
          <Banner ></Banner>
         
         
        </div>
        <HomeFeatuer></HomeFeatuer>
        
        </section>
    );
};

export default Home;