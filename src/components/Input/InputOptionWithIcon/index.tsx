import { FieldError } from "react-hook-form";

interface InputWithIconProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  error?: FieldError;
  errorMessage?: string;
  icon?: React.ReactNode;
}

export default function InputOptionWithIcon({
  register,
  error,
  icon,
  errorMessage,
}: InputWithIconProps) {
  return (
    <div className="flex flex-col gap-1 mt-4 w-full ">
      <label htmlFor="gender" className="text-sm text-doveGray-500">
        Gender
      </label>
      <div className="relative w-full">
        <span
          className={`absolute inset-y-0 left-0 flex items-center px-3 border-r  ${
            error
              ? "text-red-400 border-red-200"
              : "text-doveGray-500 border-doveGray-200"
          }`}>
          {icon}
        </span>
        <select
          id="gender"
          {...register("gender")}
          className={`pl-[48px] w-full border-2 rounded-md p-3 outline-none text-sm transition-colors 
      border-doveGray-200 focus:border-midnightBlue-200 placeholder:text-doveGray-400 
      ${error ? "border-red-200 focus:border-red-300 placeholder:text-red-400" : ""}`}
          defaultValue="">
          <option value="" className="text-doveGray-400" disabled hidden>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{errorMessage}</p>}
    </div>
  );
}
