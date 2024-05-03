import Face from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

function Footer() {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="grid grid-cols-12 mx-10 py-10 gap-7">
          <div className="col-span-4 text-black">
            <h1 className="font-bold text-lg pb-3">About Us</h1>
            <p>
              We are an online aquarium shop specializing in providing various
              types of freshwater aquarium fish, shrimp, and imported aquarium
              fish.
            </p>
          </div>
          <div className="col-span-3 text-black">
            <h1 className="font-bold text-lg pb-3">Customer Support</h1>
            <ul>
              <li>Track Order</li>
              <li>Contact Us</li>
              <li>Shipping Policy</li>
            </ul>
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
              <img src={Face} alt="" width={40} />
              <img src={Instagram} alt="" width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
