import useTopProducts from "../Hooks/useTopProducts";

const TopProducts = () => {
    const {topSellingProducts} = useTopProducts();
    console.log(topSellingProducts);
    return (
        <div>
            this is a top products list
        </div>
    );
};

export default TopProducts;