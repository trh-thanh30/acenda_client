import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { PiTimer } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import tourImg from "@/../public/img-tour.png";
export default function TourItem() {
  return (
    <div className="h-full bg-doveGray-0 w-fit hover:shadow-md hover:cursor-pointer rounded-md">
      <Image
        height={180}
        width={240}
        src={tourImg}
        alt="tour image"
        className="object-cover rounded-t-md"
      />
      <div className="flex flex-col p-3">
        <h5 className="text-midnightBlue-950 text-sm font-medium text-center">
          Tour Hạ Long 4 ngày 3 đêm
        </h5>
        <div className="flex items-center justify-between mt-3">
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
        <hr className="my-3 border-doveGray-200" />
        <div className="flex items-center justify-between text-sm">
          <h6>2.945.000đ</h6>
          <Link
            className="text-primary-500 flex items-center gap-1"
            href="/tour">
            More Details
            <RxArrowTopRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
