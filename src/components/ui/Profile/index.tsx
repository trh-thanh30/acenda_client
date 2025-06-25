"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import avatar from "@/../public/contact.png";
import { LiaNewspaper } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";

// components
import InfoTab from "./Tab/TabProfile";
import ChangePassword from "./Tab/TabChangePassword";

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tab = searchParams.get("tab");

  const handleTabChange = (newTab: string) => {
    router.push(`${pathname}?tab=${newTab}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (!tab) {
      router.replace(`${pathname}?tab=info`);
    }
  }, [tab, pathname, router]);

  return (
    <div className="md:mt-10 mt-8">
      <div className="grid  md:grid-cols-[0.5fr_1fr] grid-cols-[0.2fr_1.2fr] gap-2">
        {/* Left side */}
        <div className="bg-doveGray-0 md:p-4 p-3 rounded-md min-h-screen w-full ">
          {/* HEADER */}
          <div className="md:flex hidden flex-col items-center gap-2 justify-center ">
            <Image
              src={avatar}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
            <span className="text-midnightBlue-900 text-lg font-medium">
              John Doe
            </span>
            <span className="text-doveGray-500 text-sm">abc@gmail.com</span>
          </div>
          {/* BODY */}
          <div className="mt-8 flex flex-col gap-4 transition-all md:items-stretch items-center">
            {/* INFO */}
            <button
              onClick={() => handleTabChange("info")}
              className={`flex items-center justify-between text-midnightBlue-900 font-medium hover:bg-midnightBlue-50 p-2 rounded-md cursor-pointer ${
                tab === "info" ? "bg-midnightBlue-50" : ""
              }`}>
              <h3 className="text-xl md:block hidden">Profile</h3>
              <FiUser size={20} />
            </button>
            {/* CHANGE PASSWORD */}
            <button
              onClick={() => handleTabChange("change-password")}
              className={`flex items-center justify-between text-midnightBlue-900 font-medium hover:bg-midnightBlue-50 p-2 rounded-md cursor-pointer ${
                tab === "change-password" ? "bg-midnightBlue-50" : ""
              }`}>
              <h3 className="text-xl md:block hidden">Change password</h3>
              <IoLockClosedOutline size={20} />
            </button>

            {/* ORDER */}
            <button
              onClick={() => handleTabChange("order")}
              className={`flex items-center justify-between text-midnightBlue-900 font-medium hover:bg-midnightBlue-50 p-2 rounded-md cursor-pointer ${
                tab === "order" ? "bg-midnightBlue-50" : ""
              }`}>
              <h3 className="text-xl md:block hidden">Order</h3>
              <LiaNewspaper size={20} />
            </button>

            {/* FAVORITE */}
            <button
              onClick={() => handleTabChange("favorite")}
              className={`flex items-center justify-between text-midnightBlue-900 font-medium hover:bg-midnightBlue-50 p-2 rounded-md cursor-pointer ${
                tab === "favorite" ? "bg-midnightBlue-50" : ""
              }`}>
              <h3 className="text-xl md:block hidden">Saved favorites</h3>
              <FaRegHeart size={20} />
            </button>

            {/* REVIEW */}
            <button
              onClick={() => handleTabChange("review")}
              className={`flex items-center justify-between text-midnightBlue-900 font-medium hover:bg-midnightBlue-50 p-2 rounded-md cursor-pointer ${
                tab === "review" ? "bg-midnightBlue-50" : ""
              }`}>
              <h3 className="text-xl md:block hidden"> Your review</h3>
              <MdOutlineReviews size={20} />
            </button>
          </div>
        </div>
        {/* Right side */}
        {tab === "info" && <InfoTab />}
        {tab === "change-password" && <ChangePassword />}
        {tab === "order" && <OrderTab />}
        {tab === "favorite" && <FavoriteTab />}
        {tab === "review" && <ReviewTab />}
      </div>
    </div>
  );
}

function OrderTab() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
    </div>
  );
}
function FavoriteTab() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Favorite Items</h2>
      <p className="text-gray-700">
        This is where favorite items will be displayed.
      </p>
    </div>
  );
}
function ReviewTab() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Reviews</h2>
      <p className="text-gray-700">
        This is where user reviews will be displayed.
      </p>
    </div>
  );
}
