import MainProductDetails from "./Shared/topLayer/MainProductDetails";
import TopLayerOfDetails from "./Shared/topLayer/TopLayerOfDetails";


const ProductDetails = () => {
    const products = {
        images: [
            'https://i.ibb.co.com/C0SSGxf/download-27.jpg',
            'https://i.ibb.co.com/vJPfVBs/download-26.jpg',
            'https://i.ibb.co.com/F6fP180/download-25.jpg',
            'https://i.ibb.co.com/gz47X1b/download-24.jpg'
        ],
        title: "Chick Jumper",
        rating: 1,
        description: "Keep those little legs warm and cosy in our Arctic Leggings! Featuring an all over arctic themed jacquard and two sweet poms poms on the drawstring. Made from our organic cotton and wool blend for a warm and snuggly legging. Pair with our Arctic Friends Jumper for a sweet winter outfit.",
        price: 275,
        discountPrice: 99,
        discountPercentage: 23,
        addToCartIcon: "cart-icon.jpg",
        size: "2 liters",
        availableItems: 8,
        category: "kitchen instrument",
        brandName: "KitchenPro",
        addingDate: "2024-07-20",
        onOffer: "no",
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