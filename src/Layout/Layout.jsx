import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MenuBar from "../components/Navbar/MenuBar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <MenuBar ></MenuBar>

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;