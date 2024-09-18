import PropType from "prop-types";


const ProductCard = ({ product, onRemove }) => {
    return (
      <div className="border rounded-lg p-4 bg-white shadow-md relative">
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          &#x2716; {/* X icon */}
        </button>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-40 object-cover"
        />
        <h3 className="text-lg font-bold mt-4">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-xl font-semibold text-green-600 mt-2">
          ${product.discountPrice} <span className="line-through text-gray-500">${product.price}</span>
        </p>
        <p className="text-sm text-yellow-500 mt-1">Rating: {product.rating}/5</p>
        <p className="text-xs text-gray-500 mt-1">Available: {product.availableItems}</p>
      </div>
    );
  };
  ProductCard.propTypes = {
    product: PropType.object,
    onRemove: PropType.func
  }
  export default ProductCard;
  