import { HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputWithIconProps {
  label?: string;
  icon: React.ReactNode;
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  error?: FieldError;
  errorMessage?: string;
  value?: string;
  disabled?: boolean;
  handleShowPassword?: () => void;
  showPassword?: boolean;
}

export default function InputWithIcon({
  disabled,
  label,
  icon,
  id,
  type,
  placeholder,
  register,
  error,
  errorMessage,
  value,
  handleShowPassword,
  showPassword,
}: InputWithIconProps) {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className={`text-sm ${error ? "text-red-500" : "text-doveGray-500"}`}>
          {label}
        </label>
        {id === "password" && (
          <button
            onClick={handleShowPassword}
            type="button"
            className="flex items-center gap-1 text-sm text-slate-400 hover:cursor-pointer hover:text-slate-900 outline-none">
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      <div className="relative w-full">
        <span
          className={`absolute inset-y-0 left-0 flex items-center px-3 border-r  ${
            error
              ? "text-red-400 border-red-200"
              : "text-doveGray-500 border-doveGray-200"
          }`}>
          {icon}
        </span>
        <input
          autoComplete="off"
          disabled={disabled}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          {...register(id)}
          className={`w-full pl-12 border-2 rounded-md p-2 outline-none text-sm transition-colors
                    ${
                      error
                        ? "border-red-200 focus:border-red-300 placeholder:text-red-400"
                        : "border-midnightBlue-100 disabled:border-doveGray-100 disabled:bg-doveGray-100 focus:border-midnightBlue-200 focus:shadow-midnightBlue-200 focus:shadow-xs placeholder:text-doveGray-400"
                    } ${
            disabled && "cursor-not-allowed bg-doveGray-50 text-doveGray-400"
          }`}
        />
      </div>
      {error && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
}
