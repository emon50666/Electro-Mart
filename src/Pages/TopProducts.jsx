
import useTopProduct from './../Hooks/useTopProducts';


const TopProducts = () => {
    const { getTopSellingProducts } = useTopProduct();
    const topProducts = getTopSellingProducts(105); // Get top 5 selling products
console.log(topProducts);
    return (
        <div>
            <h2>Top Selling Products{topProducts.length} </h2>
            <ul>
                {topProducts.map((product) => (
                    <li key={product._id}>
                        <h3>{product.title}</h3>
                        <p>Sold: {product.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopProducts;
