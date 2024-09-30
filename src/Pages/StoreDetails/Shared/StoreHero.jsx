import PropType from "prop-types";



const StoreHero = ({ store }) => {
    return (
        <section className="px-2 mx-auto">
            <div
                className="min-h-[60vh] w-full relative rounded-2xl"
                style={{
                    backgroundImage: "url(https://res.cloudinary.com/duv5fiurz/image/upload/v1727700324/store-bg_bra6cg.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>

                <div className="hero-content text-white text-left absolute bottom-2  md:bottom-5 md:left-5">
                    <div className="max-w-md">
                        <p className="font-medium text-sm md:text-base lg:text-lg">
                            {store.location}
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            {store.storeName}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
StoreHero.propTypes = {
    store: PropType.object,
}
export default StoreHero;
