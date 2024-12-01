import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useProduct from "../../../Hooks/useProduct";
import Loader from "../../Loader/Loader";


const UserOrder = () => {
  
  const { products, isLoading } = useProduct();
  const { theUserCarts, } = useCart();

  // Find matching products between products and theUserCarts based on mainProductId
  const matchedProducts = theUserCarts?.map(cartItem => {
    const matchingProduct = products?.find(product => product?._id === cartItem?.mainProductId);
    return matchingProduct ? { ...cartItem, productDetails: matchingProduct } : cartItem;
  });

  // console.log(matchedProducts);

if(isLoading) return <Loader/>

  return (
    <div className="mt-10">
      

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-blue-50  text-sm">
            <th className="py-2 px-4 border-b lg:text-sm border-gray-300 text-left">Product Image</th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">Product Name</th>
            <th className="py-2 px-4 border-b border-gray-300 relative    text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {matchedProducts?.map((cartItem, index) => (
            cartItem.productDetails && (
              <tr key={index } className="hover:bg-gray-100  ">
                <td className=" px-4 border-b border-gray-300">
                  <img src={cartItem?.productDetails?.images[0]} alt={cartItem?.productDetails?.title} className="w-16 h-16 object-cover" />
                </td>
                <td className=" px-4 border-b text-[10px] lg:text-sm border-gray-300">
                 <Link to={`/productDetails/${cartItem?.productDetails?._id}`}> {cartItem?.productDetails?.title}</Link>
                </td>
                <td className=" px-4 border-b border-gray-300">
                  ${cartItem?.productDetails?.price}
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrder;
