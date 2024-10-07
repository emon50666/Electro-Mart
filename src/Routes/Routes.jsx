import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ComparePage from "../Pages/ComparePage/ComparePage";
import StorPage from "../Pages/StorPage/StorPage";
import ProductManage from "../components/DashBoard/ProductManage/ProductManage";
import AddNewProduct from "../components/DashBoard/AddNewProduct/AddNewProduct";
import StoreDetails from "../Pages/StoreDetails/StoreDetails";
import AllUser from "../components/DashBoard/AllUser/AllUser";
import Order from "../components/DashBoard/Order/Order";
import ProductPage from "../components/ProductPage";
import Error from "../components/404/Error";
import Wishlist from "../Pages/Wishlist/Wishlist";
import DashboardLayout from "../Layout/DashBoardLayout";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/productDetails",
        element: <ProductDetails />
      },
      {
        path: "/comparePage",
        element: <ComparePage />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/storesPage",
        element: <StorPage />
      },
      {
        path: "/storeDetails",
        element: <StoreDetails />
      },
      {
        path: "/storPage",
        element: <StorPage></StorPage>
      },
      {
        path: 'productPage',
        element: <ProductPage />

      }
    ],

  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },




  // dashboard route
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: "productManage",
        element: <ProductManage />
      },
      {
        path: "addProduct",
        element: <AddNewProduct />
      },
      {
        path: "user",
        element: <AllUser />
      },
      {
        path: "Order-List",
        element: <Order />
      }
    ]
  }

]);



export default router;