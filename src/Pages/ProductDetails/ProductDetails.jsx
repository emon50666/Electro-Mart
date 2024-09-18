import MainProductDetails from "./Shared/topLayer/MainProductDetails";
import TopLayerOfDetails from "./Shared/topLayer/TopLayerOfDetails";


const ProductDetails = () => {
    const products = {
        images: [
            'https://res.cloudinary.com/duv5fiurz/image/upload/v1726663730/download_24_eqjgcy.jpg',
            'https://res.cloudinary.com/duv5fiurz/image/upload/v1726663729/download_25_pur9ua.jpg',
            'https://res.cloudinary.com/duv5fiurz/image/upload/v1726663720/download_26_g3hatx.jpg',
            'https://res.cloudinary.com/duv5fiurz/image/upload/v1726583000/kthyxn4kc4nuraey26ih.jpg'
        ],
        title: "Blender Pro 3000",
        rating: 4,
        description: "High-performance blender with 3 speed settings and a 2-liter jug, ideal for smoothies and soups.",
        price: 320,
        discountPrice: 270,
        discountPercentage: 15,
        addToCartIcon: "cart-icon.jpg",
        size: "2 liters",
        availableItems: 5,
        category: "Kitchen Appliance",
        brandName: "BlendMaster",
        addingDate: "2024-06-15",
        onOffer: "yes",
        isNew: "no"

    }

    return (
        <div className="space-y-9">
            {/* top layer of details */}
            <TopLayerOfDetails title={products.title} />
            {/* main details section */}
            <MainProductDetails product={products} />


            <br /><br /><br /><br /><br />
        </div>
    );
};

export default ProductDetails;