import React from "react";
import { CiCreditCard1, CiStar, CiUser } from "react-icons/ci";
import InputPrimary from "@/components/Input/InputPrimary";
import TextareaPrimary from "@/components/ui/Textarea";
import { PiMoney } from "react-icons/pi";
import InputRadio from "@/components/Input/InputRadio";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import hotelImg from "@/../public/hotelImg.png";
import Image from "next/image";
export default function Payment() {
  return (
    <div
      className={`grid md:grid-cols-[1.5fr_0.5fr] grid-cols-1 mt-18 xl:gap-8 gap-4  `}>
      <section className="order-2 md:order-1">
        <h2 className="text-lg text-midnightBlue-950 font-semibold">
          Contact information
        </h2>
        <form action="" className="space-y-3">
          <InputPrimary label="Full name" placeholder="Nguyen Van A" />
          <div className="flex items-center w-full gap-4">
            <InputPrimary label="Email" placeholder="HtYs0@example.com" />
            <InputPrimary label="Phone" placeholder="0123456789" />
          </div>
        </form>
        <h3 className="text-base text-midnightBlue-950 font-semibold mt-9">
          Special request
        </h3>
        <p className="text-sm text-doveGray-500 mt-1">
          Note: Your requests are subject to hotel room availability.
        </p>
        <h3 className="text-sm text-midnightBlue-950 mt-4 font-semibold">
          Estimated check-in time{" "}
          <span className="text-sm text-doveGray-500">(not required)</span>
        </h3>
        <div className="md:w-[486px] w-full mt-1">
          <InputPrimary type="time" />
        </div>
        <h3 className="text-sm text-midnightBlue-950 mt-8 font-semibold">
          Other requirements
        </h3>
        <div className="md:w-[486px] w-full mt-1">
          <TextareaPrimary name="other_requirements" />
        </div>
        <h2 className="text-lg text-midnightBlue-950 font-semibold mt-9">
          Payment method
        </h2>
        <p className="text-sm text-doveGray-500 mt-2">
          After completing payment, the room confirmation code will be sent
          immediately via SMS and Email to you.
        </p>
        <div className="mt-9 space-y-5">
          {/* QR Pay */}
          <InputRadio
            icon={<CiCreditCard1 />}
            label="QR Pay"
            name="payment"
            id="qr"
            value="qr"
            htmlFor="qr"
          />
          {/* Cash */}
          <InputRadio
            icon={<PiMoney />}
            label="Cash payment"
            name="payment"
            id="cash"
            value="cash"
            htmlFor="cash"
          />
        </div>
        <div className="flex justify-end mt-6 w-full flex-col gap-4">
          <ButtonPrimary text="Pay money" isValid />
          <p className="text-sm text-doveGray-500 text-center">
            By clicking this button, you acknowledge that you have read and
            agree to our{" "}
            <span className="text-sm text-primary-500 hover:underline cursor-pointer">
              Terms and Conditions
            </span>
          </p>
        </div>
      </section>
      <section className="order-1 md:order-2">
        <h1 className="text-base text-midnightBlue-950 font-semibold">
          Vinpearl Resort & Golf Nam Hội An
        </h1>
        <div className="mt-1 flex items-center gap-2 font-medium">
          <CiStar />
          <span className="text-sm text-doveGray-600">4.8</span>
          <span className="text-sm text-doveGray-500">(24 reviews)</span>
        </div>
        <Image
          src={hotelImg}
          alt="hotel image"
          className="w-full object-cover rounded-md mt-10"
        />
        <div className="space-y-3 mt-8">
          <div className="py-2 w-full border border-doveGray-200 text-sm text-doveGray-500 flex items-center justify-center rounded-md">
            <span className="border-r border-r-doveGray-200 pr-4">
              Check-in
            </span>
            <span className="pl-4">Th3, 27/06/2023</span>
          </div>
          <div className="py-2 w-full border border-doveGray-200 text-sm text-doveGray-500 flex items-center justify-center rounded-md">
            <span className="border-r border-r-doveGray-200 pr-4">
              Check-out
            </span>
            <span className="pl-4">Th3, 28/06/2023</span>
          </div>
          <div className="py-2 w-full border border-doveGray-200 text-sm text-doveGray-500 flex items-center justify-center rounded-md">
            <span className="pr-4">02 người lớn, 0 trẻ em</span>
            <CiUser size={16} />
          </div>
        </div>
        <h3 className="text-lg text-midnightBlue-950 font-semibold mt-6">
          Room information
        </h3>

        <h3 className="text-lg text-midnightBlue-950 font-semibold mt-8">
          Price details
        </h3>
        <div className="space-y-5 mt-4">
          <div className="flex items-center justify-between flex-wrap">
            <span className="text-sm text-doveGray-500">1 room x 1 night</span>
            <span className="text-sm text-midnightBlue-950">200.000 VND</span>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <span className="text-sm text-doveGray-500">
              Hotel taxes and service charges
            </span>
            <span className="text-sm text-midnightBlue-950">50.000 VND</span>
          </div>
          <hr className="my-4 border border-doveGray-200" />
          <div className="flex items-center justify-between flex-wrap">
            <span className="text-sm text-midnightBlue-950 font-semibold">
              Total payment
            </span>
            <span className="text-base text-midnightBlue-950 font-semibold">
              250.000 VND
            </span>
            <p className="text-center text-sm text-doveGray-500 w-full mt-3">
              Taxes, fees, VAT included (Price for 2 adults)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
