import React from "react";
import { Textarea } from "@headlessui/react";
export default function TextareaPrimary({
  id,
  name,
  placeholder,
  onChange,
  defaultValue,
  value,
}: {
  id?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}) {
  return (
    <Textarea
      id={id}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      className={
        "w-full border-2 border-midnightBlue-100 outline-none focus:border-midnightBlue-200 focus:shadow-xs rounded-md text-sm p-3 transition-colors placeholder:text-doveGray-400 focus:shadow-midnightBlue-200"
      }
      placeholder={placeholder}
    />
  );
}
