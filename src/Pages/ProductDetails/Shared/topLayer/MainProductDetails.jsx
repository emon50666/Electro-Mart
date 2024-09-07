import PropTypes from "prop-types"
import GallerySide from "./GallerySide";
import OtherProductDetails from "./OtherProductDetails";

const MainProductDetails = ({ images }) => {
    return (
        <div className="md:flex justify-between items-center px-4 lg:px-20">
            {/* image side */}
            <div className="w-1/2">
                <GallerySide images={images} />
            </div>
            {/* other details side */}
            <div className="w-1/2" >
                <OtherProductDetails />
            </div>
        </div>
    );
};
MainProductDetails.propTypes = {
    images: PropTypes.array,
}
export default MainProductDetails;