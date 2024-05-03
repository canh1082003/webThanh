import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { CartProvider } from "react-use-cart";
export default function MainLayout() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
}
