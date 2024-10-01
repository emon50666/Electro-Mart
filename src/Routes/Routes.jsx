import {
  createBrowserRouter,

} from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ComparePage from "../Pages/ComparePage/ComparePage";
import StorPage from "../Pages/StorPage/StorPage";
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
      }
      ,
      {
        path: "/storPage",
        element:<StorPage></StorPage>
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

]);





export default router;