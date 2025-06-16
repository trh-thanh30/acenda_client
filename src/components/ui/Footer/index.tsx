import React from "react";

import Image from "next/image";
// Icon
import mapPinIc from "@/../public/map-pin.svg";
import gmailIc from "@/../public/email-gray.svg";
import hotlineIc from "@/../public/phone-gray.svg";
import logoDK from "@/../public/logo1.svg";
import logoTB from "@/../public/logo2.svg";
import visaIC from "@/../public/visa.svg";
import paypalIC from "@/../public/paypal.svg";
import masterCardIC from "@/../public/master-card.svg";
import googlePayIC from "@/../public/google-pay.svg";
export default function Footer() {
  return (
    <footer className="bg-doveGray-0  px-12 py-5 md:mt-36 mt-20">
      <div className="flex md:flex-row flex-col justify-between gap-6">
        {/* About */}
        <div className="h-full w-[384px]">
          <h3 className="text-base font-semibold text-midnightBlue-950">
            About Us
          </h3>
          <p className="text-sm text-doveGray-500 mt-2">
            As expected of a travel expert, Acenda-Travel.com will help you not
            miss any great things in your trip. We choose for you suitable
            hotels, special tours, detailed travel information with attractive
            prices
          </p>
          <div className="flex items-center gap-1 mt-6">
            <Image src={logoDK} alt="logo" />
            <Image src={logoTB} alt="logo" />
          </div>
        </div>
        {/* Policy and Terms */}
        <div className="flex flex-col h-full">
          <h3 className="text-base font-semibold text-midnightBlue-950">
            Policies & Regulations
          </h3>
          <ul className="flex flex-col justify-start gap-3 text-sm text-doveGray-500 transition-colors text-nowrap mt-2">
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer">
              Terms and Conditions
            </li>
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer">
              Payment regulations
            </li>
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer">
              Regulations on information verification
            </li>
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer">
              Cancellation & Refund Policy
            </li>
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer">
              Frequently Asked Questions
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="h-full">
          <h3 className="text-base font-semibold text-midnightBlue-950">
            Contact us
          </h3>

          <ul className="flex flex-col justify-start gap-3 text-sm text-doveGray-500 transition-colors text-nowrap mt-2">
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer flex items-center gap-1 ">
              <Image width={16} src={mapPinIc} alt="map pin icon" />
              <span>32 Tây Mỗ, Nam Từ Liêm, Hà Nội.</span>
            </li>
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer flex items-center gap-1 ">
              <Image width={16} src={gmailIc} alt="gmail icon" />
              <span>Information@Acenda.gmail.com</span>
            </li>
            <li className="hover:text-midnightBlue-950 hover:cursor-pointer flex items-center gap-1 ">
              <Image width={16} src={hotlineIc} alt="map pin icon" />
              <span>1800 10 11 21</span>
            </li>
          </ul>
          <div className="mt-4">
            <input
              className="py-2 px-4 rounded-md outline-none border border-doveGray-200 text-sm focus:border-midnightBlue-200 placeholder:text-doveGray-400 focus:shadow-midnightBlue-200 focus:shadow-2xl transition-colors"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-primary-500 text-white py-2 px-4 rounded-md ml-1 hover:opacity-90 hover:cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full border-doveGray-200 my-8" />
      {/* Copyright */}
      <div className="flex md:flex-row flex-col items-center justify-between">
        <p className="text-sm font-medium text-doveGray-500">
          Copyright @ {new Date().getFullYear()} Acenda. All Rights Reserved.
        </p>
        <div className="flex items-center md:mt-0 mt-3 gap-2">
          <Image src={visaIC} alt="visa icon" />
          <Image src={paypalIC} alt="discover icon" />
          <Image src={masterCardIC} alt="master card icon" />
          <Image src={googlePayIC} alt="google pay icon" />
        </div>
      </div>
    </footer>
  );
}
