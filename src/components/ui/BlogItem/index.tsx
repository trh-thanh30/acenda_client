import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogIMG from "@/../public/blog.png";
import { CiCalendarDate, CiUser } from "react-icons/ci";

export default function BlogItem() {
  return (
    <Link
      href="/blog"
      className="bg-doveGray-0 rounded-md flex items-center gap-2 md:flex-row flex-col  hover:shadow-xs transition-all group">
      <Image
        loading="lazy"
        src={blogIMG}
        alt="blog"
        className="object-cover rounded-l-md w-[292px] h-[222px] group-hover:opacity-80 transition-all"
      />
      <div className="flex flex-col  p-2 gap-3">
        <h6 className="text-base text-midnightBlue-900 font-semibold">
          Top 11 món ăn ngon côn đảo bạn nhất định phải thử
        </h6>
        <p className="text-xs text-doveGray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo animi
          dignissimos, ad voluptatibus enim minima nesciunt aut blanditiis
          delectus fugiat quam cumque magni pariatur quidem, odit reiciendis
          ullam. In, quasi.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-doveGray-500">
            <CiCalendarDate size={16} />
            <span>01/01/2023</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-doveGray-500">
            <CiUser size={16} />
            <span>Admin</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
