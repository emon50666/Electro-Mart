import StoresPage from "../../Pages/StoresPage/StoresPage";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
      <section>
        <div className=" flex justify-center bg-[#F6F6F6] min-h-[80vh]">
          <Banner ></Banner>
          
         
         
        </div>
        <StoresPage></StoresPage>
        
        </section>
    );
};

export default Home;