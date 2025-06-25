import React from "react";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

import imgHL from "@/../public/imghl.png";
import imgCB from "@/../public/imgcb.png";
import imgMC from "@/../public/imgmc.png";
import imgNB from "@/../public/imgnb.png";
import mediaImg from "@/../public/media.jpg";
import professIC from "@/../public/profess.svg";
import deversityIC from "@/../public/diversity.svg";
import paymentIC from "@/../public/payment.svg";

import TourItem from "@/components/ui/TourItem";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";

const imgs = [
  { src: imgHL, label: "Hạ Long" },
  { src: imgCB, label: "Cát Bà" },
  { src: imgMC, label: "Mộc Châu" },
  { src: imgNB, label: "Ninh Bình" },
];
const signatureFont = localFont({
  src: "../../../font/NVN-Motherland-Signature.ttf",
  variable: "--font-signature",
  display: "swap",
});
export default function Page() {
  return (
    <div className="md:mt-44 mt-48">
      <h1 className="text-midnightBlue-950 md:text-3xl text-lg uppercase font-semibold">
        Explore nearby destinations
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:mt-10 mt-8 uppercase">
        {imgs.map((img, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden group aspect-[3/4]">
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer aspect-[3/4]"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent md:p-4 p-3">
              <h2 className="text-white md:text-lg text-sm font-semibold">
                {img.label}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between md:mt-20 mt-10">
        <h2 className="text-midnightBlue-950 md:text-3xl text-base font-semibold">
          Summer Tours at Good Prices
        </h2>
        <Link href={"/tour"}>
          <ButtonPrimary isValid={true} text="See all tours" />
        </Link>
      </div>
      <div className="grid xl:grid-cols-5 sm:grid-cols-3  grid-cols-2 md:gap-4 gap-3 items-center h-full mt-10">
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
      </div>

      <div className="md:mt-20 mt-10 relative w-full">
        <Image src={mediaImg} alt="media" className="w-full  object-contain" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <span
            className={`${signatureFont.className} text-base md:text-xl text-smaltBlue-500 sm:block hidden`}>
            Bustling is luxurious
          </span>

          <div className="sm:my-3 my-0">
            <ButtonPrimary text="More than 1000 tours" isValid={true} />
          </div>

          <span className="text-sm md:text-lg lg:text-xl text-smaltBlue-500 mt-3 font-semibold sm:block hidden">
            Novelty - Quality from North to South
          </span>
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <div className="flex items-center justify-between md:flex-row flex-col">
          <h2 className="md:text-2xl text-lg text-midnightBlue-950 font-semibold uppercase">
            v-travel suggestions
          </h2>
          <div className="flex items-center gap-4 transition-colors font-medium md:mt-0 mt-2">
            <button className="md:text-sm  text-primary-500">Day tour</button>
            <button className="md:text-sm  text-doveGray-500 hover:text-primary-500 cursor-pointer">
              Short tour
            </button>
            <button className="md:text-sm  text-doveGray-500 hover:text-primary-500 cursor-pointer">
              Experience tour
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-5 sm:grid-cols-3  grid-cols-2 md:gap-4 gap-3 items-center h-full mt-10">
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <div className="flex md:items-center items-start justify-between md:flex-row flex-col">
          <div className="flex items-center gap-2">
            <Image
              src={professIC}
              alt="profess"
              className="w-12 h-12 bg-doveGray-0 p-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-base text-midnightBlue-950 font-semibold">
                Professional consulting
              </h2>
              <span className="md:text-sm text-xs text-doveGray-500">
                Enthusiastic support, thoughtful care
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:my-0 my-3">
            <Image
              src={deversityIC}
              alt="profess"
              className="w-12 h-12 bg-doveGray-0 p-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-base text-midnightBlue-950 font-semibold">
                Diverse experiences
              </h2>
              <span className="md:text-sm text-xs text-doveGray-500">
                Choose the right tour, reasonable tour price
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={paymentIC}
              alt="profess"
              className="w-12 h-12 bg-doveGray-0 p-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-base text-midnightBlue-950 font-semibold">
                Secure payment
              </h2>
              <span className="md:text-sm text-xs text-doveGray-500">
                Flexible, transparent, secure
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <div className="flex items-center justify-between">
          <h2 className="md:text-2xl text-xl font-semibold text-midnightBlue-950 uppercase">
            viewed recently
          </h2>
          <button className="text-primary-500 text-sm font-medium underline cursor-pointer">
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
}
