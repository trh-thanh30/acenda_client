import React from "react";
import Image from "next/image";

import hotelImg from "@/../public/hotelImg.png";
import { TbPigMoney } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FiInfo } from "react-icons/fi";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
export default function RoomHotel() {
  return (
    <div className="mt-5 rounded-md bg-doveGray-0 p-4">
      <div className="flex gap-3 md:flex-row flex-col">
        <div className="w-fit space-y-2">
          <Image
            className="md:w-56 md:h-44 w-full object-cover rounded-md"
            src={hotelImg}
            alt="hotel image"
          />
          <p className="text-sm text-primary-500 underline cursor-pointer text-center">
            See pictures
          </p>
        </div>

        <div className="md:space-y-3 space-y-2 w-full">
          {/* Title */}
          <div className="flex items-center justify-between ">
            <h2 className="md:text-base text-sm text-midnightBlue-950 font-semibold">
              Deluxe Double
            </h2>
            <h3 className="md:text-lg text-base text-midnightBlue-950 font-semibold">
              10.780.000đ / night
            </h3>
          </div>
          {/* Description */}
          <div className="flex flex-col gap-2 ">
            <span className="flex items-center gap-1 md:text-sm text-xs text-doveGray-500">
              <HiOutlineUserGroup />
              Maximum 02 adults & 1 child
            </span>
            <span className="flex items-center gap-1 md:text-sm text-xs text-doveGray-500">
              <FiInfo />
              No refunds or changes
            </span>
            <span className="flex items-center gap-1 md:text-sm text-xs text-doveGray-500">
              <TbPigMoney />
              VAT invoice will be provided by the hotel at the time of
              check-out.
            </span>
          </div>
          {/* Facilities */}
          <div className="flex justify-between md:flex-row flex-col gap-4">
            <div className="flex flex-wrap gap-2 w-fit max-w-full">
              <span className="bg-doveGray-50 text-doveGray-500 text-xs w-fit p-2 cursor-pointer h-fit rounded-full hover:bg-doveGray-100 transition-colors duration-200">
                TV
              </span>
              <span className="bg-doveGray-50 text-doveGray-500 text-xs w-fit p-2 h-fit rounded-full cursor-pointer hover:bg-doveGray-100 transition-colors duration-200">
                Fridge
              </span>
              <span className="bg-doveGray-50 text-doveGray-500 text-xs w-fit p-2 h-fit rounded-full cursor-pointer hover:bg-doveGray-100 transition-colors duration-200">
                Bathroom
              </span>
              <span className="bg-doveGray-50 text-doveGray-500 text-xs w-fit p-2 h-fit rounded-full cursor-pointer hover:bg-doveGray-100 transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis ">
                Minibar with complimentary tea and coffee
              </span>
              <span className="bg-doveGray-50 text-doveGray-500 text-xs w-fit p-2 h-fit rounded-full cursor-pointer hover:bg-doveGray-100 transition-colors duration-200">
                Air conditioning
              </span>
              <span className="bg-primary-50 text-primary-500 text-xs w-fit p-2 h-fit rounded-full cursor-pointer hover:bg-primary-100 transition-colors duration-200">
                +7 amenities
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <ButtonPrimary text="Book now" isValid />
              <button className="rounded-md hover:opacity-90 cursor-pointer border border-primary-500 bg-primary-50 sm:text-base text-xs text-primary-500 py-2 sm:px-8 px-4 font-medium transition-all">
                Contact for consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-doveGray-100 my-8" />
    </div>
  );
}
