"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// Logo Icon
import phoneIc from "@/../public/phone.svg";
import emailIc from "@/../public/email.svg";
import googleIc from "@/../public/google.svg";
import youtubeIc from "@/../public/youtube.svg";
import twitterIc from "@/../public/twitter.svg";
import facebookIc from "@/../public/facebook.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { CiBoxList, CiHeart, CiUser } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";

// Components
import NavLink from "../NavLink";
import Logo from "@/components/Logo";
import Thumbnail from "../Thumbnail";
import Breadcrumb from "../Breadcrumb";
import Modal from "../Modal";
import ModalFavorite from "../Modal/ModalFavorite";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const [openModalFavorite, setOpenModalFavorite] = useState<boolean>(false);
  const pathName = usePathname();
  const params = useParams();
  const tourId = params.tourId as string;
  const hotelId = params.hotelId as string;
  return (
    <>
      <header className="sticky -top-1 z-10 bg-white  transition-all duration-300">
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
            {user ? (
              <div className="relative group">
                <Link href="/profile?tab=info">
                  <Image
                    src={user.avatar}
                    alt="user-avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full hover:cursor-pointer  hover:opacity-90 transition-opacity duration-300"
                  />
                </Link>
                <div className="absolute  opacity-0 invisible group-hover:visible group-hover:opacity-100  right-0 transition-all duration-300 ease-in-out bg-doveGray-0 p-4 rounded-md z-10">
                  <p className="text-doveGray-500 text-sm text-center">
                    {user.email}
                  </p>
                  <hr className="my-4 border border-doveGray-100" />
                  <div className="space-y-2 font-medium">
                    <Link
                      href={"/profile?tab=info"}
                      className="flex items-center  hover:bg-midnightBlue-50 p-2 w-[180px] rounded-md transition-colors duration-300">
                      <CiUser className="text-midnightBlue-950" size={20} />
                      <span className="text-sm text-midnightBlue-950 text-center w-full">
                        My Profile
                      </span>
                    </Link>
                    <button
                      onClick={() => setOpenModalFavorite(true)}
                      className="flex items-center  hover:bg-midnightBlue-50 cursor-pointer p-2 rounded-md transition-colors duration-300 w-full">
                      <CiHeart className="text-midnightBlue-950" size={20} />
                      <span className="text-sm text-midnightBlue-950 text-center w-full">
                        My Favorite
                      </span>
                    </button>
                    {/* Modal favorite  */}
                    <Modal
                      isOpen={openModalFavorite}
                      close={() => setOpenModalFavorite(false)}
                      titleModal="Saved appropriate request">
                      <ModalFavorite />
                    </Modal>
                    <Link
                      href={"/profile?tab=order"}
                      className="flex items-center  hover:bg-midnightBlue-50 p-2 rounded-md transition-colors duration-300">
                      <CiBoxList className="text-midnightBlue-950" size={20} />
                      <span className="text-sm text-midnightBlue-950 text-center w-full">
                        My Order
                      </span>
                    </Link>
                  </div>
                  <hr className="my-4 border border-doveGray-100" />
                  <button className="flex items-center  hover:bg-red-50 p-2 rounded-md transition-colors duration-300 w-full cursor-pointer">
                    <LuLogOut size={20} className="text-red-400" />
                    <span className="text-sm text-red-400 w-full font-medium">Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/signin"
                className="py-2 w-fit md:px-6 px-4 hover:cursor-pointer text-xs md:text-sm font-semibold border-midnightBlue-800 border rounded-full text-midnightBlue-800 hover:text-doveGray-0 hover:bg-midnightBlue-950">
                Sign In
              </Link>
            )}
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
            className="fixed top-0 left-0 w-full h-screen z-40 bg-black opacity-50 block md:hidden"></div>
        </>
      )}
      <div
        className={`top-0 right-0 w-5/6 bg-doveGray-50 p-2 z-50   fixed h-full  ease-in-out duration-300 transform transition-all md:hidden block ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex items-center justify-end hover:opacity-90 hover:cursor-pointer text-midnightBlue-950">
          <IoMdClose size={20} onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex items-center justify-center mb-3">
          <Logo />
        </div>
        {user ? (
          <div className="flex items-center flex-col justify-center gap-2 mt-3">
            <h2 className="text-midnightBlue-950 text-2xl font-medium">
              Welcome back!
            </h2>
            <Link href="/profile" className="hover:cursor-pointer">
              <Image
                src={user.avatar}
                width={80}
                height={80}
                alt="user-avatar"
                className="rounded-full w-20 h-20 object-cover hover:cursor-pointer"
              />
            </Link>
            <span className="text-sm text-doveGray-500">{user.email}</span>
          </div>
        ) : (
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
        )}
        <hr className="my-4 border-doveGray-200" />
        <nav className="flex flex-col gap-5 p-1">
          <NavLink href="/">HOMEPAGE</NavLink>
          <NavLink href="/tour">TOUR</NavLink>
          <NavLink href="/hotel">HOTEL</NavLink>
          <NavLink href="/travel-guide">TRAVEL GUIDE</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </nav>
      </div>
      {/* Thumbnail */}
      {pathName === "/" && <Thumbnail />}
      {pathName === "/tour" && <Thumbnail />}
      {pathName === "/hotel" && <Thumbnail />}

      {/* Breadcrumb */}
      {pathName === "/profile" && (
        <Breadcrumb title="Profile" navTo={[{ label: "Home", href: "/" }]} />
      )}

      {pathName === "/travel-guide" && (
        <Breadcrumb
          title="Travel guide"
          navTo={[{ label: "Home", href: "/" }]}
        />
      )}

      {pathName === "/contact" && (
        <Breadcrumb title="Contact" navTo={[{ label: "Home", href: "/" }]} />
      )}

      {pathName === "/tour/search" && (
        <Breadcrumb
          title={`Search Tour`}
          navTo={[
            { label: "Home", href: "/" },
            { label: "Tour", href: "/tour" },
          ]}
        />
      )}

      {pathName === "/hotel/search" && (
        <Breadcrumb
          title={`Hotel Search`}
          navTo={[
            { label: "Home", href: "/" },
            { label: "Hotel", href: "/hotel" },
          ]}
        />
      )}

      {pathName.startsWith("/tour/") &&
        !pathName.startsWith("/tour/search") && (
          <Breadcrumb
            title={`${tourId}`}
            navTo={[
              { label: "Home", href: "/" },
              { label: "Tour", href: "/tour" },
            ]}
          />
        )}

      {pathName.startsWith("/hotel/") &&
        !pathName.startsWith("/hotel/search") && (
          <Breadcrumb
            title={`${hotelId}`}
            navTo={[
              { label: "Home", href: "/" },
              { label: "Hotel", href: "/hotel" },
            ]}
          />
        )}
    </>
  );
}
