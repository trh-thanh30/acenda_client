"use client";
import { AppDispatch, RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/store/features/wishlistSlice";
import { FaHeart } from "react-icons/fa6";

export default function ButtonHeart({
  tourId,
  hotelId,
}: {
  tourId?: string;
  hotelId?: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.wishlist?.items);
  const tourInWishlist = wishlist.some((item) => item.tour?.id === tourId);
  const hotelInWishlist = wishlist.some((item) => item.hotel?.id === hotelId);

  const handleToggleWishlistTour = () => {
    dispatch(toggleWishlist({ tourId }));
  };

  const handleToggleWishlistHotel = () => {
    dispatch(toggleWishlist({ hotelId }));
  };
  return (
    <>
      {tourId && (
        <div
          className={`absolute top-1 right-1 p-2 rounded-full cursor-pointer duration-300 transition-all ${
            tourInWishlist
              ? "bg-doveGray-0 text-red-500 hover:opacity-90"
              : "text-white hover:text-red-500 hover:bg-doveGray-0"
          }`}
          onClick={handleToggleWishlistTour}>
          <FaHeart />
        </div>
      )}

      {hotelId && (
        <div
          className={`absolute top-1 right-1 p-2 rounded-full cursor-pointer duration-300 transition-all ${
            hotelInWishlist
              ? "bg-doveGray-0 text-red-500 hover:opacity-90"
              : "text-white hover:text-red-500 hover:bg-doveGray-0"
          }`}
          onClick={handleToggleWishlistHotel}>
          <FaHeart />
        </div>
      )}
    </>
  );
}
