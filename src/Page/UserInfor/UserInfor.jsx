import { useState } from "react";
import { useUserInfo } from "../../hook/useUserInfo";
import { useMutation } from "@tanstack/react-query";
import { UpdateAccountUser } from "../../Api/Api.auth";
import logo123123 from "../../assets/Luffy.png";
import Image from "../../assets/imageMain.png";
function UserInfor() {
  const userInfor = useUserInfo();
  const isVerifyEmailColor = userInfor.isVerifyEmail === "1" ? "green" : "";
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [name, setUserName] = useState(
    `${userInfor.firstName} ${userInfor.lastName}`
  );
  const { mutate } = useMutation({
    mutationFn: ({ firstName, lastName, id }) => {
      return UpdateAccountUser({ firstName, lastName }, id);
    },
  });
  const saveDisplay = isUpdateProfile ? "flex" : "hidden";
  const handleUpdateUserInfor = () => {
    const [firstName, lastName] = name.split(" ");
    mutate(
      { firstName, lastName, id: userInfor.id },
      {
        onSuccess(data) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(data.data.updatedUser),
            window.location.reload()
          );
        },
      }
    );
  };

  return (
    <div>
      <div className=" grid grid-cols-2 mx-32 my-32">
        <div className="mb-10">
          <img src={Image} alt="" width={500} />
        </div>
        <div className="mt-14">
          <div className="bg-white relative shadow rounded-lg w-[70%] mx-auto">
            <div className="flex">
              <img
                src={logo123123}
                alt
                className="rounded-full  m-2 w-20 h-20 shadow-md  border-white transition duration-200 transform hover:scale-110"
              />
              <div className="align-middle mt-5">
                <div className="relative flex">
                  <input
                    type="text"
                    className="w-[150px] font-bold  text-xl outline-none text-black  "
                    value={name}
                    onChange={(e) => {
                      setIsUpdateProfile(true);
                      setUserName(e.target.value);
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 fill-black "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>

                <span
                  className={`${saveDisplay}   text-black hover:text-mainColor-color_hover  text-lg cursor-pointer`}
                  onClick={handleUpdateUserInfor}
                >
                  save
                </span>
              </div>
            </div>
            <div className="">
              <div className="my-5 px-6">
                <a href="#" className="text-black">
                  Connect with
                  <span className=" pl-1 font-bold">{userInfor.email}</span>
                </a>
              </div>
              <div className="w-full">
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  <div className="flex gap-2 border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full  hover:bg-gray-100 transition duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`text-${isVerifyEmailColor}-500 w-6 h-6`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Email Authentication
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserInfor;
