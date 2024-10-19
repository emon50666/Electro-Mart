import ManageCartLink from "../../components/ManageCartLink/ManageCartLink";

const ManageCart = () => {
    return (
        <div className="pt-20 pb-4 sm:px-6" id="cartLink">
            <ManageCartLink />
            <div className="lg:flex items-center">
                {/* table of cart product */}
                <div className="lg:w-8/12"></div>
                {/* total price cart product */}
                <div className="lg:w-4/12"></div>
            </div>
        </div>
    );
};

export default ManageCart;