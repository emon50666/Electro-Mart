import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MenuBar from "../components/Navbar/MenuBar";
import BottomNavigation from "./BottomNavigation";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import MobileSearchBar from "../components/Navbar/MobileSearchbar";
import  { useState } from "react";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a timeout (replace with your actual data fetching logic)
    const fetchData = async () => {
      try {
        // Simulated data fetching (e.g., API calls)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace this with actual fetch logic
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Ensure loading is stopped even if there's an error
      }
    };

    fetchData();
  }, []);
  
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="spinner absolute ml-3 border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
        <div className="spinner absolute ml-3 border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>

        <p className="ml-4 text-lg font-semibold">Electro Mart</p>
      </div>
    );
  }

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
