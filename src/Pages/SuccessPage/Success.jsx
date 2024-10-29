
import useOrder from "../../Hooks/useOrder";


const Success = () => {
   
    const {payments, refetch,isLoading} = useOrder()
    return (
        <div>
            {
                payments?.map((payment,indx) =><>
                <div key={indx}>
                <p> {payment.paymentId}</p>
           

                <p> {payment.us_name}</p>
                <p> {payment.shipping_method}</p>


                </div>
                </>)
            }
        </div>
    );
};

export default Success;