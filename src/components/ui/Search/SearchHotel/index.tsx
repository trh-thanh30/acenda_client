"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  HiOutlineCalendarDateRange,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { LuMapPinPlus } from "react-icons/lu";
// Components
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import InputWithIcon from "@/components/Input/InputWithIcon";

interface IFormSearchTour {
  depart_from: string;
  arrive_to: string;
  departure_date: Date;
  return_date: Date;
}
export default function SearchHotel() {
  const { register, handleSubmit } = useForm<IFormSearchTour>();
  const onSubmit: SubmitHandler<IFormSearchTour> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 bg-doveGray-0 pt-4 px-4 pb-8 rounded-e-md rounded-bl-md shadow-doveGray-200 shadow-2xl items-end">
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
          id="guests"
          label="Guests "
          placeholder="02 adults, 0 children"
          icon={<HiOutlineUserGroup />}
        />
      </div>
      <div className="w-full">
        <InputWithIcon
          register={register}
          type="date"
          id="check_in"
          label="Check In"
          icon={<HiOutlineCalendarDateRange />}
        />
      </div>
      <div className="w-full">
        <InputWithIcon
          register={register}
          id="check_out"
          label="Check Out"
          type="date"
          icon={<HiOutlineCalendarDateRange />}
        />
      </div>
      <ButtonPrimary isValid={true} text="Search" />
    </form>
  );
}
