import ManageProductTable from "./Shared/ManageProductTable";

const ManageProduct = () => {
    return (
        <div className="pt-12 pb-4 sm:px-6 ">
            <div className="bg-gray-300 text-gray-100 py-6 md:py-10 lg:py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                        Manage Product
                    </h1>
                    <p className="mt-2 text-base sm:text-lg md:text-xl text-slate-900">
                        Here you can manage all your products efficiently.
                    </p>
                </div>
            </div>

            {/* product table */}
            <ManageProductTable />
        </div>
    );
};

export default ManageProduct;