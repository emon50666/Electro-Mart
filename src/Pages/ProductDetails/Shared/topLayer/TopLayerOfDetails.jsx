import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import useRoll from "../../../../Hooks/useRoll";
const TopLayerOfDetails = ({ title, id }) => {
    const [role,] = useRoll();
    return (
        <nav className="flex justify-between items-center px-4 lg:px-8 xl:px-20 bg-slate-300 py-3" id="product_details_top_layer">
            <ul className="flex gap-1 font-semibold font_open_sense">
                <li>
                    <Link to="/">Home</Link> /
                </li>
                <li className="hidden md:block text-orange-500">
                    <Link to="/">Category</Link> /
                </li>
                <li className="text-[10px] items-center text-gray-900 flex lg:text-[15px]">
                    <Link to="#">{title}</Link>
                </li>
            </ul>
            <div className="flex items-center justify-center gap-6">
                <div className="hidden md:block">
                    <ul className="flex gap-1 items-center text-lg">
                       
                        
                        {/* {products.map((product,idx)=>
                            {product?.category == category && (
                                
                            )}
                        )} */}
                    
                    </ul>
                </div>
                {role === "admin" && (
                    <div>
                        <Link
                            to={`/dashboard/updateProduct/${id}`}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
                            Update
                        </Link>
                    </div>
                )}


            </div>
        </nav>
    );
};
TopLayerOfDetails.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    // products: PropTypes.array,
    // category: PropTypes.string,
}
export default TopLayerOfDetails;