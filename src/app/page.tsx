import MainLayout from "./(main)/layout";
import Step from "@/components/ui/Step";
import Image from "next/image";

import { RxArrowTopRight } from "react-icons/rx";
import contactIMG from "@/../public/contact.png";
import tickYesIC from "@/../public/tick-yes.svg";

import Link from "next/link";
import HotelItem from "@/components/ui/HotelItem";
import BlogItem from "@/components/ui/BlogItem";
import Tour from "@/components/Tour";

export default function Home() {
  return (
    <MainLayout>
      <Step />
      {/* DONE */}
      <div className="md:mt-16 mt-10">
        <h4 className="md:text-3xl text-2xl text-midnightBlue-950 font-semibold uppercase">
          hot deals today
        </h4>
        <Tour col={5} />
      </div>
      {/* DONE */}
      <div className="md:mt-16 mt-10 text-center">
        <h5 className="md:text-xl text-lg font-medium text-smaltBlue-500">
          QUALITY AND REPUTATION ARE TOP PRIORITIES
        </h5>
        <h4 className="md:text-3xl text-2xl md:mt-4 mt-2 text-midnightBlue-950 font-semibold uppercase">
          cooperate with us
        </h4>
        <div className="flex justify-between items-center md:mt-7 mt-4">
          <section>
            <p className="flex items-center gap-1 md:text-base text-sm text-midnightBlue-950">
              <Image width={14} src={tickYesIC} alt="tick icon" />
              Sign up completely free in 15 minutes
            </p>
            <p className="flex items-center gap-1 md:text-base text-sm text-midnightBlue-950 my-4">
              <Image width={14} src={tickYesIC} alt="tick icon" />
              Reach millions of potential customers
            </p>
            <p className="flex items-center gap-1 md:text-base text-sm text-midnightBlue-950">
              <Image width={14} src={tickYesIC} alt="tick icon" />
              Easy to manage anywhere
            </p>
            <div className="flex items-center md:mt-10 mt-5">
              <div className="flex flex-col gap-1 border-r border-doveGray-200 pr-4">
                <h6 className="text-primary-500 md:text-6xl text-5xl font-semibold">
                  20k+
                </h6>
                <p className="md:text-sm text-xs text-doveGray-400">
                  Travel service providers, restaurants
                </p>
              </div>
              <div className="flex flex-col gap-1 pl-4">
                <h6 className="text-primary-500 md:text-6xl text-5xl font-semibold">
                  20k+
                </h6>
                <p className="md:text-sm text-xs text-doveGray-400">
                  Travel service providers, restaurants
                </p>
              </div>
            </div>
          </section>
          <Image
            className="object-cover bg-midnightBlue-100 rounded-full md:block hidden"
            width={436}
            src={contactIMG}
            alt="chat icon"
          />
        </div>
      </div>
      {/* DONE */}
      <div className="md:mt-16 mt-10">
        <div className="flex items-center justify-between">
          <h4 className="uppercase md:text-3xl text-xl text-midnightBlue-950 font-semibold">
            resort travel
          </h4>
          <Link
            href="/tours"
            className="text-doveGray-0 md:text-sm text-xs bg-primary-500 py-2 md:px-6 px-3 hover:opacity-95 rounded-md flex items-center gap-1">
            See more tours
            <RxArrowTopRight />
          </Link>
        </div>
        <div className="grid xl:grid-cols-5 sm:grid-cols-3  grid-cols-2 md:gap-4 gap-3 items-center h-full mt-10">
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
        </div>
      </div>

      <div className="md:mt-16 mt-10">
        <div className="flex items-center justify-between">
          <h4 className="uppercase md:text-3xl text-lg text-midnightBlue-950 font-semibold text-nowrap">
            featured blog
          </h4>
          <Link
            href="/tours"
            className="text-doveGray-0 text-sm bg-primary-500 py-2 md:px-6 px-3 hover:opacity-95 rounded-md flex items-center gap-1">
            See more blog
            <RxArrowTopRight />
          </Link>
        </div>
        <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </MainLayout>
  );
}
