import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MenuBar from "../components/Navbar/MenuBar";
import BottomNavigation from "./BottomNavigation";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import MobileSearchBar from "../components/Navbar/MobileSearchbar";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="mx-w[2550px] mx-auto">
      <Navbar />
      <div className="lg:hidden">
        <MobileSearchBar />
      </div>
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
