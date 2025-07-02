import React from "react";

export default function InputRadio({
  icon,
  label,
  name,
  id,
  value,
  htmlFor,
}: {
  icon?: React.ReactNode;
  label: string;
  name?: string;
  id?: string;
  value?: string;
  htmlFor?: string;
}) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="flex items-center justify-between p-2 border-b border-b-doveGray-200 cursor-pointer hover:border-b-primary-500 transition-all duration-300 has-checked:border-b-primary-500">
        <div className="flex items-center gap-3">
          <span className="text-2xl text-midnightBlue-950">{icon}</span>
          <span className="text-sm font-medium text-midnightBlue-950">
            {label}
          </span>
        </div>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          className="accent-red-500"
        />
      </label>
    </>
  );
}
