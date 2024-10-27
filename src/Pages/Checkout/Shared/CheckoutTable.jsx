import PropType from 'prop-types';
import useProduct from '../../../Hooks/useProduct';


const CheckoutTable = ({ cart, setGetProductId }) => {
    const { products } = useProduct();
    const product = products.find(product => product?._id === cart?.mainProductId);
    setGetProductId(product?._id)
    return (
        <div className='flex justify-between items-center pt-4 border-b-2 border-gray-300'>
            <p>{product?.title}</p>
            <p>{cart?.subtotal}</p>
        </div>
    );
};
CheckoutTable.propTypes = {
    cart: PropType.object,
    setGetProductId: PropType.func,
}
export default CheckoutTable;