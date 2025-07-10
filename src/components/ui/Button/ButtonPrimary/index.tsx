import Spinner from "@/components/Loading/Spinner";
import React from "react";

interface ButtonBorderProps {
  isValid: boolean;
  loading?: boolean;
  text: string;
  wFull?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function ButtonPrimary({
  isValid,
  loading,
  text,
  wFull,
  onClick,
}: ButtonBorderProps) {
  return (
    <button
      onClick={onClick}
      disabled={!isValid}
      className={`sm:text-base text-xs ${
        wFull && "w-full"
      } rounded-md py-2 md:px-8 px-4 font-medium transition-all 
                  ${
                    isValid
                      ? " bg-primary-500 text-primary-50 hover:shadow-primary-300 hover:opacity-90 hover:shadow-2xl hover:cursor-pointer "
                      : "border-doveGray-100 bg-slate-100 text-doveGray-300 cursor-not-allowed"
                  }`}>
      {loading ? <Spinner /> : text}
    </button>
  );
}
