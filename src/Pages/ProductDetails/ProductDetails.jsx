import MainProductDetails from "./Shared/topLayer/MainProductDetails";
import TopLayerOfDetails from "./Shared/topLayer/TopLayerOfDetails";


const ProductDetails = () => {
    const products = {
        images: [
            'https://via.placeholder.com/150', 
            'https://via.placeholder.com/150/0000FF',
            'https://via.placeholder.com/150/008000',
            'https://via.placeholder.com/150/FF0000'
        ],
        title: "Blender",
        rating: 4.8,
        description: "Powerful blender with multiple speed settings, ideal for smoothies. Durable and easy to clean, perfect for daily use. Includes a safety lock feature and a two-year warranty.",
        price: 129,
        discountPrice: 99,
        discountPercentage: 23,
        addToCartIcon: "cart-icon.jpg",
        size: "2 liters",
        availableItems: 30,
        category: "kitchen instrument",
        brandName: "KitchenPro",
        addingDate: "2024-07-20",
        onOffer: "no",
        isNew: "no"
    }

    return (
        <div>
            {/* top layer of details */}
            <TopLayerOfDetails title={products.title} />
            {/* main details section */}
            <MainProductDetails images={products.images}/>

        </div>
    );
};

export default ProductDetails;