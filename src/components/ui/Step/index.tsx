import Image from "next/image";
import React from "react";

import notifiIC from "@/../public/notifi.svg";
import chatIC from "@/../public/chat.svg";
import pinMapIC from "@/../public/pin-map.svg";

export default function Step() {
  return (
    <div className="md:mt-36 mt-9 text-center">
      <span className="md:text-2xl text-xl text-smaltBlue-500 font-medium">
        3 STEPS TO A PERFECT TRIP
      </span>
      <h3 className="font-bold md:text-3xl text-2xl text-midnightBlue-950 uppercase mt-2">
        Find the ride for you
      </h3>
      <div className="md:mt-20 mt-6 flex items-center md:flex-row flex-col md:gap-20 gap-6">
        <div className="flex flex-col items-center">
          <Image
            src={notifiIC}
            alt="notification icon"
            className="md:w-20 md:h-20 w-16 h-16 object-cover"
          />
          <h4 className="md:text-2xl text-xl text-midnightBlue-950 font-medium">
            Tell us what you want to do?
          </h4>
          <p className="text-sm text-doveGray-500">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={pinMapIC}
            alt="notification icon"
            className="md:w-20 md:h-20 w-16 h-16 object-cover"
          />
          <h4 className="md:text-2xl text-xl text-midnightBlue-950 font-medium">
            Share your travel destination
          </h4>
          <p className="text-sm text-doveGray-500">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={chatIC}
            alt="notification icon"
            className="md:w-20 md:h-20 w-16 h-16 object-cover"
          />
          <h4 className="md:text-2xl text-xl text-midnightBlue-950 font-medium">
            Share your travel interests
          </h4>
          <p className="text-sm text-doveGray-500">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using
          </p>
        </div>
      </div>
    </div>
  );
}
