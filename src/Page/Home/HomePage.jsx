import ImageMain from "../../assets/imageMain.png";
import Image1 from "../../assets/Image.png";
import Collection from "../../assets/NewCollection.png";
import Luffy from "../../assets/Luffy.png";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="mt-[-100px]">
      <div className="  rounded-2xl mb-20  mx-22 bg-gradient-to-b from-mainColor-color_01042D to-mainColor-color_D9D9D9 shadow-lg ">
        <div className="flex justify-center gap-3">
          <img src={ImageMain} alt="" className="  relative" />
          <div className=" my-auto absolute bottom-[15rem] left-[150px]">
            <p className="text-5xl uppercase font-bold pb-3">Model world of </p>
            <p className="text-5xl  uppercase font-bold pb-5">uv model</p>
            <Link
              to={"danhsach"}
              className=" text-lg bg-white font-bold text-black px-5 py-4 rounded-lg hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="mt-3 w-full relative ">
          <img src={Image1} alt="" />
          <div className="absolute left-10 top-20">
            <p className=" text-xl uppercase font-bold pb-3 ">
              Welcome to our world
            </p>
            <p className="mr-60 leading-7">
              With a passion for recreating historical battles, we are pleased
              to introduce a special product. With precision and exquisite
              detail, each USS Missouri model is a true work of art. From the
              sturdy structure of the ship to the powerful fortresses on its
              surface, every detail is faithfully recreated, ensuring that you
              will feel like you are standing on a real ship. With the right
              size and proportions, the UV MODEL model is a great addition to
              any historical or naval collection. Whether you are a history
              buff, a model collector, or someone looking for a unique gift, the
              UV MODEL model will be a must-have. Order today and bring a piece
              of history into your living space.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-5xl text-center">New Collection</h1>
            <div className="ml-14 mt-20">
              <img src={Collection} alt="" />
            </div>
          </div>
          <img src={Luffy} alt="" className="w-[2000px] mt-10" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
