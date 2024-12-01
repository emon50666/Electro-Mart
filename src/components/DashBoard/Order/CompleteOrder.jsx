import useOrder from "../../../Hooks/useOrder";


const CompleteOrder = () => {
    const { payments, } = useOrder();
    // console.log(payments);
    return (
        <div className="mt-20">
            {
                payments.map((pay,indx)=> <>
                 <div key={indx}>
                 <td className="border-r font-semibold  ">{pay?.product_name} </td>
                  <th className="border-r" >
                    <p className="font-normal text-[13px] ">{pay?.payment_method} </p>
                  </th>
                 </div>
                </>)
            }
        </div>
    );
};

export default CompleteOrder;