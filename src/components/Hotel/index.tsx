"use client";
import React from "react";
import TourItemSkeleton from "../Loading/TourLoadingSkeleton";
import useApiHotel from "@/hooks/api/useApiHotel";
import HotelItem from "../ui/HotelItem";

export default function Hotel({ col }: { col: number }) {
  const { hotels, isLoading } = useApiHotel();
  return (
    <div
      className={`${
        col === 5 &&
        "grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 md:gap-4 gap-3 items-center h-full md:mt-10 mt-8"
      } ${
        col === 4 &&
        "grid xl:grid-cols-4 sm:grid-cols-3  grid-cols-2 md:gap-3 gap-2 items-center "
      }`}>
      {isLoading ? (
        <>
          {Array.from({ length: col }).map((_, i) => (
            <TourItemSkeleton key={i} />
          ))}
        </>
      ) : (
        <>
          {hotels.map((hotel, index) => (
            <HotelItem key={index} hotel={hotel} />
          ))}
        </>
      )}
    </div>
  );
}
