import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.svg";
import localFont from "next/font/local";
const signatureFont = localFont({
  src: "../../font/NVN-Motherland-Signature.ttf",
  variable: "--font-signature",
  display: "swap",
});
export default function Logo() {
  return (
    <Link className="flex items-center gap-3" href={"/"}>
      <Image src={logo} alt="logo"></Image>
      <div className="flex flex-col gap-1">
        <span className="text-base font-bold text-midnightBlue-900 font-shopee uppercase">
          Acenda
        </span>
        <span
          className={`text-[8px] ${signatureFont.className} text-midnightBlue-900`}>
          Journey Of Youth
        </span>
      </div>
    </Link>
  );
}
