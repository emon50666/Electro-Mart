import { useState } from "react";
import ManageCartLink from "../../components/ManageCartLink/ManageCartLink";
import CartTable from "./Shared/CartTable";
import CartPrice from "./Shared/CartPrice";

const ManageCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div className=" pb-4 sm:px-6" id="cartLink">
            <ManageCartLink />
            <div className="lg:flex">
                {/* table of cart product */}
                <div className="px-2 mt-5 lg:w-8/12 lg:my-10">
                    <CartTable setTotalPrice={setTotalPrice} />
                </div>
                {/* total price cart product */}
                <div className="px-2 mt-5 lg:w-4/12 lg:my-10">
                    <CartPrice productTotal={totalPrice}/>
                </div>
            </div>
        </div>
    );
};

export default ManageCart;