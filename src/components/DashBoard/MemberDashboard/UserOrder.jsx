import useUserOrder from "../../../Hooks/useUserOrder";


const UserOrder = () => {
   
  const { theUserOrders } = useUserOrder()
  console.log(theUserOrders);

    return (
        <div className="mt-10">
           user product
        </div>
    );
};

export default UserOrder;