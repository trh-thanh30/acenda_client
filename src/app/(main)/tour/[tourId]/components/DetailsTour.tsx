"use client";
import api from "@/lib/axios";
import Image from "next/image";
import map from "@/../public/map.png";
import React, { useEffect, useState } from "react";
import { CiShare1, CiStar, CiUser } from "react-icons/ci";
import { TourItemProps } from "@/components/ui/TourItem";
import BtnHeart from "./BtnHeart";
import toast from "react-hot-toast";
import FormBookingTour from "./FormBookingTour";
import SkeletonDetailsTour from "@/components/Loading/SkeletonDetailsTour";

export default function DetailsTour({ tourId }: { tourId: string }) {
  const [tour, setTour] = useState<TourItemProps>([]);
  const [loading, setLoading] = useState(false);
  const [moreDetails, setMoreDetails] = useState<string>("description");
  const [moreCost, setMoreCost] = useState<string>("estimatedCost");

  const handleCopyLink = () => {
    toast("Copied to clipboard", {
      icon: "©️",
      position: "top-right",
      style: {
        fontSize: "14px",
      },
    });
    navigator.clipboard.writeText(window.location.href);
  };

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/tour/${tourId}`);
        console.log(res.data);
        setLoading(false);
        setTour(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchTour();
  }, []);

  return (
    <div className="md:mt-16 mt-10 grid md:grid-cols-[1.5fr_0.5fr] grid-cols-1 gap-8">
      {/* Left side */}
      {loading ? (
        <div>
          <SkeletonDetailsTour />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <h1 className="md:text-xl text-lg font-medium text-midnightBlue-950">
              {tour.name}:
            </h1>
            <div className="flex items-center gap-2  ">
              <BtnHeart tourId={tour.id} />
              <CiShare1
                onClick={handleCopyLink}
                className="text-midnightBlue-950 hover:cursor-pointer opacity-85"
                size={18}
              />
            </div>
          </div>
          <p className="md:text-sm text-xs text-smaltBlue-500 mt-2">
            {tour?.highlights?.join(" - ")}
          </p>
          <div className="flex items-center gap-5 mt-4">
            <span className="text-xs text-doveGray-400">{tour.address}</span>
            <div className="flex items-center md:gap-3 gap-2">
              <div className="flex items-center gap-1">
                <CiUser color="#f27052" />
                <span className="text-xs text-doveGray-500 font-medium">
                  {tour.availableSlots}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CiStar color="#f27052" />
                <span className="text-xs text-doveGray-500 font-medium">
                  4.8
                </span>
              </div>
              <span className="text-xs text-primary-500 underline">
                (24 đánh giá)
              </span>
            </div>
          </div>
          <div className="md:mt-10 mt-8 bg-doveGray-0 md:p-4 p-2 rounded-md">
            <div className="flex md:gap-14 gap-6 items-center">
              <h2
                onClick={() => setMoreDetails("description")}
                className={`md:text-base font-medium text-xs cursor-pointer  hover:text-midnightBlue-950 transition-all   pb-3 ${
                  moreDetails === "description"
                    ? "text-midnightBlue-950   border-b-2 border-b-primary-500"
                    : "text-doveGray-500 "
                }`}>
                Description
              </h2>
              <h2
                onClick={() => setMoreDetails("itinerary")}
                className={`md:text-base text-xs font-medium cursor-pointer hover:text-midnightBlue-950 transition-all   pb-3 ${
                  moreDetails === "itinerary"
                    ? "text-midnightBlue-950 border-b-2 border-b-primary-500"
                    : "text-doveGray-500 "
                }`}>
                Tour Itinerary
              </h2>
              <h2
                onClick={() => setMoreDetails("schedule")}
                className={`md:text-base text-xs font-medium cursor-pointer  hover:text-midnightBlue-950 transition-all pb-3 ${
                  moreDetails === "schedule"
                    ? "text-midnightBlue-950  border-b-2 border-b-primary-500"
                    : "text-doveGray-500"
                }`}>
                Departure schedule
              </h2>
            </div>
            {moreDetails === "description" && (
              <p className="mt-4 text-sm text-doveGray-500">
                {tour.description}
              </p>
            )}
            {moreDetails === "itinerary" && (
              <p className="mt-4 text-sm text-doveGray-500">{tour.itinerary}</p>
            )}
            {moreDetails === "schedule" && (
              <p className="mt-4 text-sm text-doveGray-500">{"schedule"}</p>
            )}
          </div>
          <div className="md:mt-10 mt-8">
            <h3 className="text-base font-semibold text-midnightBlue-950">
              Map
            </h3>
            <Image
              src={map}
              alt="map"
              className="object-cover w-full h-[276px] md:mt-5 mt-4 rounded-md"
            />
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 md:gap-4 gap-2 md:mt-10 mt-8">
            {tour?.images?.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-md">
                <Image
                  src={image}
                  width={282}
                  height={220}
                  alt="image"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer hover:opacity-95"
                />
              </div>
            ))}
          </div>
          <div className="md:mt-10 mt-8 bg-doveGray-0 md:p-4 p-2 rounded-md">
            <div className="flex md:gap-14 gap-6 items-center transition-all ">
              <h2
                onClick={() => setMoreCost("estimatedCost")}
                className={`md:text-base font-medium text-xs cursor-pointer  hover:text-midnightBlue-950 transition-all   pb-3 ${
                  moreCost === "estimatedCost"
                    ? "text-midnightBlue-950   border-b-2 border-b-primary-500"
                    : "text-doveGray-500 "
                }`}>
                Estimated costs
              </h2>
              <h2
                onClick={() => setMoreCost("surcharge")}
                className={`md:text-base font-medium text-xs cursor-pointer  hover:text-midnightBlue-950 transition-all   pb-3 ${
                  moreCost === "surcharge"
                    ? "text-midnightBlue-950   border-b-2 border-b-primary-500"
                    : "text-doveGray-500 "
                }`}>
                Surcharge
              </h2>
              <h2
                onClick={() => setMoreCost("note")}
                className={`md:text-base font-medium text-xs cursor-pointer  hover:text-midnightBlue-950 transition-all   pb-3 ${
                  moreCost === "note"
                    ? "text-midnightBlue-950   border-b-2 border-b-primary-500"
                    : "text-doveGray-500 "
                }`}>
                Note
              </h2>
            </div>
            {moreCost === "estimatedCost" && (
              <p className="mt-4 text-sm text-doveGray-500">
                {tour.travelCostDetails}
              </p>
            )}
            {moreCost === "surcharge" && (
              <p className="mt-4 text-sm text-doveGray-500">surcharge</p>
            )}
            {moreCost === "note" && (
              <p className="mt-4 text-sm text-doveGray-500">note</p>
            )}
          </div>
        </div>
      )}
      {/* Right side */}
      {tour && <FormBookingTour tour={tour} />}
    </div>
  );
}
