import { useState } from "react";
import { useUserInfo } from "../../hook/useUserInfo";
import { useMutation } from "@tanstack/react-query";
import { UpdateAccountUser } from "../../Api/Api.auth";
import main from "../../assets/main.jpg";

function UserInfor() {
  const userInfor = useUserInfo();
  const isVerifyEmailColor = userInfor.isVerifyEmail === "1" ? "green" : "";
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);

  const [firstName, setUserfirstName] = useState(`${userInfor.firstName}`);
  const [lastName, setUserLastName] = useState(`${userInfor.lastName}`);
  const [email, setUserEmail] = useState(`${userInfor.email}`);

  const { mutate } = useMutation({
    mutationFn: ({ firstName, lastName, email, id }) => {
      return UpdateAccountUser({ firstName, lastName, email }, id);
    },
  });
  const saveDisplay = isUpdateProfile ? "flex" : "hidden";
  const handleUpdateUserInfor = () => {
    console.log(userInfor);
    mutate(
      { id: userInfor.id, firstName, lastName, email },
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
      <div
        className="max-w-screen-xl bg-[#294659]  mx-auto my-7 mt-[150px] lg:px-20 rounded-xl"
        id="contact"
      >
        <img
          src={main}
          alt=""
          className="w-[200px] h-[156px] rounded-full  m-auto"
        />
        <div className="w-full p-8 my-4 mx-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
          <div className="flex">
            <h1 className="text-5xl text-white font-bold ">
              Thông Tin Cá Nhân
            </h1>
          </div>
          <div className=" gap-5 mt-5 md:grid-cols-2">
            <p>FirstName</p>
            <input
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline"
              type="text"
              value={firstName}
              onChange={(e) => {
                setIsUpdateProfile(true);
                setUserfirstName(e.target.value);
              }}
            />
            <p className="mt-5">LastName</p>

            <input
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline"
              type="text"
              value={lastName}
              onChange={(e) => {
                setIsUpdateProfile(true);
                setUserLastName(e.target.value);
              }}
            />
            <p className="mt-5">Email</p>
            <input
              className="w-full mb-5 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline"
              type="text"
              value={email}
              onChange={(e) => {
                setIsUpdateProfile(true);
                setUserEmail(e.target.value);
              }}
            />
          </div>

          <span
            className={`${saveDisplay}  pb-9 text-white hover:text-mainColor-color_hover  text-lg cursor-pointer`}
            onClick={handleUpdateUserInfor}
          >
            Lưu
          </span>
        </div>
      </div>
    </div>
  );
}
export default UserInfor;
