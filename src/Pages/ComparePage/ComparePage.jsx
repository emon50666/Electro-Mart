import { Link } from 'react-router-dom';
import ComparisonTable from './Shared/ComparisonTable';

const ComparePage = () => {
    // Sample product data (as provided by you)
    const products = [
        {
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

        },
        {
            images: [
                'https://res.cloudinary.com/duv5fiurz/image/upload/v1726667541/download_28_kayepw.jpg',
                'https://i.ibb.co.com/sample-image6.jpg',
            ],
            title: 'Stainless Steel Knife Set',
            rating: 4,
            description:
                '8-piece knife set with ultra-sharp stainless steel blades and ergonomic handles.',
            price: 80,
            discountPrice: 65,
            discountPercentage: 18,
            size: 'Standard',
            availableItems: 20,
            category: 'Cutlery',
            brandName: 'SharpEdge',
            addingDate: '2024-08-01',
            onOffer: 'yes',
            isNew: 'yes',
        },
        {
            images: [
                'https://res.cloudinary.com/duv5fiurz/image/upload/v1726667567/download_29_neozxh.jpg',
                'https://i.ibb.co.com/sample-image8.jpg',
            ],
            title: 'Coffee Maker Deluxe',
            rating: 3,
            description:
                'Programmable coffee maker with a 12-cup capacity and stainless steel design.',
            price: 200,
            discountPrice: 160,
            discountPercentage: 20,
            size: '12 cups',
            availableItems: 10,
            category: 'Kitchen Appliance',
            brandName: 'BrewMaster',
            addingDate: '2024-07-30',
            onOffer: 'yes',
            isNew: 'yes',
        },
    ];

    return (
        <div className="container mx-auto space-y-10 mb-12">
            <div className=' font_lexend min-h-[30vh] h-auto md:h-[30vh] xl:h-[40vh] bg-[url("https://res.cloudinary.com/duv5fiurz/image/upload/v1726674456/page-title-shop_ue5dxm.jpg")] bg-cover bg-center flex flex-col items-center justify-center'>
                <h2 className="text-2xl md:text-4xl xl:text-7xl text-white font-semibold">Compare</h2>
                <div className='flex gap-x-1 gap-y-0 md:mt-2 text-white text-sm'>
                    <Link to="/" className='cursor-pointer hover:text-orange-500'>Home</Link>
                    <span>/</span>
                    <p>Compare</p>
                </div>
            </div>
            <div className=''>
                <ComparisonTable products={products} />
            </div>
        </div>
    );
};

export default ComparePage;
