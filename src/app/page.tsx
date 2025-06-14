import Thumbnail from "@/components/ui/Thumbnail";
import MainLayout from "./(main)/layout";
import Step from "@/components/ui/Step";
import TourItem from "@/components/ui/TourItem";
import Image from "next/image";

import contactIMG from "@/../public/contact.png";
import tickYesIC from "@/../public/tick-yes.svg";

import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import HotelItem from "@/components/ui/HotelItem";

export default function Home() {
  return (
    <MainLayout>
      <Thumbnail />
      <Step />
      <div className="mt-16">
        <h4 className="text-3xl text-midnightBlue-950 font-semibold uppercase">
          hot deals today
        </h4>
        <div className="grid grid-cols-5 gap-4 items-center h-full mt-10">
          <TourItem />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h5 className="text-xl font-medium text-smaltBlue-500 ani">
          QUALITY AND REPUTATION ARE TOP PRIORITIES
        </h5>
        <h4 className="text-3xl text-midnightBlue-950 font-semibold uppercase">
          cooperate with us
        </h4>
        <div className="flex justify-between items-center mt-7">
          <section>
            <p className="flex items-center gap-1 text-base text-midnightBlue-950">
              <Image width={14} src={tickYesIC} alt="tick icon" />
              Sign up completely free in 15 minutes
            </p>
            <p className="flex items-center gap-1 text-base text-midnightBlue-950 my-4">
              <Image width={14} src={tickYesIC} alt="tick icon" />
              Reach millions of potential customers
            </p>
            <p className="flex items-center gap-1 text-base text-midnightBlue-950">
              <Image width={14} src={tickYesIC} alt="tick icon" />
              Easy to manage anywhere
            </p>
            <div className="flex items-center mt-10">
              <div className="flex flex-col gap-1 border-r border-doveGray-200 pr-4">
                <h6 className="text-primary-500 text-6xl font-semibold">
                  20k+
                </h6>
                <p className="text-sm text-doveGray-400">
                  Travel service providers, restaurants
                </p>
              </div>
              <div className="flex flex-col gap-1 pl-4">
                <h6 className="text-primary-500 text-6xl font-semibold">
                  20k+
                </h6>
                <p className="text-sm text-doveGray-400">
                  Travel service providers, restaurants
                </p>
              </div>
            </div>
          </section>
          <Image
            className="object-cover bg-midnightBlue-100 rounded-full"
            width={436}
            src={contactIMG}
            alt="chat icon"
          />
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h4 className="uppercase text-3xl text-midnightBlue-950 font-semibold">
            resort travel
          </h4>
          <Link
            href="/tours"
            className="text-doveGray-0 text-sm bg-primary-500 py-2 px-6 hover:opacity-95 rounded-md flex items-center gap-1">
            See more tours
            <RxArrowTopRight />
          </Link>
        </div>
        <div className="mt-7 grid grid-cols-5 gap-4 mb-10">
          <HotelItem />
        </div>
      </div>
    </MainLayout>
  );
}
