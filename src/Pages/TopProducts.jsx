import  { useEffect, useState } from 'react';
import useProduct from '../Hooks/useProduct';
import useOrder from '../Hooks/useOrder';

function TopProducts() {
    const { products, isLoading: productsLoading } = useProduct();
    const { payments, isLoading: ordersLoading } = useOrder();
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    // console.log(products);

    useEffect(() => {
        // Ensure both products and payments are arrays before proceeding
        if (!productsLoading && !ordersLoading && Array.isArray(products) && Array.isArray(payments)) {
            const productSales = {};

            // Aggregate quantities for each product ID
            payments.forEach(order => {
                // Ensure each order has a products array
                if (Array.isArray(order.products)) {
                    order.products.forEach(({ _id, quantity }) => {
                        if (productSales[_id]) {
                            productSales[_id] += quantity;
                        } else {
                            productSales[_id] = quantity;
                        }
                    });
                }
            });
            // console.log(productSales);

            // Map aggregated data back to product details
            const sortedProducts = Object.keys(productSales)
                .map(_id => {
                    const product = products.find(p => p.id === _id);
                    return {
                        ...product,
                        quantitySold: productSales[_id],
                    };
                })
                .filter(product => product) // Remove undefined products
                .sort((a, b) => b.quantitySold - a.quantitySold); // Sort by quantity sold

            setTopSellingProducts(sortedProducts);
        }
    }, [products, payments, productsLoading, ordersLoading]);

    if (productsLoading || ordersLoading) return <p>Loading...</p>;
   

    return (
        <div>
            <h2>Top-Selling Products</h2>
            <ul>
                {topSellingProducts.map(product => (
                    <li key={product.id}>
                        {product.title} - Sold: {product.quantitySold}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopProducts;
