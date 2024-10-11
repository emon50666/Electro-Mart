import { FaShoppingCart } from "react-icons/fa";
import useProduct from "../../Hooks/useProduct";
import { DiGitCompare } from "react-icons/di";
import PropType from "prop-types";

const WishlistTable = ({wishProduct}) => {
    console.log(wishProduct)
    const { products } = useProduct();
    const product = products.find((pack) => pack?._id == wishProduct?.mainProductId);
    console.log(product)
    return (       
        <tr className="odd:bg-slate-50">
          <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            <img
              src={product?.images[0]}
              alt={product?.title}
              className="lg:h-32 md:h-32 h-20 lg:w-24 md:w-24 w-16 py-3 object-cover"
            />
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            {product?.title}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px]  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            {product?.brand}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px]  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            £{product?.price}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px]  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            £{product?.discountPrice}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px]  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            {product?.quant}
          </td>
          <td className="h-12 px-6">
            <button className="border-2 text-orange-500 text-2xl px-4 py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaShoppingCart />
            </button>
          </td>
          <td className="h-12 px-6">
            <button className="border-2 text-orange-500 text-2xl px-4 py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <DiGitCompare />
            </button>
          </td>
         
        </tr>
     
    );
};
 
WishlistTable.propTypes={
    wishProduct:PropType.object
}
export default WishlistTable;