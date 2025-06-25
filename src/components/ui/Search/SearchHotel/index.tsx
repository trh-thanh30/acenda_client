"use client";
import React from "react";

// Components
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import { usePathname } from "next/navigation";
import InputPrimary from "@/components/Input/InputPrimary";

export default function SearchHotel() {
  const pathName = usePathname();
  return (
    <div
      className={`${pathName === "/hotel" && "block"} ${
        pathName === "/" && "md:block hidden"
      } `}>
      <form className="flex lg:flex-row flex-col  gap-2 bg-doveGray-0 pt-4 px-4 pb-8 rounded-e-md rounded-bl-md shadow-doveGray-200 shadow-2xl items-end">
        <div className="flex items-center flex-row gap-2 w-full">
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
              id="guests"
              label="Guests "
              placeholder="02 adults, 0 children"
            />
          </div>
        </div>
        <div className="w-full flex-1">
          <InputPrimary type="date" id="check_in" label="Check In" />
        </div>
        <div className="w-full flex-1">
          <InputPrimary id="check_out" label="Check Out" type="date" />
        </div>
        <ButtonPrimary isValid={true} text="Search" />
      </form>
    </div>
  );
}
