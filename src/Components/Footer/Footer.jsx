import { Link } from "react-router-dom";
import Face from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

function Footer() {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="grid grid-cols-12 mx-10 py-10 gap-7">
          <div className="col-span-4 text-black">
            <h1 className="font-bold text-lg pb-3">Liên Hệ Chúng Tôi</h1>
            <p>Huỳnh Quốc Duy</p>
          </div>

          <div className="col-span-3">
            <h1 className="font-bold text-lg pb-3">Learn More</h1>
            <ul>
              <li>About</li>
              <li>Products</li>
              <li>Some achievements of the farm</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h1 className="font-bold text-lg pb-3">Follow Us</h1>
            <div className="flex gap-3">
              <Link to="https://web.facebook.com/huynh.q.duy.716">
                <img src={Face} alt="" width={40} />
              </Link>
              <img src={Instagram} alt="" width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
