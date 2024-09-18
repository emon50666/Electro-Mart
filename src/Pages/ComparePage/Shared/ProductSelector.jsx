import PropType from "prop-types";

const ProductSelector = ({ products, onSelectProduct }) => {
    return (
        <div className="my-4">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                Select a Product
            </label>
            <select
                id="product"
                onChange={(e) => onSelectProduct(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="">Choose a product</option>
                {products.map((product) => (
                    <option key={product.title} value={product.title}>
                        {product.title}
                    </option>
                ))}
            </select>
        </div>
    );
};
ProductSelector.propTypes = {
    products: PropType.array,
    onSelectProduct: PropType.func
}
export default ProductSelector;
