import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MenuBar from "../components/Navbar/MenuBar";
import BottomNavigation from "./BottomNavigation";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const Layout = () => {
    const location = useLocation();
    

  useEffect(() => {
    // Scroll to the top of the page on every route change
    window.scrollTo(0, 0);
  }, [location]);

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
