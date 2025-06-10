"use client";
import localFont from "next/font/local";
import Image from "next/image";
import React, { useState } from "react";

import thumbnail from "@/../public/thumbnail.png";
import SearchTour from "../Search/SearchTour";
import SearchHotel from "../Search/SearchHotel";
import { LuHotel } from "react-icons/lu";
import { PiAirplaneInFlightLight } from "react-icons/pi";

const signatureFont = localFont({
  src: "../../../font/NVN-Motherland-Signature.ttf",
  variable: "--font-signature",
  display: "swap",
});

export default function Thumbnail() {
  const [choice, setChoice] = useState<string>("tour");
  return (
    <div className="-mx-12 relative">
      <Image
        src={thumbnail}
        alt="thumbnail"
        className="w-full object-cover opacity-60"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full items-center justify-center">
        <p
          className={`text-2xl font-semibold text-primary-500 ${signatureFont.className}`}>
          Journey Of Youth
        </p>
        <h1 className="mt-4 text-6xl text-midnightBlue-950 font-medium uppercase">
          waiting for us!
        </h1>
        <span className="text-smaltBlue-500 text-base font-medium mt-5">
          COMPLETE EXPERIENCE - AFFORDABLE PRICE
        </span>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4/5">
        <div className="relative">
          <div className="absolute left-0 -translate-y-1/2 flex items-center text-sm font-medium">
            <button
              onClick={() => setChoice("tour")}
              className={`px-8 py-2  rounded-tr-xs flex items-center gap-1 hover:opacity-95 cursor-pointer   ${
                choice === "tour"
                  ? "text-doveGray-0 bg-midnightBlue-950"
                  : "text-midnightBlue-950 bg-doveGray-0"
              }`}>
              <PiAirplaneInFlightLight />
              Tour
            </button>
            <button
              onClick={() => setChoice("hotel")}
              className={`px-8 py-2  rounded-tr-xs flex items-center gap-1  hover:opacity-95 cursor-pointer  ${
                choice === "hotel"
                  ? "text-doveGray-0 bg-midnightBlue-950"
                  : "text-midnightBlue-950 bg-doveGray-0"
              }`}>
              <LuHotel />
              Hotel
            </button>
          </div>
          {choice === "tour" && <SearchTour />}
          {choice === "hotel" && <SearchHotel />}
        </div>
      </div>
    </div>
  );
}
