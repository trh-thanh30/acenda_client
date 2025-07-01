import HotelItem from "@/components/ui/HotelItem";
import Image from "next/image";
import React from "react";
import test from "@/../public/hotelImg.png";
import endowImg from "@/../public/endow.jpg";
import localFont from "next/font/local";
import { FaArrowRightLong } from "react-icons/fa6";

const signatureFont = localFont({
  src: "../../../font/NVN-Motherland-Signature.ttf",
  variable: "--font-signature",
  display: "swap",
});
export default function Page() {
  return (
    <div className="md:mt-44 mt-48">
      <h1 className="text-midnightBlue-950 md:text-3xl text-2xl uppercase font-semibold">
        prevalent hotels
      </h1>
      <div className="grid xl:grid-cols-5 sm:grid-cols-3  grid-cols-2 md:gap-4 gap-3 items-center h-full md:mt-10 mt-8">
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
      </div>

      <div className="md:mt-20 mt-10">
        <h3 className="md:text-xl text-lg font-medium text-smaltBlue-500 text-center">
          RELAX - RECHARGE - DISCOVER
        </h3>
        <h2 className="md:text-3xl text-xl font-semibold text-midnightBlue-950 text-center uppercase mt-2">
          hotels by location
        </h2>
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {/* Item */}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={test}
              alt="Quy Nhơn"
              className="w-full h-[200px] object-cover"
              width={488}
              height={287}
            />
            <div className="absolute bottom-2 left-2 ">
              <p className="font-bold md:text-lg text-base text-doveGray-0 ">Quy Nhơn</p>
              <p className="md:text-sm text-xs text-[#FFC515]">138 khách sạn</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={test}
              alt="Quy Nhơn"
              className="w-full h-[200px] object-cover"
              width={488}
              height={287}
            />
            <div className="absolute bottom-2 left-2 ">
              <p className="font-bold md:text-lg text-base text-doveGray-0 ">Quy Nhơn</p>
              <p className="md:text-sm text-xs text-[#FFC515]">138 khách sạn</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={test}
              alt="Quy Nhơn"
              className="w-full h-[200px] object-cover"
              width={488}
              height={287}
            />
            <div className="absolute bottom-2 left-2 ">
              <p className="font-bold md:text-lg text-base text-doveGray-0 ">Quy Nhơn</p>
              <p className="md:text-sm text-xs text-[#FFC515]">138 khách sạn</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={test}
              alt="Quy Nhơn"
              className="w-full h-[200px] object-cover"
              width={488}
              height={287}
            />
            <div className="absolute bottom-2 left-2 ">
              <p className="font-bold md:text-lg text-base text-doveGray-0 ">Quy Nhơn</p>
              <p className="md:text-sm text-xs text-[#FFC515]">138 khách sạn</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={test}
              alt="Quy Nhơn"
              className="w-full h-[200px] object-cover"
              width={488}
              height={287}
            />
            <div className="absolute bottom-2 left-2 ">
              <p className="font-bold md:text-lg text-base text-doveGray-0 ">Quy Nhơn</p>
              <p className="md:text-sm text-xs text-[#FFC515]">138 khách sạn</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={test}
              alt="Quy Nhơn"
              className="w-full h-[200px] object-cover"
              width={488}
              height={287}
            />
            <div className="absolute bottom-2 left-2 ">
              <p className="font-bold md:text-lg text-base text-doveGray-0 ">Quy Nhơn</p>
              <p className="md:text-sm text-xs text-[#FFC515]">138 khách sạn</p>
            </div>
          </div>
          {/* Copy tương tự cho các địa điểm khác */}
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <h2 className="text-midnightBlue-950 md:text-3xl text-lg uppercase font-semibold">
          Special offer package
        </h2>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gird-cols-1  gap-4 md:mt-10 mt-8">
          {/* Item  1*/}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={endowImg}
              alt="Endow Img"
              className="w-full h-full object-cover"
              width={488}
              height={287}
            />
            <div className="absolute top-0 left-6">
              <h4
                className={`${signatureFont.className} text-midnightBlue-950 text-xl mt-5`}>
                Exclusive promotions
              </h4>
              <div className="md:mt-4 mt-2 md:space-y-2 space-y-1 flex flex-col">
                <span className="text-base font-medium text-midnightBlue-950">
                  Explore Heritage from a Perspective
                </span>
                <span className="md:text-2xl text-xl font-semibold text-midnightBlue-950">
                  GOLDEN HA LONG HOTEL
                </span>
              </div>
              <button className="md:mt-7 mt-1 md:py-2 md:px-4 py-1 px-3 bg-doveGray-0 rounded-full text-primary-500 flex items-center gap-1">
                <span className="text-sm font-semibold">Only: </span>
                <span className="md:text-lg text-base font-semibold">820.000vnđ</span>
              </button>
            </div>
          </div>
          {/* Item  2*/}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={endowImg}
              alt="Endow Img"
              className="w-full h-full object-cover"
              width={488}
              height={287}
            />
            <div className="absolute top-0 left-6">
              <h4
                className={`${signatureFont.className} text-midnightBlue-950 text-xl mt-5`}>
                Have fun all summer
              </h4>
              <div className="md:mt-4 mt-2 space-y-2 flex flex-col">
                <span className="text-base font-medium text-midnightBlue-950">
                  Resort Discounts
                </span>
                <span className="md:text-2xl text-xl font-semibold text-midnightBlue-950">
                  UP TO 20%
                </span>
              </div>
              <button className="md:mt-7 mt-1 group hover:cursor-pointer hover: text-base  rounded-md text-primary-500 flex items-center gap-2">
                <span className=" font-semibold">See details</span>
                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          {/* Item 3 */}
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={endowImg}
              alt="Endow Img"
              className="w-full h-full object-cover"
              width={488}
              height={287}
            />
            <div className="absolute top-0 left-6">
              <h4 className={` text-midnightBlue-950 text-xl mt-5`}>
                Diamond Sea Hotel
              </h4>
              <div className="md:mt-4 mt-2 space-y-2 flex flex-col">
                <span className="md:text-base text-sm font-semibold text-midnightBlue-950">
                  PROMOTION PACKAGE FOR COUPLES
                </span>
              </div>
              <button className="md:mt-3 md:mb-7 mt-2 md:py-2 md:px-4 py-1 px-3 mb-2 bg-doveGray-0 rounded-full text-primary-500 flex items-center gap-1">
                <span className="text-sm font-semibold">Full package: </span>
                <span className="text-lg font-semibold">7.550.000vnđ</span>
              </button>
              <span className="text-sm text-smaltBlue-500 font-medium">Expiry date: 01/06 - 30/06</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <h2 className="md:text-3xl text-xl text-midnightBlue-950 uppercase font-semibold">
          viewed recently
        </h2>
      </div>
    </div>
  );
}
