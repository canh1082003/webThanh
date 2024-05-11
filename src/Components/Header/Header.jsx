import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import main from "../../assets/main.jpg";

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
    <header className=" w-full">
      <motion.div
        initial={{ opacity: 1 }}
        animate={controls}
        transition={{ opacity: { duration: 0.2 } }}
        className="group  top-0 right-0 left-0 z-50  bg_product_rgba py-5"
      >
        <div className="mx-20 ">
          <div className="flex items-center pb-4 justify-between  bg-[#F9F871] rounded-full px-22 pr-10 h-[120px] mb-4 ">
            <div className="flex gap-10 mr-22 text-black relative rounded-full text-center m-auto ">
              <div className="flex relative">
                <div className=" flex mr-[150px]">
                  <div className="mx-20">
                    <Link
                      to={"/"}
                      className="py-2 text-2xl font-bold hover:text-gray-500 "
                    >
                      Trang Chủ
                    </Link>
                  </div>
                  <div className="flex-1">
                    <Link
                      to={"/danhsach"}
                      className="py-2 text-2xl font-bold hover:text-gray-500 "
                    >
                      Sản Phẩm
                    </Link>
                  </div>
                </div>
                <div className="flex ml-[50px] absolute top-[-52px] right-[340px]">
                  <Link to={"/"}>
                    <img
                      src={main}
                      alt=""
                      className="w-[200px] h-[156px] rounded-full  "
                    />
                  </Link>
                </div>
                <div className=" flex ml-[200px]">
                  <div className="mx-20">
                    <Link
                      to={"/danhsach"}
                      className="py-2 text-2xl font-bold hover:text-gray-500"
                    >
                      Hỗ trợ
                    </Link>
                  </div>
                  <div className="flex-1">
                    <Link
                      to={"/danhsach"}
                      className="py-2 text-2xl font-bold hover:text-gray-500"
                    >
                      Liên Hệ
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex gap-3 items-center"></div>
              <UserInforHeader />
              <CartHeader />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
