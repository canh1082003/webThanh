import { useState } from "react";
import { useCart } from "react-use-cart";
import { formatPrice } from "../../helper/formatPrice";
import { Link } from "react-router-dom";

function CartHeader() {
  const [showPopover, SetShowPopover] = useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  return (
    <div className="">
      <div
        className="flex gap-3 items-center border border-white hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text p-2 hover:border-mainColor-color_hover rounded-full cursor-pointer"
        onClick={() => SetShowPopover(!showPopover)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>

        <span className="font-bold  ">Cart</span>
        <div className="   rounded-full px-2  bg-white text-black">
          {totalUniqueItems}
        </div>
      </div>
      {showPopover && (
        <div className="absolute  grid grid-cols-3  top-0 right-0 w-screen h-screen">
          <div className="col-span-2 bg-black  bg-opacity-80"></div>
          <div className="col-span-1 py-7 px-5 bg-white text-black">
            <div className=" flex justify-between  ">
              <div className=" mb-5 font-bold text-2xl ">Cart</div>

              <div onClick={() => SetShowPopover(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            {isEmpty && (
              <div className="w-full ml-[160px] ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjmkIdnfe6jp3_eEG7WOuqzOWq8naU-G42JY2DazwD-Tdt_qwqhbS5A9sRTUY-7SsDB0&usqp=CAU"
                  alt=""
                />
              </div>
            )}
            {items.slice(0, 8).map((item) => (
              <tr key={item.id}>
                <td className="align-middle ">
                  <img
                    src={item.imgUrl}
                    alt=""
                    className="w-[100px] rounded-full"
                  />
                </td>
                <td className=" pb-3 px-6  ">{item.name}</td>
                <td className=" py-2 px-2 ">
                  {formatPrice(item.price * item.quantity)}
                </td>
                <td className="  flex  px-5 py-6">
                  <button
                    className="text-md border border-black hover:bg-mainColor-color_hover py-[1px] px-1"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <div className="text-md border-t border-b  border-black py-[1px] px-1 ">
                    {item.quantity}
                  </div>
                  <button
                    className="text-md border border-black hover:bg-mainColor-color_hover py-[1px] px-1"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
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
                    className="w-6 h-6 cursor-pointer hover:stroke-gray-600"
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
            {!isEmpty && (
              <div className="flex justify-between items-center mt-8">
                <div className="   text-center  text-lg">
                  Tổng sản phẩm : {formatPrice(cartTotal)}
                </div>
                <Link
                  to={"/pay"}
                  className=" px-3 py-4 text-center bg-black text-white hover:bg-mainColor-color_hover hover:text-mainColor-color_hover_text cursor-pointer"
                >
                  Shop now
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartHeader;
