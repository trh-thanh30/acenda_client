import React from "react";
import Image from "next/image";
import logoWhite from "@/../public/logo-white.svg";
import localFont from "next/font/local";
const signatureFont = localFont({
  src: "../../font/NVN-Motherland-Signature.ttf",
  variable: "--font-signature",
  display: "swap",
});
export default function ImageAuth() {
  return (
    <section className="bg-primary-500 items-center justify-center flex opacity-95">
      <div className="flex flex-col items-center gap-1">
        <Image src={logoWhite} alt="logo" width={400} height={400} />
        <span className="text-4xl font-bold text-primary-50  uppercase">
          Acenda
        </span>
        <span className={`${signatureFont.className} text-primary-50 text-lg`}>
          Journey Of Youth
        </span>
        <span className="text-sm text-primary-50">Let Acenda accompany you on your trips.</span>
      </div>
    </section>
  );
}
