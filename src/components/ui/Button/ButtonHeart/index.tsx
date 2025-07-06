"use client";
import { AppDispatch, RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/store/features/wishlistSlice";
import { FaHeart } from "react-icons/fa6";

export default function ButtonHeart({ tourId }: { tourId: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.wishlist?.items);
  const inWishlist = wishlist.some((item) => item.tour.id === tourId);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(tourId));
  };
  return (
    <>
      {inWishlist ? (
        <div className="absolute top-1 right-1 p-3 bg-doveGray-0 rounded-full text-red-500 cursor-pointer">
          <FaHeart onClick={handleToggleWishlist} />
        </div>
      ) : (
        <div className="absolute top-1 right-1 hover:scale-105 cursor-pointer p-3 hover:bg-doveGray-0 rounded-full text-white hover:text-red-500 duration-300 transition-colors">
          <FaHeart onClick={handleToggleWishlist} />
        </div>
      )}
    </>
  );
}
