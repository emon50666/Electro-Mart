import PropType from 'prop-types';
import useProduct from '../../../Hooks/useProduct';


const CheckoutTable = ({ cart }) => {
    const { products } = useProduct();
    const product = products.find(product => product?._id === cart?.mainProductId);
    return (
        <div>
            {product.title}
        </div>
    );
};
CheckoutTable.propTypes = {
    cart: PropType.object
}
export default CheckoutTable;