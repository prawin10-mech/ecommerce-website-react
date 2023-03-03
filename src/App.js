import Nav from "./components/Nav";
import Title from "./components/Title";
import Item from "./components/Item";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Nav />
      <Title />
      <Item />
      <Footer />
    </CartProvider>
  );
}

export default App;
