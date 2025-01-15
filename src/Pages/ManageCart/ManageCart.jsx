import { useState, useEffect } from "react";
import ManageCartLink from "../../components/ManageCartLink/ManageCartLink";
import CartTable from "./Shared/CartTable";
import CartPrice from "./Shared/CartPrice";
import useCart from "../../Hooks/useCart";

const ManageCart = () => {
  const { theUserCarts } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total subtotal whenever theUserCarts changes
  useEffect(() => {
    const calculatedTotal = theUserCarts?.reduce(
      (total, cartItem) => total + cartItem.subtotal,
      0
    );
    setTotalPrice(calculatedTotal || 0);
  }, [theUserCarts]);

  return (
    <div className="pb-4 sm:px-6" id="cartLink">
      <ManageCartLink />
      <div className="lg:flex">
        {/* Table of cart products */}
        <div className="px-2 mt-5 lg:w-8/12 lg:my-10">
          <CartTable setTotalPrice={setTotalPrice} />
        </div>
        {/* Total price of cart products */}
        <div className="px-2 mt-5 lg:w-4/12 lg:my-10">
          <CartPrice productTotal={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default ManageCart;
