import usePromotions from "../../Hooks/usePromotions";

const Promotion = () => {
    const { promotionsProducts } = usePromotions();
    console.log(promotionsProducts);
    
    return (
        <div className="lg:mt-24 lg:mx-20 font_lexend  md:mx-14 mx-3 mb-5">
            <p className="text-[10px]">CLOTHES THAT YOU LIKE</p>
            <h2 className="text-2xl">Promotions</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                {
                    promotionsProducts.map(product => (
                        <div key={product._id} className="relative rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                        <img 
                            src={product.image} 
                            className="lg:h-[280px] lg:w-[480px] object-cover" 
                            alt={product.title} 
                        />
                        <div className="absolute top-5  left-4 text-sm text-slate-300">
                            <p>{product.offerStartDate} - {product.offerRemoveDate}</p>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <h1 className="lg:text-2xl  text-xl font-semibold text-white">{product.title}</h1>
                        </div>
                    </div>
                    
                    ))
                }
            </div>
        </div>
    );
};

export default Promotion;
