import { Link } from "react-router-dom";

const Wishlist = () => {
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
        </div>
    );
};

export default Wishlist;