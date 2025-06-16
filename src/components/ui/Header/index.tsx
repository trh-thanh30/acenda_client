"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Logo Icon
import phoneIc from "@/../public/phone.svg";
import emailIc from "@/../public/email.svg";
import googleIc from "@/../public/google.svg";
import youtubeIc from "@/../public/youtube.svg";
import twitterIc from "@/../public/twitter.svg";
import facebookIc from "@/../public/facebook.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

// Components
import NavLink from "../NavLink";
import Logo from "@/components/Logo";
import Thumbnail from "../Thumbnail";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header>
        {/* Introduce */}
        <section className=" md:py-3 py-2 md:px-12 px-2 bg-midnightBlue-950 w-full">
          <div className="flex items-center justify-between md:flex-row flex-col">
            <div className="flex items-center md:gap-16 md:justify-normal justify-center gap-2 w-full">
              <div className="flex items-center gap-1">
                <Image src={phoneIc} alt="phone icon" />
                <span className="md:text-sm text-xs text-doveGray-0">
                  1800 10 11 21
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={emailIc} alt="email icon" />
                <span className="md:text-sm text-xs text-doveGray-0">
                  InfomationAcenda@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 md:mt-0 mt-3 md:justify-normal justify-center w-fit">
              <Image
                width={16}
                src={googleIc}
                alt="google icon"
                className="hover:cursor-pointer"
              />
              <Image
                width={16}
                src={youtubeIc}
                alt="youtube icon"
                className="hover:cursor-pointer"
              />
              <Image
                width={16}
                src={twitterIc}
                alt="twitter icon"
                className="hover:cursor-pointer"
              />
              <Image
                width={16}
                src={facebookIc}
                alt="facebook icon"
                className="hover:cursor-pointer"
              />
            </div>
          </div>
        </section>
        {/* Navigation */}
        <section className="flex justify-between items-center py-3 md:px-12 px-4">
          <Logo />
          <div className="md:block hidden">
            <nav className="flex items-center justify-center gap-6">
              <NavLink href="/">HOMEPAGE</NavLink>
              <NavLink href="/tour">TOUR</NavLink>
              <NavLink href="/hotel">HOTEL</NavLink>
              <NavLink href="/travel-guide">TRAVEL GUIDE</NavLink>
              <NavLink href="/contact">CONTACT</NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/signup"
              className="py-2 w-fit md:px-6 px-4 hover:cursor-pointer text-xs md:text-sm font-semibold border-midnightBlue-800 border rounded-full text-midnightBlue-800 hover:text-doveGray-0 hover:bg-midnightBlue-950">
              Sign Up
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden block text-lg hover:cursor-pointer text-midnightBlue-950">
              <RiMenu3Fill />
            </button>
          </div>
        </section>
      </header>
      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-full h-screen bg-black opacity-50 block md:hidden"></div>
        </>
      )}
      <div
        className={`top-0 right-0 w-5/6 bg-doveGray-0 p-2  text-white fixed h-full z-40 ease-in-out duration-300 transform transition-all md:hidden block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex items-center justify-end hover:opacity-90 hover:cursor-pointer text-midnightBlue-950">
          <IoMdClose size={20} onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex items-center justify-center mb-3">
          <Logo />
        </div>
        <div className="flex flex-col gap-1 text-midnightBlue-950 font-medium text-sm">
          <Link
            href="/signin"
            className="hover:cursor-pointer hover:bg-midnightBlue-50 p-1 rounded-md">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="hover:cursor-pointer hover:bg-midnightBlue-50 p-1 rounded-md">
            Sign Up
          </Link>
        </div>
        <hr className="my-4 border-doveGray-200" />
        <nav className="flex flex-col gap-2 p-1">
          <NavLink href="/">HOMEPAGE</NavLink>
          <NavLink href="/tour">TOUR</NavLink>
          <NavLink href="/hotel">HOTEL</NavLink>
          <NavLink href="/travel-guide">TRAVEL GUIDE</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </nav>
      </div>
      <Thumbnail />
    </>
  );
}
