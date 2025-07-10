import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

import Link from "next/link";
import ButtonHeart from "../Button/ButtonHeart";

interface Address {
  province: string;
  district: string;
  [key: string]: string;
}

interface HotelItemProps {
  id: string;
  name: string;
  description: string;
  amenities: string;
  images: string[];
  address: Address;
  rooms: [];
  reviews: [];
}
export default function HotelItem({ hotel }: { hotel: HotelItemProps }) {
  const priceFake = Math.random() * 100000;
  const { province } = hotel.address;

  return (
    <div className="relative rounded-b-md w-full h-full">
      <Link href="/hotel/2" className="w-full h-full hover:opacity-85 shadow-md transition-all duration-300">
        {hotel && hotel.images[0] && (
          <div className="relative group sm:w-full sm:h-full h-[260px] w-full aspect-[2/3]">
            {hotel.images && hotel.images[0] && (
              <Image
                src={hotel.images[0]}
                fill
                loading="lazy"
                alt="hotel image"
                className={`object-cover rounded-md w-full h-full`}
              />
            )}
          </div>
        )}

        <div className="absolute bottom-0 bg-[#70707066] w-full p-4 rounded-b-md">
          <h6 className="text-sm text-center  text-doveGray-0 ">
            {hotel.name}
          </h6>
          {hotel.address && (
            <div className="flex items-center gap-1 mt-2">
              <FiMapPin className="text-sm text-doveGray-0" />
              <span className="text-sm text-doveGray-0">{province}</span>
            </div>
          )}
          <hr className="my-3 border-doveGray-0" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-doveGray-0">{priceFake.toFixed(3)}đ</p>
            <p className="text-sm flex items-center gap-1 ">
              <CiStar className="text-yellow-500" />
              <span className="text-sm text-doveGray-0">5.0</span>
            </p>
          </div>
        </div>
      </Link>
      <div className="absolute top-3 left-3 py-1 px-2 rounded-md bg-doveGray-0 ">
        <span className="text-xs text-midnightBlue-950 font-medium">10%</span>
      </div>
      <ButtonHeart hotelId={hotel.id} />
    </div>
  );
}
