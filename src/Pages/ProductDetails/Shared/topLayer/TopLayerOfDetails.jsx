import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useRoll from "../../../../Hooks/useRoll";

const TopLayerOfDetails = ({ title, id }) => {
  const [role] = useRoll();
  return (
    <nav
      className="lg:flex hidden sm:block  flex-col md:flex-row justify-between items-start md:items-center px-4 lg:px-8 xl:px-20 bg-slate-300 py-3"
      id="product_details_top_layer"
    >
      <ul className="lg:flex  flex-col md:flex-row gap-1 font-semibold font_open_sense items-center text-[10px] md:text-base lg:text-[15px] text-gray-900">
        <li className="items-center flex">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>{" "}
          /
        </li>
        <li className="hidden md:block text-blue-500">
          <Link to="/" className="hover:text-blue-400">
            Category
          </Link>{" "}
          /
        </li>
        <li className="items-center  flex text-gray-900">
          <Link to="#" className="hover:text-gray-600">
            {title.length > 150 ? title.slice(0, 150) + "..." : title}
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-3 md:gap-6 mt-2 md:mt-0">
        {role === "admin" && (
          <Link
            to={`/dashboard/updateProduct/${id}`}
            className="bg-blue-500 text-white text-xs md:text-sm lg:text-base px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Update
          </Link>
        )}
      </div>
    </nav>
  );
};

TopLayerOfDetails.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default TopLayerOfDetails;
