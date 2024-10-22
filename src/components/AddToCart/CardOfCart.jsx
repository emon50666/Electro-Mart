import { IoMdCloseCircle } from 'react-icons/io';
import PropType from "prop-types";
import useProduct from '../../Hooks/useProduct';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useCart from '../../Hooks/useCart';
import { Link } from 'react-router-dom';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import useUpdateQuantity from '../../Hooks/useUpdateQuantity';

const CardOfCart = ({ cart }) => {
    const axiosPublic = useAxiosPublic();
    const { refetch } = useCart();
    const { products } = useProduct();
    const handleQuantityUpdate = useUpdateQuantity();
    const product = products.find((pack) => pack?._id == cart?.mainProductId);


    // const handleQuantity = async () => {
    //     const updatedQuantity = parseInt(product?.quantity) + parseInt(cart?.selectedQuantity);
    //     const updatedQuantityInfo = { updatedQuantity }
    //     const response = await axiosPublic.patch(`/productQuantity/${product?._id}`, updatedQuantityInfo);
    //     if (response.data.modifiedCount) {
    //         refetch();
    //     }
    // }
    const handleDeleteCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/carts/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            handleQuantityUpdate(product,cart,refetch);
                            refetch();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });
    }
    return (
        <div
            className="flex items-center mb-4 px-3 py-1 hover:bg-gray-100">
            <img
                src={product?.images[0]}
                alt="Product"
                className="w-16 h-16 object-cover rounded-md"
            />
            <div className="ml-4">
                <div className="flex gap-24">
                    <Link to={`/productDetails/${product._id}`}>
                        <h4 className="font-semibold text-sm md:text-base mb-1">
                            {product?.title.slice(0, 25)}...
                        </h4>
                    </Link>
                    <button
                        onClick={() => handleDeleteCart(cart?._id)}
                        className='p-0 m-0'>
                        <IoMdCloseCircle className="text-xl text-red-500 hover:text-red-600"></IoMdCloseCircle>
                    </button>
                </div>
                {
                    cart?.mainProductId === product?._id && <p className="flex items-center gap-1">
                        Selected Quantity : <span className='text-orange-500'>{cart?.selectedQuantity}</span>
                    </p>}
                <p className="text-orange-500 flex items-center gap-1">
                    <FaBangladeshiTakaSign />
                    {product?.price}
                </p>
            </div>
        </div>
    );
};
CardOfCart.propTypes = {
    cart: PropType.object,
}
export default CardOfCart;