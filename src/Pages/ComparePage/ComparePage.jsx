import { Link } from 'react-router-dom';
import ComparisonTable from './Shared/ComparisonTable';
import useCompare from '../../Hooks/useCompare';

const ComparePage = () => {
    const { theUserCompares } = useCompare();

    return (
        <div className="space-y-10 mb-12 mt-20">
            {theUserCompares.length > 0 && (
                <div className='font_lexend min-h-[30vh] h-auto md:h-[30vh] xl:h-[40vh] bg-[url("https://res.cloudinary.com/duv5fiurz/image/upload/v1726674456/page-title-shop_ue5dxm.jpg")] bg-cover bg-center flex flex-col items-center justify-center'>
                    <h2 className="text-2xl md:text-4xl xl:text-7xl text-white font-semibold">Compare</h2>
                    <div className='flex gap-x-1 gap-y-0 md:mt-2 text-white text-sm'>
                        <Link to="/" className='cursor-pointer hover:text-orange-500'>Home</Link>
                        <span>/</span>
                        <p>Compare</p>
                    </div>
                </div>
            )}

            <div className="flex justify-center items-center mt-10  min-h-[50vh]">
                {theUserCompares.length > 0 ? (
                    // If there are products to compare, show the comparison table
                    <ComparisonTable compares={theUserCompares} />
                ) : (
                    // Centering the message using flex and ensuring full height alignment
                    <div className="flex items-center justify-center min-h-[50vh] mx-2 my-16">
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-teal-900 p-8 md:p-10 lg:p-12 rounded-xl shadow-lg max-w-lg mx-auto space-y-8">
                                <p className="text-lg md:text-3xl font-semibold">
                                    Your comparison list is empty!
                                </p>
                                <p className="text-base md:text-lg text-gray-600">
                                    Start comparing products by adding them to your list. Check out our collections to find the best options for you.
                                </p>
                                <Link
                                    to="/"
                                    className="mt-6 inline-block text-white bg-teal-600 hover:bg-teal-700 transition-colors px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-md hover:shadow-lg"
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
