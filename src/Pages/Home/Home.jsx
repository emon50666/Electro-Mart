
import Banner from "../../components/Banner/Banner";
import ProductCard from './../../components/ProductCard/ProductCard';




const Home = () => {
    return (
      <section>
        <div className=" flex justify-center bg-[#F6F6F6] min-h-[80vh]">
          <Banner ></Banner>
        </div>
        <ProductCard />

        
        </section>
    );
};

export default Home;