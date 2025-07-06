"use client";
import React from "react";
import TourItem from "../ui/TourItem";
import useApiTour from "@/hooks/api/useApiTour";
import TourItemSkeleton from "../Loading/TourLoadingSkeleton";

export default function Tour({ col }: { col: number }) {
  const { tours, isLoading } = useApiTour();

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
          {tours.map((tour) => (
            <TourItem key={tour} tour={tour} />
          ))}
        </>
      )}
    </div>
  );
}
