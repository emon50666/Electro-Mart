import { useState } from "react";
import ManageCartLink from "../../components/ManageCartLink/ManageCartLink";
import CartTable from "./Shared/CartTable";

const ManageCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div className="lg:pt-20 pb-4 sm:px-6" id="cartLink">
            <ManageCartLink />
            <div className="lg:flex items-center">
                {/* table of cart product */}
                <div className="px-2 mt-5 lg:w-8/12 lg:my-10">
                    <CartTable setTotalPrice={setTotalPrice} />
                </div>
                {/* total price cart product */}
                <div className="lg:w-4/12">{totalPrice}</div>
            </div>
        </div>
    );
};

export default ManageCart;