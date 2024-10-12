import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MenuBar from "../components/Navbar/MenuBar";
import BottomNavigation from "./BottomNavigation";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <div  className="mx-w[2550px] mx-auto">
            <Navbar />
            <MenuBar />
            <div className="min-h-[70vh]">
                <Outlet />
            </div>
            <BottomNavigation />
            <Footer />
        </div>
    );
};

export default Layout;
