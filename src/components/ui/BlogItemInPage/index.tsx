import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PiTimer } from "react-icons/pi";
import tourImg from "@/../public/img-tour.png";
import { CiUser } from "react-icons/ci";
export default function BlogItemInPage() {
  return (
    <Link
      href="/blog/3"
      className="h-full bg-doveGray-0 w-fit  hover:cursor-pointer rounded-md">
      <Image
        src={tourImg}
        loading="lazy"
        alt="tour image"
        className="object-cover rounded-t-md"
      />
      <div className="flex flex-col md:p-3 p-2">
        <div className="flex md:flex-row flex-col items-center justify-between mt-1">
          <div className="flex gap-1 items-center text-xs text-doveGray-500">
            <PiTimer />
            <span>3 ngày 2 đêm</span>
          </div>
          <div className="flex gap-1 items-center text-xs text-doveGray-500">
            <CiUser />
            <span>by Admin</span>
          </div>
        </div>
        <h5 className="text-midnightBlue-950 md:text-sm text-xs font-medium mt-2">
          9 delicious dishes in Tay Ninh that are &quot;irresistibly
          attractive&quot;
        </h5>
        <p className="mt-2 text-doveGray-500 text-sm">
          Tay Ninh is a place where attractive natural landscapes of mountains,
          forests and lakes converge. Besides...
        </p>
        <Link className="text-sm text-primary-500 hover:underline mt-2" href="/blog/3">View more</Link>
      </div>
    </Link>
  );
}
