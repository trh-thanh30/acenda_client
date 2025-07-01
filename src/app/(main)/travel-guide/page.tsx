"use client";
import InputPrimary from "@/components/Input/InputPrimary";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";

import React, { useState } from "react";

import BlogItemInPage from "@/components/ui/BlogItemInPage";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Logo from "@/components/Logo";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:my-20 my-8 flex items-center justify-between">
        <h1 className="md:text-2xl text-xl font-semibold text-midnightBlue-950">
          Search Blog Page
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="text-lg font-medium  text-doveGray-500 md:hidden block cursor-pointer hover:text-doveGray-800 transition-colors duration-300">
          <IoFilterSharp />
        </button>
      </div>
      <div className=" grid md:grid-cols-[0.3fr_1fr] gird-cols-1 gap-9">
        {/* SEARCH SIDE */}
        <section className="md:block hidden">
          <h2 className="text-base font-semibold text-midnightBlue-950">
            Search for blogs
          </h2>
          <form className="mt-3 flex flex-col gap-1">
            <InputPrimary placeholder="Search Blog..." type="text" />
            <div className="mt-3">
              <ButtonPrimary text="Search" wFull isValid={true} />
            </div>
          </form>

          <hr className="my-8 border border-doveGray-100" />
          <div className="flex flex-col gap-3">
            <h3 className="md:text-base text-sm font-semibold text-midnightBlue-950">
              Search keywords
            </h3>
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-sm text-doveGray-500 border border-doveGray-200 rounded-full px-2 py-1">
                Promotion
              </span>
            </div>
          </div>
        </section>

        {/* LIST SIDE */}
        <section>
          <div className="grid xl:grid-cols-4 sm:grid-cols-3  grid-cols-2 md:gap-3 gap-2 items-center h-full">
            <BlogItemInPage />
            <BlogItemInPage />
            <BlogItemInPage />
            <BlogItemInPage />
            <BlogItemInPage />
            <BlogItemInPage />
            <BlogItemInPage />
          </div>
        </section>
      </div>
      {/* Mobile filter sidebar */}
      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-full h-screen z-40 bg-black opacity-50 block md:hidden"></div>
        </>
      )}
      <div
        className={`top-0 right-0 w-5/6 bg-doveGray-50 p-4 z-50   fixed h-full overflow-y-scroll  ease-in-out duration-300 transform transition-all md:hidden block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex items-center justify-end hover:opacity-90 hover:cursor-pointer text-midnightBlue-950">
          <IoMdClose size={20} onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex items-center justify-center mb-6">
          <Logo />
        </div>
        <section className="md:block hidden">
          <h2 className="text-base font-semibold text-midnightBlue-950">
            Search for blogs
          </h2>
          <form className="mt-3 flex flex-col gap-1">
            <InputPrimary placeholder="Search Blog..." type="text" />
            <div className="mt-3">
              <ButtonPrimary text="Search" wFull isValid={true} />
            </div>
          </form>

          <hr className="my-8 border border-doveGray-100" />
          <div className="flex flex-col gap-3">
            <h3 className="md:text-base text-sm font-semibold text-midnightBlue-950">
              Search keywords
            </h3>
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-sm text-doveGray-500 border border-doveGray-100 px-2 py-1 rounded-md">
                Promotion
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
