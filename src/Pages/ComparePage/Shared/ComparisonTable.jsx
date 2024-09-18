import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const ComparisonTable = ({ products }) => {
    // Function to truncate title with ellipsis if it's longer than 20 characters
    const sliceTitle = (title) => {
        return title.length > 25 ? `${title.slice(0, 25)}...` : title;
    };

    return (
        <div className="overflow-x-auto ml-0 md:ml-10 xl:ml-32">
            <table className="md:min-w-[70vw] w-auto table-auto border-collapse border-r-0">
                <tbody>
                    <tr>
                        <td className="border-b hidden md:block"></td>
                        {products.map((product, index) => (
                            <td key={index} className="p-4 pt-0 border-b border-l border-r-0 font_cabin">
                                <button className='flex items-center gap-x-1 text-sm mb-2 hover:bg-gray-200 hover:text-orange-500 hover:px-10 hover:font-medium rounded-sm transition-all'><RxCross1 /> <span>Remove</span></button>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="w-52 h-52 object-cover mb-2"
                                    />
                                </div>
                                <p className='text-[#767676]'>{sliceTitle(product.title)}</p>
                                <p className='text-orange-500'>£<span>{product.price}</span></p>
                                <div className="flex flex-col md:flex-row md:justify-between mt-2 gap-y-1">
                                    <button className="bg-orange-500 hover:bg-teal-500 transition-all text-white py-2 px-1 md:px-4 rounded-sm text-sm cursor-pointer">Add to Cart</button>
                                    <Link to={"/productDetails"} className="text-center bg-orange-500 hover:bg-teal-500 transition-all text-white py-2 px-2 md:px-4 rounded-sm text-sm cursor-pointer">Details</Link>
                                </div>

                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-r-0 font-semibold text-[#555] hidden md:block">Rating</td>
                        {products.map((product, index) => (
                            <td key={index} className="p-4 border-b border-l border-r-0 font-medium text-[#767676]">
                                <Rating
                                    initialRating={parseInt(product.rating)}
                                    emptySymbol={
                                        <img
                                            src="https://i.ibb.co/KN7rSQ6/empty-star-removebg-preview.png"
                                            className="icon h-4 md:h-5"
                                            alt="empty star"
                                        />
                                    }
                                    fullSymbol={
                                        <img
                                            src="https://i.ibb.co/KGK6qQR/full.jpg"
                                            className="icon h-4 md:h-5"
                                            alt="full star"
                                        />
                                    }
                                    readonly
                                />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-r-0 font-semibold text-[#555] hidden md:block">Brand</td>
                        {products.map((product, index) => (
                            <td key={index} className="p-4 border-b border-l border-r-0 font-medium text-[#767676]">
                                <p>{product.brandName}</p>
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-r-0 font-semibold text-[#555] hidden md:block">Available Items</td>
                        {products.map((product, index) => (
                            <td key={index} className="p-4 border-b border-l border-r-0 font-medium text-[#767676]">
                                <p>{product.availableItems}</p>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// PropTypes validation
ComparisonTable.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ComparisonTable;
