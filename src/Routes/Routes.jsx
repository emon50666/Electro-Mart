import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ComparePage from "../Pages/ComparePage/ComparePage";
import StorPage from "../Pages/StorPage/StorPage";
import AddNewProduct from "../components/DashBoard/AddNewProduct/AddNewProduct";
import StoreDetails from "../Pages/StoreDetails/StoreDetails";
import AllUser from "../components/DashBoard/AllUser/AllUser";
import Order from "../components/DashBoard/Order/Order";
import DashboardLayout from './../Layout/DashBoardLayout';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../components/404/Error";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Profile from "../components/DashBoard/ProfilePage/Profile";
import ManageProduct from "../components/DashBoard/ManageProduct/ManageProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ManageCart from "../Pages/ManageCart/ManageCart";
import MemberDashBoard from "../components/DashBoard/MemberDashboard/MemberDashBoard";
import AddNewStore from "../components/DashBoard/AddNewStore/AddNewStore";
import UpdateStore from "../components/DashBoard/UpdateStore/UpdateStore";
import ManageStore from "../components/DashBoard/ManageStore/ManageStore";
import PromotionControl from "../components/DashBoard/PromotionControl/PromotionControl";
import DashBoardProfile from "../components/DashBoard/DashBoardProfile/DashBoardProfile";







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
        path: "/productDetails/:id",
        element: <PrivateRoute> <ProductDetails /></PrivateRoute>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products/`),
      },
      {
        path: "/comparePage",
        element: <PrivateRoute><ComparePage /></PrivateRoute>
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><Wishlist /></PrivateRoute>
      },
      {
        path: "/storesPage",
        element: <StorPage />
      },
      {
        path: "/storeDetails/:id",
        element: <StoreDetails />
      },
      {
        path: "manageCart",
        element: <PrivateRoute><ManageCart /></PrivateRoute>
      },
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
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "promotionControl",
        element: <PrivateRoute><PromotionControl /></PrivateRoute>
      },
      {
        path: "manageProduct",
        element: <PrivateRoute><ManageProduct /></PrivateRoute>
      },
      {
        path: "manageStore",
        element: <PrivateRoute><ManageStore /></PrivateRoute>
      },
      {
        path: "updateProduct/:id",
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
      },
      {
        path: "updateStore/:id",
        element: <PrivateRoute><UpdateStore /></PrivateRoute>,
      },
      {
        path: "addProduct",
        element: <PrivateRoute><AddNewProduct /></PrivateRoute>
      },
      {
        path: "addStore",
        element: <PrivateRoute><AddNewStore /></PrivateRoute>
      },
      {
        path: "user",
        element: <PrivateRoute> <AllUser /></PrivateRoute>
      },
      {
        path: "Order-List",
        element: <PrivateRoute><Order /></PrivateRoute>
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: 'my-account',
        element: <MemberDashBoard />
      },
      {
        path: 'dashboard-layout',
        element: <DashBoardProfile />
      }

    ]
  }

]);



export default router;