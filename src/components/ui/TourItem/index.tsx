import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { PiTimer } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import tourImg from "@/../public/img-tour.png";
export default function TourItem() {
  return (
    <Link
      href="/tour"
      className="h-full bg-doveGray-0 w-fit hover:shadow-md hover:cursor-pointer rounded-md">
      <Image
        src={tourImg}
        loading="lazy"
        alt="tour image"
        className="object-cover rounded-t-md"
      />
      <div className="flex flex-col md:p-3 p-2">
        <h5 className="text-midnightBlue-950 md:text-sm  text-xs font-medium text-center">
          Tour Hạ Long 4 ngày 3 đêm
        </h5>
        <div className="flex md:flex-row flex-col items-center justify-between md:mt-3 mt-1">
          <div className="flex gap-1 items-center text-xs text-doveGray-500">
            <PiTimer />
            <span>3 ngày 2 đêm</span>
          </div>
          <div className="flex gap-1 text-xs text-yellow-500 ">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
        </div>
        <hr className="md:my-3 my-2 border-doveGray-200" />
        <div className="flex items-center md:justify-between justify-center ">
          <h6 className="md:text-sm text-xs text-midnightBlue-950 font-medium">
            2.945.000đ
          </h6>
          <div className="md:block hidden">
            <Link
              className="text-primary-500 flex items-center gap-1  text-sm   text-nowrap"
              href="/tour">
              More Details
              <RxArrowTopRight />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
