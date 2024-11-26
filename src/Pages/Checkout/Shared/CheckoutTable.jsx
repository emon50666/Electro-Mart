import PropType from 'prop-types';
import useProduct from '../../../Hooks/useProduct';
import Loader from '../../../components/Loader/Loader';


const CheckoutTable = ({ cart, setGetProductId }) => {
    const { products,isLoading } = useProduct();
    const product = products.find(product => product?._id === cart?.mainProductId);
    // console.log(product?._id);

   
  if (isLoading) return <Loader />;
    return (
       
            <div className='flex justify-between items-center pt-4 border-b pb-1    border-gray-300'>
            {setGetProductId(product?._id)}
            <p className='flex items-center gap-x-2'><span className='inline-block'>{product?.title.slice(0,47)}..</span><sub className='text-md text-blue-500'>(x{cart.selectedQuantity})</sub></p>
            <p>{cart?.subtotal}</p>
        </div>
        
    );
};
CheckoutTable.propTypes = {
    cart: PropType.object,
    setGetProductId: PropType.func,
}
export default CheckoutTable;