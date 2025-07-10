import React, { useState } from "react";
import Image from "next/image";

import dayjs from "dayjs";
import "dayjs/locale/en"; // import locale tiếng Việt
dayjs.locale("en");
import { CiUser } from "react-icons/ci";

import ButtonPrimary from "../../Button/ButtonPrimary";
import { TourItemProps } from "../../TourItem";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ModalBooking({
  quantityAdult,
  quantityChild,
  startDate,
  tour,
  close,
}: {
  quantityAdult: number;
  quantityChild: number;
  startDate: string;
  tour: TourItemProps;
  close: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [steps, setSteps] = useState(1);
  const handleBooking = async () => {
    setIsLoading(true);
    setSteps(2);
    try {
      const res = await api.post("/tour-booking", {
        tour_id: tour.id,
        startDate: startDate,
        quantityAdult: quantityAdult,
        quantityChild: quantityChild,
      });
      if (res.status === 201) {
        setIsLoading(false);
        toast.success(res.data?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      {steps === 1 && (
        <>
          <p className="text-sm text-doveGray-500 mt-5 text-center">
            Please double check the information before continuing.
          </p>
          <div className="space-y-2 flex items-center justify-center flex-col mt-4">
            <div className="relative group w-[282px] h-[180px]  aspect-[10/5]">
              {tour.images && tour.images[0] && (
                <Image
                  src={tour.images[0]}
                  fill
                  loading="lazy"
                  alt="tour image"
                  className={`object-cover rounded-md`}
                />
              )}
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-base font-semibold text-midnightBlue-950">
                {tour.name}
              </h2>
              <span className="text-sm text-doveGray-500">
                {(
                  tour.priceAdult * quantityAdult +
                  tour.priceChild * quantityChild
                ).toLocaleString("vi-VN")}
                đ
              </span>
            </div>
            <div className="py-2 w-full border border-doveGray-200 text-sm text-doveGray-500 flex items-center justify-center rounded-md">
              <span className="border-r border-r-doveGray-200 pr-4">
                Start date
              </span>
              <span className="pl-4">
                {" "}
                {dayjs(startDate).format("dddd, DD/MM/YYYY")}
              </span>
            </div>

            <div className="py-2 w-full border border-doveGray-200 text-sm text-doveGray-500 flex gap-4 items-center justify-center rounded-md">
              <CiUser size={16} />
              <span>
                {quantityAdult} adult, {quantityChild} child
              </span>
            </div>
            <div className="flex items-center justify-around w-full mt-4">
              <button
                onClick={close}
                className="bg-primary-50 text-primary-500 py-2 md:px-8 px-4 rounded-md border border-primary-500 hover:opacity-85 cursor-pointer">
                Cancel
              </button>
              <ButtonPrimary
                onClick={handleBooking}
                text="Booking now"
                isValid
                loading={isLoading}
              />
            </div>
          </div>
        </>
      )}
      {steps === 2 && (
        <>
          <p className="text-sm text-doveGray-500 mt-5 text-center">
            Now click on continue button to complete payment
          </p>
          <div className="flex items-center justify-center flex-col my-4">
            <div className="flex items-center gap-4">
              <h2 className="text-base font-semibold text-midnightBlue-950">
                {tour.name}
              </h2>
              <span className="text-sm text-doveGray-500">
                {(
                  tour.priceAdult * quantityAdult +
                  tour.priceChild * quantityChild
                ).toLocaleString("vi-VN")}
                đ
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/payment">
              <ButtonPrimary
                onClick={close}
                text="Continue"
                isValid
                loading={isLoading}
              />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
