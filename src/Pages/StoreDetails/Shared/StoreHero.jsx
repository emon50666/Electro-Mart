import PropType from "prop-types";



const StoreHero = ({ store }) => {
    return (
        <section className="mx-auto">
            <div
                className="min-h-[60vh] w-full relative rounded-2xl"
                style={{
                    backgroundImage: `url(${store?.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>

                <div className="items-center flex px-3 text-white sm:justify-center lg:justify-start h-[250px]  lg:h-[300px] ">
                    <div className="max-w-md bg-[#0009]/50 p-2 rounded">
                        <p className="font-medium text-sm md:text-base lg:text-lg">
                            {store?.shopAddress}
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            {store?.shopName}
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
