import { Link } from "react-router-dom";
import Face from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

function Footer() {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="grid grid-cols-12 mx-10 py-10 gap-7">
          <div className="col-span-3 text-black">
            <h1 className="font-bold text-lg pb-3">Tìm Hiểu Thêm</h1>
            <ul>
              <li>Giới Thiệu</li>
              <li>Sản Phẩm</li>
            </ul>
          </div>
          <div className="col-span-4 text-black">
            <li>
              Trà sữa, một thức uống phổ biến từ các quán street food đến nhà
              hàng sang trọng, là sự kết hợp tinh tế giữa trà thơm và sữa béo
              ngậy. Hòa quyện vị ngọt của sữa và vị đắng nhẹ của trà, trà sữa
              mang lại cảm giác thư giãn và phấn khích đồng thời.
            </li>
          </div>
          <div className="col-span-5">
            <div className="flex ml-[300px]">
              <Link to="https://www.facebook.com/pvt17082003">
                <img src={Face} alt="" width={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
