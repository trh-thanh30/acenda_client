import Spinner from "@/components/Loading/Spinner";
import React from "react";

interface ButtonBorderProps {
  isValid: boolean;
  loading?: boolean;
  text: string;
}

export default function ButtonPrimary({
  isValid,
  loading,
  text,
}: ButtonBorderProps) {
  return (
    <button
      type="submit"
      disabled={!isValid}
      className={`text-base rounded-md py-2 px-8 font-medium transition-all 
                  ${
                    isValid
                      ? " bg-primary-500 text-primary-50 hover:shadow-primary-300 hover:opacity-90 hover:shadow-2xl hover:cursor-pointer "
                      : "border-doveGray-100 bg-slate-100 text-doveGray-300 cursor-not-allowed"
                  }`}>
      {loading ? <Spinner /> : text}
    </button>
  );
}
