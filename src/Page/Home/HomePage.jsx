import main2 from "../../assets/main2.png";

import main from "../../assets/main.png";
import p1 from "../../assets/product/ipad-air-5_1.webp";
import p2 from "../../assets/product/samsung_galaxy.webp";
import p3 from "../../assets/product/xiaomi_redmi.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlidesImage } from "./SlideImageHeader";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const NextSlide = () => {
    const isLastSlide = currentIndex === SlidesImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const changeSlideAuto = () => {
    NextSlide();
  };
  useEffect(() => {
    const SlideChangeImage = setTimeout(changeSlideAuto, 4000);
    return () => clearTimeout(SlideChangeImage);
  });
  return (
    <div className="">
      <div className="  rounded-2xl   mx-22 bg-gradient-to-b from-mainColor-color_01042D to-mainColor-color_D9D9D9 shadow-lg ">
        <div className="w-full h-[700px] ">
          <div
            className="relative  w-full h-full bg-cover overflow-x-auto object-cover "
            style={{ backgroundImage: `url(${SlidesImage[currentIndex].url})` }}
          >
            <div className="absolute top-[200px] left-10">
              <p className="text-3xl uppercase font-bold pb-3">
                Mua Bán Điện Thoại Giá Rẻ
              </p>
              <p className="text-3xl uppercase font-bold pb-3">
                Giao Nhanh - Miễn Phí
              </p>
              <Link
                to="danhsach"
                className="text-lg bg-white font-bold text-black px-5 py-4 rounded-lg hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text"
              >
                Mua Ngay
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full relative ">
          <img src={main2} alt="" className="w-full h-[500px]" />
          <div className="absolute  text-xl left-10 top-[100px] font-bold">
            <p className=" text-xl uppercase font-bold pb-3 ">
              Chào mừng bạn đến với thế giới của chúng tôi!
            </p>
            <p className="mr-60 leading-7">
              Chào mừng đến với thế giới của công nghệ tiên tiến và sự kết hợp
              hoàn hảo giữa thiết kế đẳng cấp và hiệu suất mạnh mẽ. Bạn đã sẵn
              sàng khám phá một trải nghiệm điện thoại mới mẻ và đầy sức mạnh?
              Dòng điện thoại mới nhất của chúng tôi không chỉ là một công cụ
              liên lạc thông thường, mà còn là biểu tượng của sự sang trọng và
              tiện ích tuyệt vời. Với màn hình sắc nét và công nghệ hiển thị
              tiên tiến, mỗi chi tiết trên điện thoại đều được hiển thị rõ nét,
              từ hình ảnh sắc nét đến video chất lượng cao. Không chỉ là một
              công cụ để kết nối với thế giới xung quanh, điện thoại của chúng
              tôi còn là một người bạn đồng hành đáng tin cậy trong mọi cuộc
              phiêu lưu. Với tính năng camera chụp ảnh và quay video chất lượng
              cao, bạn có thể ghi lại những khoảnh khắc đáng nhớ mọi lúc, mọi
              nơi. Đặt hàng ngay hôm nay để sở hữu một chiếc điện thoại không
              chỉ là công cụ, mà còn là biểu tượng của phong cách và sức mạnh.
            </p>
          </div>
          <div className="mt-10  ">
            <h1 className="font-bold text-5xl  text-center">New Collection</h1>
            <div className="flex">
              <div className="ml-[105px] flex-1 mt-20">
                <img src={p1} alt="" />
              </div>
              <div className="flex-1 mt-20">
                <img src={p2} alt="" />
              </div>
              <div className="flex-1 mt-20">
                <img src={p3} alt="" />
              </div>
            </div>
            <Link to="/danhsach">
              <p className="mt-10 text-center p-3 rounded-full hover:bg-black hover:text-white bg-white text-black">
                Shop Now
              </p>
            </Link>
          </div>
          <img src={main} alt="" className="w-full  mt-10" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
