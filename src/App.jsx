import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

import Layout from "./component/Layout";

import Listing from "./component/Listing";
import Details from "./component/Details";
import Cart from "./component/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Listing /> },

        { path: "/listing", element: <Listing /> },
        { path: "/listing/:category_slug", element: <Listing /> },
        { path: "/details/:product_id", element: <Details /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}
