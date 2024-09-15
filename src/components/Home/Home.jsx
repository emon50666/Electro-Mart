import ProductCard from "../ProductCard/ProductCard";
import ProductReview from "../ProductReview/ProductReview";


const Home = () => {
    return (
        <div className="   min-h-[80vh]">
          <ProductCard/>
          <ProductReview/>
        </div>
    );
};

export default Home;