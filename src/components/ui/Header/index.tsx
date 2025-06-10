import React from "react";
import Image from "next/image";

// Components
import Logo from "@/components/Logo";
// Logo Icon
import phoneIc from "@/../public/phone.svg";
import emailIc from "@/../public/email.svg";
import googleIc from "@/../public/google.svg";
import youtubeIc from "@/../public/youtube.svg";
import twitterIc from "@/../public/twitter.svg";
import facebookIc from "@/../public/facebook.svg";

import NavLink from "../NavLink";

export default function Header() {
  return (
    <header className="">
      {/* Introduce */}
      <section className="-mx-12 py-3 px-12 bg-midnightBlue-950">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2">
              <Image src={phoneIc} alt="phone icon" />
              <span className="text-sm text-doveGray-0">1800 10 11 21</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={emailIc} alt="email icon" />
              <span className="text-sm text-doveGray-0">
                InfomationAcenda@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image width={16} src={googleIc} alt="google icon" />
            <Image width={16} src={youtubeIc} alt="youtube icon" />
            <Image width={16} src={twitterIc} alt="twitter icon" />
            <Image width={16} src={facebookIc} alt="facebook icon" />
          </div>
        </div>
      </section>
      {/* Navigation */}
      <section className="flex justify-between items-center py-2">
        <Logo />
        <nav className="flex items-center justify-center gap-6">
          <NavLink href="/">HOMEPAGE</NavLink>
          <NavLink href="/tour">TOUR</NavLink>
          <NavLink href="/hotel">HOTEL</NavLink>
          <NavLink href="/travel-guide">TRAVEL GUIDE</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </nav>
        <button className="py-2 w-fit px-6 hover:cursor-pointer text-sm font-semibold border-midnightBlue-800 border rounded-full text-midnightBlue-800 hover:text-doveGray-0 hover:bg-midnightBlue-950">
          Sign Up
        </button>
      </section>
    </header>
  );
}
