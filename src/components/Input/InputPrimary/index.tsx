import React from "react";

interface InputPrimaryProps {
  name?: string;
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  defaultValue?: string;
  disabled?: boolean;
}
export default function InputPrimary({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  defaultValue,
  name,
  disabled,
}: InputPrimaryProps) {
  return (
    <div className="space-y-1 w-full">
      <label className="text-sm font-medium text-midnightBlue-950" htmlFor={id}>
        {label}
      </label>
      <input
        name={name}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete="off"
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full  border-2 rounded-md p-2 outline-none text-sm transition-colors border-midnightBlue-100 mt-1 disabled:border-doveGray-100 disabled:bg-doveGray-100 disabled:text-doveGray-400 focus:border-midnightBlue-200 focus:shadow-midnightBlue-200 focus:shadow-xs placeholder:text-doveGray-400"
      />
    </div>
  );
}
