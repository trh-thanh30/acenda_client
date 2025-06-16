import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

import heartIC from "@/../public/heart.svg";
import hotelIMG from "@/../public/hotelImg.png";
import Link from "next/link";

export default function HotelItem() {
  return (
    <Link href="/hotel" className="w-full h-full relative">
      <Image
        src={hotelIMG}
        alt="tour image"
        className="md:h-[380px] h-[300px] w-full object-cover"
      />
      <button className="absolute top-3 right-3 hover:text-red-500 cursor-pointer">
        <Image alt="heart ic" src={heartIC} />
      </button>
      <div className="absolute top-3 left-3 py-1 px-2 rounded-md bg-doveGray-0">
        <span className="text-xs text-midnightBlue-950 font-medium">10%</span>
      </div>
      <div className="absolute bottom-0 bg-[#70707066] w-full p-4 ">
        <h6 className="text-sm  text-doveGray-0 text-nowrap text-left">
          Vinpearl Resort 
        </h6>
        <p className="flex items-center text-xs text-doveGray-0 mt-2">
          <FiMapPin />
          <span className="ml-1">Hanoi, Vietnam</span>
        </p>
        <hr className="my-3 border-doveGray-0" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-doveGray-0">2.945.000đ</p>
          <p className="text-sm flex items-center gap-1 ">
            <CiStar className="text-yellow-500" />
            <span className="text-sm text-doveGray-0">5.0</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
