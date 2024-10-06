import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ComparePage from "../Pages/ComparePage/ComparePage";
import StorPage from "../Pages/StorPage/StorPage";
import DashboardLayout from "../Layout/DashBoardLayOut";
import ProductManage from "../components/DashBoard/ProductManage/ProductManage";
import AddNewProduct from "../components/DashBoard/AddNewProduct/AddNewProduct";
import StoreDetails from "../Pages/StoreDetails/StoreDetails";

import Wishlist from "../Pages/Wishlist/Wishlist";

import CheckoutPage from "../Pages/Checkout/CheckoutPage";
import AllUser from "../components/DashBoard/AllUser/AllUser";
import Order from "../components/DashBoard/Order/Order";
import ProductPage from "../components/ProductPage";
import ProductPage from "../components/ProductPage";
import DashboardLayout from './../Layout/DashBoardLayout';
import AllUser from './../components/DashBoard/AllUser/AllUser';
import Order from './../components/DashBoard/Order/Order';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../components/404/Error";
import Profile from "../components/DashBoard/ProfilePage/Profile";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
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
      }
      ,
      {
        path: "/storPage",
        element: <StorPage></StorPage>
      },
      {
        path: 'productPage',
        element: <ProductPage />
      },
      {
        path: 'productPage',
        element: <ProductPage/>
      },
      {
        path: "checkoutPage",
        element: <CheckoutPage />
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
      },
      {
        path: "checkoutPage",
        element: <CheckoutPage />
      },



  
      // dashboard route
      {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
          {
            path: "product",
            element: <PrivateRoute><ProductManage/></PrivateRoute>
          },
          {
            path: "addProduct",
            element: <PrivateRoute><AddNewProduct/></PrivateRoute>
          },
          {
            path: "user",
            element:<PrivateRoute> <AllUser/></PrivateRoute>
          },
          {
            path: "Order-List",
            element: <PrivateRoute><Order/></PrivateRoute>
          },
          {
            path: "profile",
            element: <PrivateRoute><Profile/></PrivateRoute>
          },
        
    ]
  },
]);



export default router;