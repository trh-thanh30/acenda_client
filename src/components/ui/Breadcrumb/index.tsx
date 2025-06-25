import React from "react";
import imgBreadcrumb from "@/../public/image-breadcurmb.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

interface BreadcrumbProps {
  title: string;
  navTo: {
    label: string;
    href: string;
  }[];
}
export default function Breadcrumb({ title, navTo }: BreadcrumbProps) {
  return (
    <div className="relative">
      <Image
        src={imgBreadcrumb}
        alt="breadcrumb"
        className="w-full md:h-64 h-48 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold uppercase">{title}</h1>
        <div className="absolute md:bottom-14 bottom-13  left-1/2 transform -translate-x-1/2  text-white">
          <nav className="flex items-center space-x-2 md:text-base text-xs font-medium text-nowrap">
            {navTo.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href={item.href}
                  className="hover:underline text-doveGray-200 hover:text-doveGray-0 transition-colors duration-300">
                  {item.label}
                </Link>
                {index < navTo.length - 1 && (
                  <span className="text-doveGray-200 text-xs">
                    <FaAngleRight />
                  </span>
                )}
              </React.Fragment>
            ))}
            <span className="text-doveGray-200 text-xs">
              <FaAngleRight />
            </span>
            <span className="text-primary-500">{title}</span>
          </nav>
        </div>
      </div>
    </div>
  );
}
