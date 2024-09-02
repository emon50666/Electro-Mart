import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"
import { AiOutlineAppstore } from "react-icons/ai";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const TopLayerOfDetails = ({ title }) => {
    return (
        <nav className="flex justify-between px-4 lg:px-32" id="product_details_top_layer">
            <ul className="flex gap-1 font-semibold font_open_sense">
                <li>
                    <NavLink to="/">Home</NavLink> /
                </li>
                <li  className="hidden md:block">
                    <NavLink to="/">Category</NavLink> /
                </li>
                <li>
                    <NavLink to="#">{title}</NavLink>
                </li>
            </ul>
            <div className="hidden md:block">
                <ul className="flex gap-1 items-center text-lg">
                    <li>
                        <NavLink to="#"><SlArrowLeft /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/store"><AiOutlineAppstore /></NavLink>
                    </li>
                    <li>
                        <NavLink to="#"><SlArrowRight /></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
TopLayerOfDetails.propTypes = {
    title: PropTypes.string,
}
export default TopLayerOfDetails;