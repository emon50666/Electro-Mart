import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ManageCartLink = () => {
    return (
        <>
            <ul className="px-20 py-10 mt-5 bg-teal-500 rounded-lg text-2xl font-semibold flex items-center justify-center gap-x-10 text-gray-100">
                <li>
                    <NavLink to="/manageCart">
                        Shopping Cart
                    </NavLink>
                </li>
                <BsArrowRight />
                <li>
                    <NavLink to="/">
                        Checkout
                    </NavLink>
                </li>
                <BsArrowRight />
                <li>
                    <NavLink to="/">
                        Order Complete
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default ManageCartLink;