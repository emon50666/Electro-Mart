import Banner from "../Banner/Banner";
import RelativeProducts from "../ProductCard/RelativeProducts";



const Home = () => {
    return (
      <section>
        <div className=" flex justify-center bg-[#F6F6F6] min-h-[80vh]">
          <Banner ></Banner>
         
         
        </div>
        <RelativeProducts></RelativeProducts>

        
        </section>
    );
};

export default Home;