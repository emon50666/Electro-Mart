import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import MenuBar from "../components/Navbar/MenuBar";
import BottomNavigation from "./BottomNavigation";

const Layout = () => {
    return (
        <div className="mx-w[2550px] mx-auto">
            <Navbar />
            <MenuBar ></MenuBar>

            <Outlet />
             <BottomNavigation/>
            
        </div>
    );
};

export default Layout;