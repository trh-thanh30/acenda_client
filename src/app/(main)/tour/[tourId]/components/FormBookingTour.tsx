import React, { useState } from "react";
import Image from "next/image";

import toast from "react-hot-toast";
import { CiStar, CiTimer } from "react-icons/ci";
import map from "@/../public/map.png";

import InputPrimary from "@/components/Input/InputPrimary";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import { TourItemProps } from "@/components/ui/TourItem";
import Modal from "@/components/ui/Modal";
import ModalBooking from "@/components/ui/Modal/ModalBooking";

export default function FormBookingTour({ tour }: { tour: TourItemProps }) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];
  const [formDataTime, setFormDataTime] = useState({
    startDate: "",
  });
  const [formNumberOfPeople, setFormOfNumberPeople] = useState({
    quantityAdult: 1,
    quantityChild: 0,
  });
  const [openModal, setOpenModal] = useState(false);
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDataTime({
      ...formDataTime,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeNumberOfPeople = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (value === "") {
      setFormOfNumberPeople({
        ...formNumberOfPeople,
        [name]: "",
      });
      return;
    }

    const numberValue = parseInt(value, 10);
    if (numberValue < 0) return;

    const otherValue =
      name === "quantityAdult"
        ? parseInt(formNumberOfPeople.quantityChild.toString() || "0", 10)
        : parseInt(formNumberOfPeople.quantityAdult.toString() || "0", 10);

    const total = numberValue + otherValue;

    if (total > tour.availableSlots) {
      // Optionally: show thông báo
      toast("Quantity exceeds available slots", {
        icon: "🚫",
        position: "top-right",
        style: {
          fontSize: "14px",
        },
      });
      return;
    }

    setFormOfNumberPeople({
      ...formNumberOfPeople,
      [name]: numberValue,
    });
  };
  const onSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpenModal(true);
  };
  return (
    <>
      <div>
        <form
          onSubmit={onSubmitBooking}
          className="bg-doveGray-0 rounded-md py-5 px-2 h-fit">
          <div className="flex items-center justify-between">
            <h4 className="text-base text-midnightBlue-950 font-semibold  text-nowrap w-full">
              Departure date
            </h4>
            <InputPrimary
              name="startDate"
              min={minDate}
              onChange={handleChangeTime}
              required
              type="date"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <h4 className="text-base text-midnightBlue-950 font-semibold  text-nowrap w-full">
              Time Go
            </h4>
            <InputPrimary type="time" />
          </div>
          <div className="flex items-center justify-between w-full mt-4 ">
            <span className="text-base text-midnightBlue-950 font-semibold">
              Available slots:
            </span>
            <span className="text-sm text-midnightBlue-950 font-semibold ">
              {tour.availableSlots}
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-base text-midnightBlue-950 font-semibold  mt-5">
              Number of people
            </h4>
            <div className="flex items-center justify-between mt-2">
              <h5 className="text-sm text-doveGray-500 font-medium text-nowrap w-full">
                Adult
              </h5>
              <InputPrimary
                required
                name="quantityAdult"
                min={1}
                max={tour.availableSlots}
                onChange={handleChangeNumberOfPeople}
                value={`${formNumberOfPeople.quantityAdult}`}
                type="number"
              />
            </div>
            <div className="flex items-center justify-between mt-1">
              <h5 className="text-sm text-doveGray-500 font-medium text-nowrap w-full">
                Children
              </h5>
              <InputPrimary
                required
                name="quantityChild"
                min={0}
                max={tour.availableSlots}
                onChange={handleChangeNumberOfPeople}
                value={`${formNumberOfPeople.quantityChild}`}
                type="number"
              />
            </div>
          </div>
          <hr className="mt-3 border-doveGray-100 border" />
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h5 className="text-base text-smaltBlue-500 font-medium">
                Total:
              </h5>
              <span className="text-2xl text-midnightBlue-950 font-semibold">
                {(
                  tour.priceAdult * formNumberOfPeople.quantityAdult +
                  tour.priceChild * formNumberOfPeople.quantityChild
                ).toLocaleString("vi-VN")}
                đ
              </span>
            </div>
            <div className="mt-8 mb-4 w-full">
              <ButtonPrimary wFull text="Book Now" isValid={true} />
            </div>
            <button className="border border-primary-500 rounded-md py-2 px-8 font-medium transition-all bg-primary-50 text-primary-500 w-full hover:cursor-pointer">
              Contact for consultation
            </button>
          </div>
        </form>
        <div className="md:mt-10 mt-8">
          <h4 className="text-base font-semibold text-midnightBlue-950">
            Có thể bạn thích
          </h4>
          <div className="flex items-stretch bg-doveGray-0 rounded-md mt-3">
            <div className="w-[76px] flex-shrink-0">
              <Image
                loading="lazy"
                src={map}
                alt="blog"
                className="w-full h-full object-cover rounded-l-md"
              />
            </div>
            <div className="flex flex-col gap-3 mx-3 py-2 flex-grow">
              {" "}
              {/* flex-grow allows content to expand */}
              <h5 className="text-sm font-medium text-midnightBlue-950">
                Tour Ninh Bình Quảng Ninh
              </h5>
              <div className="flex items-center gap-2 text-xs text-doveGray-400">
                <CiTimer />
                <span>3 ngày 2 đêm</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <CiStar color="#f27052" />
                  <span className="text-xs text-doveGray-500 font-medium">
                    4.8
                  </span>
                </div>
                <h6 className="text-sm font-semibold text-midnightBlue-950">
                  2.945.000đ
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal favorite  */}
      <Modal
        isOpen={openModal}
        close={() => setOpenModal(false)}
        titleModal="Booking Result">
        <ModalBooking
          close={() => setOpenModal(false)}
          quantityAdult={formNumberOfPeople.quantityAdult}
          quantityChild={formNumberOfPeople.quantityChild}
          tour={tour}
          startDate={formDataTime.startDate}
        />
      </Modal>
    </>
  );
}
