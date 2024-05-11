import main2 from "../../assets/product/main4.avif";

import main from "../../assets/main1.jpg";
import p1 from "../../assets/product/trasua1.png";
import p2 from "../../assets/product/trasua2.png";
import p3 from "../../assets/product/trasua3.png";
import ok from "../../assets/ok.png";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlidesImage } from "./SlideImageHeader";

function HomePage() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const NextSlide = () => {
  //   const isLastSlide = currentIndex === SlidesImage.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };
  // const changeSlideAuto = () => {
  //   NextSlide();
  // };
  // useEffect(() => {
  //   const SlideChangeImage = setTimeout(changeSlideAuto, 4000);
  //   return () => clearTimeout(SlideChangeImage);
  // });
  return (
    <div className="">
      <div className="  rounded-2xl   mx-22 bg-gradient-to-b from-mainColor-color_01042D to-mainColor-color_D9D9D9 shadow-lg ">
        <div className="  flex">
          <div className="flex-1 mt-[200px] ml-[200px]">
            <p className="text-3xl uppercase font-bold pb-3">Trà Sữa Bông</p>
            <p className="text-3xl uppercase font-bold pb-10">
              Chuẩn Vị Trà Sữa
            </p>
            <Link
              to="danhsach"
              className="text-lg  bg-white font-bold text-black px-5 py-4 rounded-lg hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text"
            >
              Mua Ngay
            </Link>
          </div>
          <div className="flex">
            <img src={ok} alt="" className="w-[700px] h-[600px]" />
          </div>
        </div>

        <div className=" w-full relative ">
          <img src={main2} alt="" className="w-full h-[500px]" />
          <div className="absolute  text-xl left-10 top-[100px] font-bold">
            <p className=" text-xl uppercase font-bold pb-3 ">
              Chào mừng bạn đến với chúng tôi!
            </p>
            <p className="mr-60 leading-7">
              Trà sữa Bông là một trong những loại thức uống phổ biến và được ưa
              chuộng rộng rãi ở nhiều quốc gia trên thế giới, đặc biệt là ở châu
              Á. Với hương vị đặc trưng và sự đa dạng trong cách pha chế, trà
              sữa Bông đã trở thành một biểu tượng của văn hóa đô thị hiện đại.
            </p>
          </div>
          <div className="mt-10  ">
            <h1 className="font-bold text-5xl  text-center">
              Các Sản Phẩm Mới
            </h1>
            <div className="flex mx-20">
              <div className="flex-1 mt-20">
                <img src={p1} alt="" />
              </div>
              <div className="flex-1 mt-20">
                <img src={p2} alt="" />
              </div>
              <div className="flex-1 mt-20">
                <img src={p3} alt="" />
              </div>
            </div>
            <div className="mb-10">
              <Link to="/danhsach">
                <p className="mt-10 text-center p-3 rounded-full hover:bg-black hover:text-white bg-white text-black">
                  Shop Now
                </p>
              </Link>
            </div>
          </div>
          <img src={main} alt="" className="w-full  mt-10" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
