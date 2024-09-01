import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"
// import { AiOutlineAppstoreAdd } from "react-icons/ai";
const TopLayerOfDetails = ({ title }) => {
    return (
        <nav className="flex justify-between lg:px-32" id="product_details_top_layer">
            <ul className="flex gap-1 font-semibold font_open_sense">
                <li>
                    <NavLink to="/">Home</NavLink> /
                </li>
                <li>
                    <NavLink to="/">Category</NavLink> /
                </li>
                <li>
                    <NavLink to="#">{title}</NavLink>
                </li>
            </ul>
            <div>
                {/* <NavLink to="/store"><AiOutlineAppstoreAdd /></NavLink> */}
                <NavLink to="/store">Store</NavLink>
            </div>
        </nav>
    );
};
TopLayerOfDetails.propTypes = {
    title: PropTypes.string,
}
export default TopLayerOfDetails;