
import { Outlet } from "react-router-dom";
import SideBar from "../components/DashBoard/SideBar";
import HeaderDashboard from "../components/DashBoard/HeaderDashboard";



const DashboardLayout = () => {

    return (
        <>



            <HeaderDashboard />


            <div className=" min-h-screen md:flex bg-[#EEEEEE]/30 ">
                {/* side bar */}
                <div>
                    <SideBar></SideBar>
                </div>
                {/* outlet dynamic content */}
                <div className="flex-1 lg:ml-64 overflow-x-scroll  shadow-lg   pt-2">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;