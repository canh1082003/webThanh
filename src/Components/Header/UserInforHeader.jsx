import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserInfo } from "../../hook/useUserInfo";

function UserInforHeader() {
  const [showPopover, SetShowPopover] = useState(false);
  const user = useUserInfo();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("atk");
  };
  return (
    <>
      {!user && (
        <Link
          to={"/login"}
          className="flex text-white gap-1 items-center hover:underline"
        >
          <span className="font-bold text-black">Đăng Nhập</span>
        </Link>
      )}
      {user && (
        <div
          className="relative flex gap-3 items-center hover:underline cursor-pointer"
          onClick={() => SetShowPopover(!showPopover)}
        >
          <div className=" bg-mainColor-color_D9D9D9  p-2 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 fill-mainColor-color_2D0000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <span className="font-bold text-black ">{`${user.firstName} ${user.lastName}`}</span>

          {showPopover && (
            <div className="bg-gray-100 absolute top-12 w-48 ">
              <Link to={"profile"}>
                <div className="py-3 px-1 border-b text-black hover:bg-gray-200">
                  Thông Tin Người Dùng
                </div>
              </Link>
              {user && user.role === "admin" && (
                <div className="py-3 px-1 border-b text-black hover:bg-gray-200">
                  <Link to={"/admin"} className="font-bold">
                    Danh sách sản phẩm
                  </Link>
                </div>
              )}

              <div
                className="px-1 py-3 border-b text-black hover:bg-gray-200"
                onClick={handleLogout}
              >
                <Link to={"/login"}>Đăng Xuất</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default UserInforHeader;
