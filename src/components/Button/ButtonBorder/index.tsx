import Spinner from "@/components/Loading/Spinner";
import React from "react";

interface ButtonBorderProps {
  isValid: boolean;
  loading?: boolean;
  text: string;
}

export default function ButtonBorder({
  isValid,
  loading,
  text,
}: ButtonBorderProps) {
  return (
    <button
      type="submit"
      disabled={!isValid}
      className={`text-base rounded-full py-2 px-8 font-medium transition-colors border
                  ${
                    isValid
                      ? "border-primary-500 hover:bg-primary-500 text-primary-500 hover:shadow-primary-300 hover:shadow-2xl hover:cursor-pointer hover:text-white"
                      : "border-doveGray-100 bg-slate-100 text-doveGray-300 cursor-not-allowed"
                  }`}>
      {loading ? <Spinner /> : text}
    </button>
  );
}
