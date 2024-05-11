import { Link } from "react-router-dom";
import Input from "../../../Components/Input";
import { useForm } from "react-hook-form";
import { getRule } from "../../../util/rule";
import main from "../../../assets/main1.jpg";

import { useMutation } from "@tanstack/react-query";
import { LoginAccount } from "../../../Api/Api.auth";
import { notification } from "antd";
import { useState } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const eye = () => {
    setShowPassword(!showPassword);
  };

  const rule = getRule();
  const LogionAccountMutation = useMutation({
    mutationFn: (body) => LoginAccount(body),
  });

  const onSubmit = handleSubmit((data) =>
    LogionAccountMutation.mutate(data, {})
  );

  return (
    <div className="grid grid-cols-2 pb-16">
      <div className="col-span-1 hidden lg:block">
        <img src={main} alt="" className="w-[100%] pt-10 h-[600px]" />
      </div>
      <div className="lg:col-span-1 col-span-2 w-full mb-10">
        <form
          className="mx-32 pt-20 text-mainColor-color_D9D9D9"
          onSubmit={onSubmit}
          noValidate
        >
          <div className=" w-full relative flex justify-between items-center  ">
            <span className="text-3xl font-text  font-semibold capitalize ">
              Đăng Nhập
            </span>
            <p className="mt-2">
              Bạn Chưa Có Tài Khoản?
              <Link
                to={"/register"}
                className=" pl-1 text-red-500 cursor-pointer  hover:opacity-50"
              >
                Đăng Kí
              </Link>
            </p>
          </div>
          <div className="mt-7 ">
            <Input
              name="email"
              type="Email"
              placeholder="Email"
              rules={rule.email}
              register={register}
              errorMessage={errors.email?.message}
            />

            <div>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mật Khẩu"
                autoComplete="on"
                rules={rule.password}
                register={register}
                errorMessage={errors.password?.message}
              />
              <div className="flex items-center gap-2 mb-3">
                <input type="checkbox" className="w-4 h-4" onClick={eye} />
                Hiển Thị Mật Khẩu
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full border py-3 my-2 hover:text-mainColor-color_hover hover:bg-mainColor-color_hover_text hover:border-mainColor-color_hover uppercase"
          >
            Đăng Nhập
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
