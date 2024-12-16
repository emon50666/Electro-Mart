import { Link } from "react-router-dom";
import ComparisonTable from "./Shared/ComparisonTable";
import useCompare from "../../Hooks/useCompare";
import { Helmet } from "react-helmet";

const ComparePage = () => {
  const { theUserCompares } = useCompare();

  return (
    <div className="space-y-10 md:mb-20 lg:mb-24">
      <Helmet>
        <title>Compare | Elector Mart</title>
      </Helmet>
      {theUserCompares.length > 0 && (
        <div className="font_lexend min-h-[30vh] h-auto md:min-h-[40vh] lg:min-h-[50vh] relative bg-[url('https://res.cloudinary.com/dpsgtszzi/image/upload/v1734188475/comp_bpwsq6.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <div className="relative z-10 text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-gray-100 font-semibold">
              Compare
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-1 gap-y-0 md:mt-2 text-white text-sm">
              <Link to="/" className="cursor-pointer hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <p>Compare</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center min-h-[50vh]">
        {theUserCompares.length > 0 ? (
          // If there are products to compare, show the comparison table
          <ComparisonTable compares={theUserCompares} />
        ) : (
          // Centering the message using flex and ensuring full height alignment
          <div className="flex items-center justify-center min-h-[50vh] mx-2 mt-4 mb-4">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-teal-900 p-8 md:p-10 lg:p-12 rounded-xl shadow-lg max-w-lg mx-auto space-y-8">
                <p className="text-lg md:text-3xl font-semibold">
                  Your comparison list is empty!
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  Start comparing products by adding them to your list. Check
                  out our collections to find the best options for you.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-block text-white bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-md hover:shadow-lg"
                >
                  Go back to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
