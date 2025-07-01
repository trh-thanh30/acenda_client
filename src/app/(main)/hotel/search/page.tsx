"use client";
import InputPrimary from "@/components/Input/InputPrimary";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import Datepicker from "react-tailwindcss-datepicker";
import React, { useState } from "react";
import type { DateValueType } from "react-tailwindcss-datepicker";
import { Range } from "react-range";
import { CiStar } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Logo from "@/components/Logo";
import Image from "next/image";
import hotelImg from "@/../public/hotelImg.png";
import { FaWifi } from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";
const tourTypes = [
  "Tour ngày lễ",
  "Tour trong ngày",
  "Tour ngắn ngày",
  "Tour trải nghiệm",
  "Tour nghỉ dưỡng",
];
const MIN = 0;
const MAX = 22000000;
export default function Page() {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [values, setValues] = useState([0, 22000000]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:my-20 my-8 flex items-center justify-between">
        <h1 className="md:text-2xl text-xl font-semibold text-midnightBlue-950">
          Search Hotel Page
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="text-lg font-medium  text-doveGray-500 md:hidden block cursor-pointer hover:text-doveGray-800 transition-colors duration-300">
          <IoFilterSharp />
        </button>
      </div>

      <div className=" grid md:grid-cols-[0.3fr_1fr] gird-cols-1 gap-9">
        {/* SEARCH SIDE */}
        <section className="md:block hidden">
          <h2 className="text-base font-semibold text-midnightBlue-950">
            Search for hotels
          </h2>
          <form className="mt-3 flex flex-col gap-1">
            <InputPrimary placeholder="Departure point..." type="text" />
            <InputPrimary placeholder="Destination" type="text" />
            <InputPrimary placeholder="Number of days" type="number" />
            <div className="mt-3">
              <ButtonPrimary text="Search" wFull isValid={true} />
            </div>
          </form>
          <div className="flex flex-col gap-3 mt-5 w-fit ">
            {tourTypes.map((type) => (
              <label
                key={type}
                className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tour-type"
                  value={type}
                  className="accent-red-500 w-3 h-3"
                />
                <span className="ml-2 text-doveGray-500 text-sm">{type}</span>
              </label>
            ))}
          </div>
          <hr className="my-8 border border-doveGray-100" />

          <div className="space-y-2 w-full">
            <h2 className="text-base font-semibold text-midnightBlue-950 ">
              Departure date
            </h2>

            <Datepicker
              popoverDirection="up"
              useRange={false}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              inputClassName="w-full px-4 py-2 border-2 border-midnightBlue-100 rounded-md text-xs text-doveGray-500  outline-none focus:border-midnightBlue-200 focus:shadow-midnightBlue-200 focus:shadow-2xl focus:shadow-midnightBlue-500 placeholder:text-doveGray-400"
              primaryColor="blue"
            />
          </div>

          <div className="w-full space-y-4 mt-7">
            <h3 className="text-base font-semibold text-midnightBlue-950 mb-3">
              Price approx
            </h3>
            <div className="flex justify-between mb-4 text-sm">
              <span className="px-4 py-2 rounded-full border text-sm text-doveGray-500">
                {values[0].toLocaleString("vi-VN")} đ
              </span>
              <span className="px-4 py-2 rounded-full  border text-sm text-doveGray-500">
                {values[1].toLocaleString("vi-VN")} đ
              </span>
            </div>

            <Range
              values={values}
              step={1000000}
              min={MIN}
              max={MAX}
              onChange={(val) => setValues(val)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-1 bg-gray-200 rounded-full"
                  style={{ ...props.style }}>
                  <div
                    className="h-full bg-primary-400 rounded-full"
                    style={{
                      marginLeft: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                      width: `${
                        ((values[1] - values[0]) / (MAX - MIN)) * 100
                      }%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    top: "38%",
                    transform: "translateY(-50%)",
                  }}
                  className="w-4 h-4  rounded-full bg-primary-500 border-2 border-white shadow-md cursor-pointer"
                />
              )}
            />
          </div>

          <hr className="my-8 border border-doveGray-100" />

          <div className="w-full">
            <h2 className="text-base font-semibold text-midnightBlue-950">
              Evaluate
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <input
                type="radio"
                name="rating"
                className="w-4 h-4 accent-red-500 cursor-pointer outline-none  bg-doveGray-0"
              />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
            </div>
          </div>
        </section>

        {/* LIST SIDE */}
        <section className="flex flex-col gap-3">
          <div className="flex items-stretch bg-doveGray-0 rounded-md">
            <div className="w-[30%] md:w-[32%] flex-shrink-0">
              <Image
                loading="lazy"
                src={hotelImg}
                alt="blog"
                className="w-full h-full object-cover rounded-l-md"
              />
            </div>
            <div className="flex md:gap-0 gap-4 md:flex-row flex-col justify-between md:p-3 p-2 flex-grow">
              <div className="flex flex-col">
                <h5 className="md:text-lg text-sm font-medium text-midnightBlue-950">
                  Amiana Resort Nha Trang
                </h5>
                <div className="flex items-center md:gap-2 gap-1 md:text-sm text-xs text-doveGray-400 mt-3">
                  <FaMapMarkerAlt />
                  <span>Phạm Văn Đồng, Nha Trang</span>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <span className="p-2 border border-doveGray-200 rounded-md md:text-lg text-sm text-doveGray-500">
                    <FaWifi />
                  </span>
                  <span className="p-2 border border-doveGray-200 rounded-md md:text-lg text-sm text-doveGray-500">
                    <FaWifi />
                  </span>
                  <span className="p-2 border border-doveGray-200 rounded-md md:text-lg text-sm text-doveGray-500">
                    <FaWifi />
                  </span>
                </div>
                <div className="flex md:items-center items-start  md:flex-row flex-col md:gap-4 gap-1 mt-4 text-nowrap">
                  <div className="flex items-center gap-1 md:text-sm text-xs text-smaltBlue-500">
                    <span>
                      <RxArrowTopRight />
                    </span>
                    <span>Khách sạn 5 sao</span>
                  </div>
                  <div className="flex items-center gap-1 md:text-sm text-xs text-smaltBlue-500">
                    <span>
                      <RxArrowTopRight />
                    </span>
                    <span>Khu nghỉ dưỡng</span>
                  </div>
                </div>
              </div>

              <div className="md:flex hidden flex-col justify-between  md:border-l md:border-l-doveGray-200 pl-4  ">
                <div className="flex flex-col gap-1 items-center">
                  <h4 className="text-base font-semibold  text-midnightBlue-950">
                    389.448đ
                  </h4>
                  <div className="flex items-center gap-1 text-sm">
                    <CiStar color="#FFC107" />
                    <CiStar color="#FFC107" />
                    <CiStar color="#FFC107" />
                    <CiStar color="#FFC107" />
                    <CiStar color="#FFC107" />
                  </div>
                </div>
                <Link href="/hotel/2">
                  <ButtonPrimary text="Xem chi tiết" isValid />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Mobile filter sidebar */}
      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-full h-screen z-40 bg-black opacity-50 block md:hidden"></div>
        </>
      )}
      <div
        className={`top-0 right-0 w-5/6 bg-doveGray-50 p-4 z-50   fixed h-full overflow-y-scroll  ease-in-out duration-300 transform transition-all md:hidden block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex items-center justify-end hover:opacity-90 hover:cursor-pointer text-midnightBlue-950">
          <IoMdClose size={20} onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex items-center justify-center mb-6">
          <Logo />
        </div>
        <section className="md:hidden block">
          <h2 className="text-base font-semibold text-midnightBlue-950">
            Search for tours
          </h2>
          <form className="mt-3 flex flex-col gap-1">
            <InputPrimary placeholder="Departure point..." type="text" />
            <InputPrimary placeholder="Destination" type="text" />
            <InputPrimary placeholder="Number of days" type="number" />
            <div className="mt-3">
              <ButtonPrimary text="Search" wFull isValid={true} />
            </div>
          </form>
          <div className="flex flex-col gap-3 mt-5 w-fit ">
            {tourTypes.map((type) => (
              <label
                key={type}
                className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tour-type"
                  value={type}
                  className="accent-red-500 w-3 h-3"
                />
                <span className="ml-2 text-doveGray-500 text-sm">{type}</span>
              </label>
            ))}
          </div>
          <hr className="my-8 border border-doveGray-100" />

          <div className="space-y-2 w-full">
            <h2 className="text-base font-semibold text-midnightBlue-950 ">
              Departure date
            </h2>

            <Datepicker
              popoverDirection="up"
              useRange={false}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              inputClassName="w-full px-4 py-2 border-2 border-midnightBlue-100 rounded-md text-xs text-doveGray-500  outline-none focus:border-midnightBlue-200 focus:shadow-midnightBlue-200 focus:shadow-2xl focus:shadow-midnightBlue-500 placeholder:text-doveGray-400"
              primaryColor="blue"
            />
          </div>

          <div className="w-full space-y-4 mt-7">
            <h3 className="text-base font-semibold text-midnightBlue-950 mb-3">
              Price approx
            </h3>
            <div className="flex justify-between mb-4 text-sm">
              <span className="px-4 py-2 rounded-full border text-sm text-doveGray-500">
                {values[0].toLocaleString("vi-VN")} đ
              </span>
              <span className="px-4 py-2 rounded-full  border text-sm text-doveGray-500">
                {values[1].toLocaleString("vi-VN")} đ
              </span>
            </div>

            <Range
              values={values}
              step={1000000}
              min={MIN}
              max={MAX}
              onChange={(val) => setValues(val)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-1 bg-gray-200 rounded-full"
                  style={{ ...props.style }}>
                  <div
                    className="h-full bg-primary-400 rounded-full"
                    style={{
                      marginLeft: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                      width: `${
                        ((values[1] - values[0]) / (MAX - MIN)) * 100
                      }%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    top: "38%",
                    transform: "translateY(-50%)",
                  }}
                  className="w-4 h-4  rounded-full bg-primary-500 border-2 border-white shadow-md cursor-pointer"
                />
              )}
            />
          </div>

          <hr className="my-8 border border-doveGray-100" />

          <div className="w-full">
            <h2 className="text-base font-semibold text-midnightBlue-950">
              Evaluate
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <input
                type="radio"
                name="rating"
                className="w-4 h-4 accent-red-500 cursor-pointer outline-none  bg-doveGray-0"
              />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
              <CiStar className="w-5 h-5 text-primary-500" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
