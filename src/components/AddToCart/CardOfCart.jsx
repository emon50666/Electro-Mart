import { IoMdCloseCircle } from 'react-icons/io';
import PropType from "prop-types";
import useProduct from '../../Hooks/useProduct';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useCart from '../../Hooks/useCart';
import { Link } from 'react-router-dom';
const CardOfCart = ({ cart }) => {
    const axiosPublic = useAxiosPublic();
    const { refetch } = useCart();
    const { products } = useProduct();
    const product = products.find((pack) => pack?._id == cart?.mainProductId);

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
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
        <Link
            to={`/productDetails/${product._id}`}
            className="flex items-center mb-4 px-3 py-1 hover:bg-gray-100">
            <img
                src={product?.images[0]}
                alt="Product"
                className="w-16 h-16 object-cover rounded-md"
            />
            <div className="ml-4">
                <div className="flex gap-24">
                    <h4 className="font-semibold text-sm md:text-base mb-2">
                        {product?.title.slice(0, 25)}...
                    </h4>
                    <button
                        onClick={() => handleDeleteCart(cart._id)}
                        className='p-0 m-0'>
                        <IoMdCloseCircle className="text-xl text-red-500 hover:text-red-600"></IoMdCloseCircle>
                    </button>
                </div>

                <p className="text-orange-500 mt-2">£{product?.price}</p>
            </div>
        </Link>
    );
};
CardOfCart.propTypes = {
    cart: PropType.object,
}
export default CardOfCart;