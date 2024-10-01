import {
  createBrowserRouter,

} from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ComparePage from "../Pages/ComparePage/ComparePage";
import DashboardLayout from "../Layout/DashBoardLayOut";
import StoresPage from "../Pages/StoresPage/StoresPage";
import ProductManage from "../components/DashBoard/ProductManage/ProductManage";
import AddNewProduct from "../components/DashBoard/AddNewProduct/AddNewProduct";

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
        path: "/storesPage",
        element: <StoresPage/>
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
        path:'/dashboard',
        element: <DashboardLayout/>,
        children:[
          {
            path: "product",
            element: <ProductManage/>
          },
          {
            path: "addProduct",
            element: <AddNewProduct />
          }

        ]
      },
]);





export default router;