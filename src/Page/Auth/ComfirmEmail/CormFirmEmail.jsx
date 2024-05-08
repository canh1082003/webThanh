import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { VerifyAccount } from "../../../Api/Api.auth";

function CormFirmEmail() {
  const { email } = useParams();
  console.log(email);
  const [otp, setOtp] = useState("");
  const { mutate } = useMutation({
    mutationFn: (body) => VerifyAccount(body),
  });

  const handleSubmit = () => {
    mutate(
      { verifyEmailToken: otp },
      {
        onSuccess: () => {
          window.location.href = `/login`;
        },
      }
    );
  };
  return (
    // <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
    //   <div class="max-w-xl px-5 text-center">
    //     <h2 class="mb-2 text-[42px] font-bold text-zinc-800">
    //       Check your inbox
    //     </h2>

    //     <p class="mb-2 text-lg text-zinc-500">
    //       We are glad, that you’re with us ? We’ve sent you a verification link
    //       to the email address
    //       <span class="font-medium text-indigo-500">{email}</span>.
    //     </p>
    //     <input
    //       value={otp}
    //       onChange={(event) => setOtp(event.target.value)}
    //       type="text"
    //       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       placeholder="Verify OTP"
    //       required
    //     />

    //     <span
    //       onClick={handleSubmit}
    //       class="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
    //     >
    //       Send
    //     </span>
    //   </div>
    // </div>
    <div className="flex items-center justify-center flex-col mt-[200px] mb-10">
      <section className="max-w-2xl mx-auto bg-white">
        <div className="h-[200px] bg-[#365CCE] w-full text-white flex items-center justify-center flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1px] bg-white"></div>
            <div className="w-10 h-[1px] bg-white"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
              THANKS FOR SIGNING UP!
            </div>
            <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize px-10">
              Verify your ${email}
            </div>
          </div>
        </div>
        <main className="mt-8 px-5 sm:px-10">
          <input
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Verify OTP"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 mb-10 py-2 mt-6 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
          >
            Verify email
          </button>
        </main>
      </section>
    </div>
  );
}

export default CormFirmEmail;
