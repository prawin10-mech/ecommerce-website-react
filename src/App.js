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
import Contact from "./components/Routes/Contact";
import ProductDetails from "./components/Routes/ProductDetails";
import Login from "./components/Routes/Login";

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
  {
    path: "contact",
    element: (
      <CartProvider>
        <Nav />
        <Title />
        <Contact />
        <Footer />
      </CartProvider>
    ),
  },
  {
    path: "login",
    element: (
      <CartProvider>
        <Title />
        <Login />
        <Footer />
      </CartProvider>
    ),
  },
  {
    path: "products/:productId",
    element: (
      <CartProvider>
        <Nav />
        <Title />
        <ProductDetails />
        <Footer />
      </CartProvider>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
