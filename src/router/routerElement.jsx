import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../Page/Home/HomePage";
import Products from "../Page/Shop/Products";
import Cart from "../Page/Cart";
import Register from "../Page/Auth/Register/Register";
import Login from "../Page/Auth/Login/Login";
import ProductDetail from "../Page/Shop/ProductDetail";
import PayPal from "../Page/PayPal";
import CormFirmEmail from "../Page/Auth/ComfirmEmail/CormFirmEmail";
import ListProduct from "../Page/admin/ListProduct";
import UserInfor from "../Page/UserInfor";

function RouterElement() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<ListProduct />} />
        <Route path="/verify/:email" element={<CormFirmEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserInfor />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/danhsach" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/pay" element={<PayPal />} />
      </Route>
    </Routes>
  );
}

export default RouterElement;
