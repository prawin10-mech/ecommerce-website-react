import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import Title from "./components/Layout/Title";
import Item from "./components/Items/Item";
import Footer from "../src/components/Layout/Footer";
import CartProvider from "./store/CartProvider";

//routes
import About from "./components/Routes/About";
import Home from "./components/Routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Nav />
        <Title />
        <Home />
        <Footer />
      </CartProvider>
    ),
  },
  {
    path: "store",
    element: (
      <CartProvider>
        <Nav />
        <Title />
        <Item />
        <Footer />
      </CartProvider>
    ),
  },
  {
    path: "about",
    element: (
      <CartProvider>
        <Nav />
        <Title />
        <About />
        <Footer />
      </CartProvider>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
