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
import AddToPromotion from "../Pages/AddToPromotion/AddToPromotion";
import ManageCart from "../Pages/ManageCart/ManageCart";







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
        element: <ProductDetails />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`),
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
        path: "manageProduct",
        element: <PrivateRoute><ManageProduct /></PrivateRoute>
      },
      {
        path: "manageCart",
        element: <PrivateRoute><ManageCart /></PrivateRoute>
      },
      {
        path: "updateProduct/:id",
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`),
      },
      {
        path: "makePromotion/:id",
        element: <PrivateRoute><AddToPromotion /></PrivateRoute>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`),
      },
      {
        path: "addProduct",
        element: <PrivateRoute><AddNewProduct /></PrivateRoute>
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

    ]
  }

]);



export default router;