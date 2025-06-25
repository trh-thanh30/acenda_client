"use client";
import React from "react";

// Components
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import { usePathname } from "next/navigation";
import InputPrimary from "@/components/Input/InputPrimary";

export default function SearchTour() {
  const pathName = usePathname();
  return (
    <div
      className={`${pathName === "/tour" && "block"} ${
        pathName === "/" && "md:block hidden"
      } ${pathName === "/hotel" && "hidden"}`}>
      <form className="flex lg:flex-row flex-col gap-2 bg-doveGray-0 md:pt-4 pt-2 md:px-4 px-2 md:pb-8 pb-4 rounded-e-md rounded-bl-md shadow-doveGray-200 shadow-2xl items-end ">
        <div className="flex items-center flex-row gap-2 w-full ">
          <div className="w-full flex-1">
            <InputPrimary
              id="depart_from"
              type="text"
              label="Depart from"
              placeholder="Enter location..."
            />
          </div>
          <div className="w-full flex-1">
            <InputPrimary
              id="arrive_to"
              label="Arrive to"
              placeholder="Where do you want to go?"
            />
          </div>
        </div>
        <div className="w-full flex-1">
          <InputPrimary
            type="date"
            id="departure_date"
            label="Departure Date"
          />
        </div>
        <div className="w-full flex-1">
          <InputPrimary id="return_date" label="Return Date" type="date" />
        </div>
        <ButtonPrimary isValid={true} text="Search" />
      </form>
    </div>
  );
}
