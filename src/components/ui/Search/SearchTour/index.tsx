"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuMapPinHouse, LuMapPinPlus } from "react-icons/lu";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

// Components
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import InputWithIcon from "@/components/Input/InputWithIcon";

interface IFormSearchTour {
  depart_from: string;
  arrive_to: string;
  departure_date: Date;
  return_date: Date;
}
export default function SearchTour() {
  const { register, handleSubmit } = useForm<IFormSearchTour>();
  const onSubmit: SubmitHandler<IFormSearchTour> = (data) => console.log(data);
  return (
    <div className="md:block hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-2 bg-doveGray-0 pt-4 px-4 pb-8 rounded-e-md rounded-bl-md shadow-doveGray-200 shadow-2xl items-end ">
        <div className="w-full">
          <InputWithIcon
            register={register}
            id="depart_from"
            type="text"
            label="Depart from"
            placeholder="Enter location..."
            icon={<LuMapPinPlus />}
          />
        </div>
        <div className="w-full">
          <InputWithIcon
            register={register}
            id="arrive_to"
            label="Arrive to"
            placeholder="Where do you want to go?"
            icon={<LuMapPinHouse />}
          />
        </div>
        <div className="w-full">
          <InputWithIcon
            register={register}
            type="date"
            id="departure_date"
            label="Departure Date"
            icon={<HiOutlineCalendarDateRange />}
          />
        </div>
        <div className="w-full">
          <InputWithIcon
            register={register}
            id="return_date"
            label="Return Date"
            type="date"
            icon={<HiOutlineCalendarDateRange />}
          />
        </div>
        <ButtonPrimary isValid={true} text="Search" />
      </form>
    </div>
  );
}
