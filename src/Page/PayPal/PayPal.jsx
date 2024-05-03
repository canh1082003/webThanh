import { useCart } from "react-use-cart";
import { formatPrice } from "../../helper/formatPrice";

import { useEffect, useState } from "react";
function PayPal() {
  const [useInfor, setUseInfor] = useState(null);
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();
  useEffect(() => {
    const storeInfor = localStorage.getItem("userInfo");
    if (storeInfor) {
      const parsedData = JSON.parse(storeInfor);
      setUseInfor(parsedData);
    }
  }, []);

  return (
    <div className="px-52 py-10 bg-white text-black ">
      <h1 className="font-bold text-2xl pb-5">Product payment</h1>
      {useInfor && (
        <>
          <div className="">
            <span className="font-bold text-lg mt-10 text-orange-400">
              Name
            </span>
            <p className="border-b py-2">
              {useInfor.firstName} {useInfor.lastName}
            </p>
          </div>
          <div className="mt-4">
            <span className="font-bold text-lg mt-10 text-orange-400">
              Email
            </span>
            <p className="border-b py-2">{useInfor.email}</p>
          </div>
          {items.slice(0, 8).map((item) => (
            <tr key={item.id} className="">
              <td className="align-middle py-3">
                <img src={item.imgUrl} alt="" width={100} />
              </td>
              <td className="align-middle pb-3 px-6 text-mainColor-color_2D0000 ">
                {item.name}
              </td>
              <td className="align-middle py-5 px-5  text-mainColor-color_2D0000">
                {formatPrice(item.price * item.quantity)}
              </td>
              <td className="align-middle text-mainColor-color_2D0000 flex gap-2 pt-12 px-5 ">
                <button
                  className="text-2xl"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <div className="text-lg ">{item.quantity}</div>
                <button
                  className="text-2xl"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </td>
              <td className="align-middle py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-mainColor-color_2D0000"
                  onClick={() => removeItem(item.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </td>
            </tr>
          ))}
          <div className="flex gap-3">
            <div className="font-bold text-xl">Tổng thanh toán:</div>
            <div className="text-xl text-amber-600">
              {formatPrice(cartTotal)}
            </div>
          </div>
          <div className="mt-8 border px-3 py-4 text-center hover:text-mainColor-color_hover hover:bg-mainColor-color_hover_text hover:border-mainColor-color_hover  uppercase cursor-pointer">
            Buy now
          </div>
        </>
      )}
    </div>
  );
}

export default PayPal;
