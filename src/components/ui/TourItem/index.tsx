"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { PiTimer } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import ButtonHeart from "../Button/ButtonHeart";

export interface TourItemProps {
  id: string;
  images: string[];
  name: string;
  description: string;
  highlights: string[];
  planDetails: string;
  itinerary: string;
  durationDays: number;
  priceAdult: number;
  priceChild: number;
  availableSlots: number;
  travelCostDetails: string;
  address: string;
}
export default function TourItem({ tour }: { tour: TourItemProps }) {
  return (
    <div className="relative bg-doveGray-0 w-full h-full">
      <Link
        href={`/tour/${tour.id}`}
        className="hover:cursor-pointer rounded-md ">
        <div className="relative group  w-full aspect-[1/1]">
          {tour.images && tour.images[0] && (
            <Image
              src={tour.images[0]}
              fill
              loading="lazy"
              alt="tour image"
              className={`object-cover rounded-t-md`}
            />
          )}
          <div className="absolute flex items-center justify-center bg-doveGray-950/20 top-0 inset-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-opacity">
            <FaEye size={26} color="#fff" />
          </div>
        </div>
        <div className="flex flex-col md:p-3 p-2">
          <h5 className="text-midnightBlue-950 md:text-sm  text-xs font-medium text-center">
            {tour.name}
          </h5>
          <p className="text-doveGray-500  text-xs text-center">
            {tour.highlights.join(" - ")}
          </p>
          <div className="flex md:flex-row flex-col items-center justify-between md:mt-3 mt-1">
            <div className="flex gap-1 items-center text-xs text-doveGray-500">
              <PiTimer />
              <span>{tour.durationDays} days</span>
            </div>
            <div className="flex gap-1 text-xs text-yellow-500 ">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>
          <hr className=" border-doveGray-200 my-4" />
          <div className="flex items-center md:justify-between justify-center">
            <h6 className="md:text-sm text-xs text-midnightBlue-950 font-medium">
              {tour.priceAdult}đ
            </h6>
            <div className="md:block hidden">
              <Link
                href={`/tour/${tour.id}`}
                className="text-primary-500 flex items-center gap-1 hover:underline  text-sm   text-nowrap">
                More Details
                <RxArrowTopRight />
              </Link>
            </div>
          </div>
        </div>
      </Link>
      <ButtonHeart tourId={tour.id} />
    </div>
  );
}
