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
    <div className="flex items-center justify-center flex-col rounded-xl mt-[200px]  mb-10">
      <section className="max-w-2xl mx-auto rounded-xl bg-white">
        <div className="h-[200px] bg-white w-full text-black px-28 flex items-center justify-center flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-center font-bold text-3xl tracking-widest ">
              E-mail Confirmation
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
          <p
            type="submit"
            onClick={handleSubmit}
            className="px-6 mb-10 text-center py-2 mt-6 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
          >
            Confirm email Adress
          </p>
        </main>
      </section>
    </div>
  );
}

export default CormFirmEmail;
