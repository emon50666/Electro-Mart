import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MenuBar from "../components/Navbar/MenuBar";
import BottomNavigation from "./BottomNavigation";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import MobileSearchBar from "../components/Navbar/MobileSearchbar";
import Skeleton from "../components/Skeleton/Skeleton"; // Import your skeleton component

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Simulate loading for skeleton (you can replace this with actual loading logic)
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="mx-w[2550px] mx-auto">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Layout;
