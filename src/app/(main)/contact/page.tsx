import InputPrimary from "@/components/Input/InputPrimary";
import TextareaPrimary from "@/components/ui/Textarea";
import Image from "next/image";
import React from "react";

import map from "@/../public/map.png";
import { CiMail, CiMap, CiPhone } from "react-icons/ci";
export default function Page() {
  return (
    <div className="md:mt-12 mt-10">
      <h2 className="md:text-xl text-lg font-medium text-smaltBlue-500 text-center mb-2">
        CONTACT FOR CONSULTATION
      </h2>
      <h1 className="md:text-3xl text-2xl font-semibold text-midnightBlue-950 text-center md:mb-16 mb-8">
        CONTACT US
      </h1>
      <form action="" className="flex flex-col fle md:gap-6 gap-4">
        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-4">
          <div className="w-full">
            <InputPrimary
              id="full_name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="w-full">
            <InputPrimary
              id="full_name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        <div className="flex items-center md:gap-10 gap-4 md:flex-row flex-col">
          <div className="w-full">
            <InputPrimary
              id="full_name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="w-full">
            <InputPrimary
              id="full_name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        <div className="flex items-center md:gap-10 gap-4 md:flex-row flex-col">
          <div className="w-full">
            <InputPrimary
              id="full_name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="w-full">
            <InputPrimary
              id="full_name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-midnightBlue-950">
            Message
          </label>
          <TextareaPrimary name="message" placeholder="Enter your message" />
        </div>
        <div className="flex items-center justify-center ">
          <button className="py-2 px-8 text-white bg-primary-500 rounded-md text-base hover:opacity-95 transition-opacity cursor-pointer">
            Submit
          </button>
        </div>
      </form>
      <h2 className="md:text-3xl text-2xl font-semibold text-midnightBlue-950 text-center md:mt-16 mt-14 md:mb-12 mb-8  uppercase">
        detailed information
      </h2>
      <div className="grid md:grid-cols-[0.8fr_0.5fr] grid-cols-1  items-center gap-8">
        <Image src={map} alt="map" className="object-cover" />
        <div className="flex flex-col md:gap-8 gap-4">
          <div className="p-3 rounded-md flex  items-center gap-2 bg-doveGray-0 hover:opacity-85 transition-opacity cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-full text-doveGray-0">
              <CiMap />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-base text-sm font-semibold text-midnightBlue-950">
                Hanoi Tourist Registration Office:
              </h3>
              <span className="md:text-sm text-xs text-doveGray-400">
                18 Hoàng Cầu, Đống Đa, Hà Nội.
              </span>
            </div>
          </div>
          <div className="p-3 rounded-md flex  items-center gap-2 bg-doveGray-0 hover:opacity-85 transition-opacity cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-full text-doveGray-0">
              <CiPhone />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-base text-sm font-semibold text-midnightBlue-950">
                Hotline:
              </h3>
              <span className="md:text-sm text-xs text-doveGray-400">
                1800 10 11 21 - (84-28) 39 487 038
              </span>
            </div>
          </div>
          <div className="p-3 rounded-md flex  items-center gap-2 bg-doveGray-0 hover:opacity-85 transition-opacity cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-full text-doveGray-0">
              <CiMail />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-base text-sm font-semibold text-midnightBlue-950">
                Email:
              </h3>
              <span className="md:text-sm text-xs text-doveGray-400">
                InfomationAcenda@gmail.com.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
