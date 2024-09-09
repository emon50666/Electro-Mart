import Feature from "../../Pages/Feature/Feature";
import ProductCard from "../ProductCard/ProductCard";


const Home = () => {
    return (
        <div className="bg-white">
          <div className=" flex justify-center bg-[#F6F6F6] min-h-[80vh]">
          <ProductCard/>
        </div>
        <Feature/>

        </div>
    );
};

export default Home;