import PropTypes from "prop-types"
import GallerySide from "./GallerySide";
import OtherProductDetails from "./OtherProductDetails";

const MainProductDetails = ({ product }) => {
    return (
        <div className="mt-10 md:flex justify-between lg:items-center px-4 lg:px-20 gap-x-8">
            {/* image side */}
            <div className="w-full md:w-1/2 lg:w-3/5  md:h-auto">
                <GallerySide images={product.images} />
            </div>
            {/* other details side */}
            <div className="w-full md:w-1/2 lg:w-2/5 mt-5 md:mt-1 md:h-auto" >
                <OtherProductDetails product={product} />
            </div>
        </div>
    );
};
MainProductDetails.propTypes = {
    product: PropTypes.object,
}
export default MainProductDetails;