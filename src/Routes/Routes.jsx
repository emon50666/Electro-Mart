import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../components/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Error />,
      children:[
        {
            index: true,
            element: <Home />
        }
      ]
    },
  ]);

  
  export default router;