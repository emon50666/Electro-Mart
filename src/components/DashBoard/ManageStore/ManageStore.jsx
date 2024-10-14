import { Helmet } from "react-helmet";
import ManageStoreTable from "./Shared/ManageStoreTable";

const ManageStore = () => {
    return (
        <div className="container mx-auto pt-12 pb-4 sm:px-6">
            <Helmet>
                <title>Manage Store | Elector Mart</title>
            </Helmet>
            <div className="bg-gray-200 rounded-md text-gray-100 py-6 md:py-10 lg:py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-md sm:text-2xl md:text-lg font-bold text-slate-900">
                        Manage Store
                    </h1>
                    <p className="mt-2 text-base sm:text-lg md:text-lg text-slate-900">
                        Here you can manage all your Products efficiently.
                    </p>
                </div>
            </div>

            <ManageStoreTable />
        </div>
    );
};

export default ManageStore;