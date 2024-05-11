function Input({ placeholder, name, errorMessage, register, rules, type }) {
  return (
    <div className="group relative z-0 mb-6 w-full">
      <input
        type={type}
        placeholder=""
        {...register(name, rules)}
        className="peer block w-full appearance-none border-0 border-2  border-gray-500 bg-transparent py-2.5  text-sm text-mainColor-color_D9D9D9  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-mainColor-border"
      />
      <label
        htmlFor="avatar"
        className="absolute top-3 -z-10 origin-[0] px-3 -translate-y-6 scale-75 transform text-sm text-mainColor-text duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-mainColor-border dark:text-gray-400 peer-focus:dark:text-mainColor-border"
      >
        {placeholder}
      </label>
      <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">
        {errorMessage}
      </div>
    </div>
  );
}

export default Input;
