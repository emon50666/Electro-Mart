import { Helmet } from "react-helmet";
import ManageProductTable from "./Shared/ManageProductTable";
import SearchBar from "../../Navbar/SearchBar";

const ManageProduct = () => {
    return (
        <div id="manageProductId" className="container mx-auto pt-12 pb-4 sm:px-6">
            <Helmet>
                <title>Manage Product | Elector Mart</title>
            </Helmet>
            <p className="font-semibold text-lg">Manage All Products</p>
           <div className="">
          
           <SearchBar/>
           </div>

            {/* product table */}
            <ManageProductTable />
        </div>
    );
};

export default ManageProduct;