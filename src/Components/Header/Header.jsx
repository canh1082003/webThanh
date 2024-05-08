import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/LogoVu.svg";

import UserInforHeader from "./UserInforHeader";
import CartHeader from "./CartHeader";

function Header() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(prevScrollY > currentScrollY);
    setPrevScrollY(currentScrollY);
  };
  const controls = useAnimation();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);
  useEffect(() => {
    controls.start({ opacity: visible ? 1 : 0 });
  }, [visible, controls]);

  return (
    <header className=" mt-[90px] w-full  ">
      <motion.div
        initial={{ opacity: 1 }}
        animate={controls}
        transition={{ opacity: { duration: 0.2 } }}
        className="group fixed top-0 right-0 left-0 z-50  bg-black py-5"
      >
        <div className="flex w-full items-center pb-4 justify-between   px-10 h-[50px] ">
          <Link to={"/"}>
            <p className="font-bold text-3xl text-red-700 mt-3">Duy Shop</p>
          </Link>
          <div className="flex gap-10 mr-22 text-white">
            <Link
              to={"/"}
              className="py-2 text-2xl font-bold hover:text-gray-500"
            >
              Trang Chủ
            </Link>
            <Link
              to={"/danhsach"}
              className="py-2 text-2xl font-bold hover:text-gray-500"
            >
              Sản Phẩm
            </Link>
            <Link
              to={"/danhsach"}
              className="py-2 text-2xl font-bold hover:text-gray-500"
            >
              Hỗ trợ
            </Link>
            <Link
              to={"/danhsach"}
              className="py-2 text-2xl font-bold hover:text-gray-500"
            >
              Liên Hệ
            </Link>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-3 items-center"></div>
            <UserInforHeader />
            <CartHeader />
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
