import useOrder from './../../../Hooks/useOrder';

const Setting = () => {
    const { payments } = useOrder();
    console.log(payments);

    return (
        <form className="mt-32 mb-32">
            {payments?.map((pay) => (
                <input
                    key={pay.id}
                    id={`price-${pay.id}`} // Dynamic id for each input
                    type="text"
                    defaultValue={pay?.shipping}
                    className="p-2 border rounded"
                />
            ))}
        </form>
    );
};

export default Setting;
