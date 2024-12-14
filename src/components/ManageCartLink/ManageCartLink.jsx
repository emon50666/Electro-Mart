import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ManageCartLink = () => {
    return (
        <>
            <ul className="mx-2 px-3 lg:px-20 py-3 lg:py-4 mt-5 bg-blue-600 rounded-lg text-[12px] lg:text-lg font-semibold flex items-center justify-center gap-x-2 lg:gap-x-14 md:gap-x-10 text-gray-100">
                <li>
                    <NavLink to="/manageCart">
                        Shopping Cart
                    </NavLink>
                </li>
                <BsArrowRight />
                <li>
                    <NavLink to="/checkout-page">
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