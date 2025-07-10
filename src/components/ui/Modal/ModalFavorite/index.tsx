"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchWishlist } from "@/store/features/wishlistSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { IoHeartDislike } from "react-icons/io5";

import ButtonPrimary from "../../Button/ButtonPrimary";
import ButtonHeart from "../../Button/ButtonHeart";
import { LuMapPin } from "react-icons/lu";

export default function ModalFavorite() {
  const dispatch = useDispatch<AppDispatch>();
  const [orderBy, setOrderBy] = useState<"tour" | "hotel">("tour");
  const wishlist = useSelector((state: RootState) => state.wishlist?.items);
  console.log(orderBy);
  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  return (
    <>
      <p className="text-sm text-center text-doveGray-500 mt-2">
        Rediscover the place you love
      </p>
      <div className="flex items-center justify-between mt-5">
        <button className="text-sm text-primary-500 underline cursor-pointer opacity-85">
          Remove all
        </button>
        <select
          name=""
          id=""
          onChange={(e) => setOrderBy(e.target.value as "tour" | "hotel")}
          className="border border-doveGray-100 text-sm text-doveGray-500 py-2 px-5 outline-none rounded-md">
          <option value="tour">Tour</option>
          <option value="hotel">Hotel</option>
        </select>
      </div>
      <div className="md:mt-10 mt-8">
        {wishlist?.length === 0 ? (
          <div className="flex items-center justify-center flex-col ">
            <span className="text-red-500">
              <IoHeartDislike size={48} />
            </span>
            <span className="text-xl text-doveGray-500 font-semibold mt-1">
              No Favourite
            </span>
            <p className="text-sm text-doveGray-500 mt-1">
              You haven&lsquo;t marked any favorite
            </p>
            <Link href={"/tour"} className="mt-4">
              <ButtonPrimary text="Discover" wFull isValid />
            </Link>
          </div>
        ) : (
          <>
            {wishlist &&
              wishlist.map((item) => (
                <>
                  {item.tour && (
                    <div
                      key={item.tour?.id}
                      className=" bg-doveGray-50 p-2  rounded-md flex items-center md:flex-row flex-col gap-3 mb-4">
                      <div className="relative sm:w-[128px] sm:h-[122px] w-full h-full aspect-[1/1]">
                        {item.tour?.images && item.tour?.images[0] && (
                          <Image
                            src={item.tour?.images[0]}
                            fill
                            className=" object-cover rounded-md"
                            alt="hotel image"
                          />
                        )}
                        <ButtonHeart tourId={item.tour?.id} />
                      </div>
                      <Link
                        className="hover:cursor-pointer hover:opacity-80 duration-300 transition-opacity "
                        href="/hotel/1">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h2 className="text-sm  text-midnightBlue-950">
                              {item.tour?.name}
                            </h2>
                            <h3 className="text-sm text-midnightBlue-950 ">
                              ${item.tour?.priceAdult}
                            </h3>
                          </div>
                          <p className="text-xs text-doveGray-500">
                            {item.tour?.address}
                          </p>
                          <span className="text-xs text-doveGray-500">
                            {item.tour?.highlights.join(" - ")}
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}
                  {item.hotel && (
                    <div
                      key={item.hotel?.id}
                      className=" bg-doveGray-50 p-2  rounded-md flex items-center md:flex-row flex-col gap-3 mb-4">
                      <div className="relative sm:w-[128px] sm:h-[122px] w-full h-full aspect-[1/1]">
                        {item.hotel?.images && item.hotel?.images[0] && (
                          <Image
                            src={item.hotel?.images[0]}
                            fill
                            className=" object-cover rounded-md"
                            alt="hotel image"
                          />
                        )}
                        <ButtonHeart hotelId={item.hotel?.id} />
                      </div>
                      <Link className="hover:cursor-pointer" href="/hotel/1">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h2 className="text-sm  text-midnightBlue-950">
                              {item.hotel?.name}
                            </h2>
                            <h3 className="text-sm text-midnightBlue-950 font-semibold">
                              {/* ${item.tour?.priceAdult} */}
                            </h3>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-doveGray-500 mt-2">
                            <LuMapPin />
                            {item.hotel?.address?.district +
                              ", " +
                              item.hotel?.address?.province}
                          </div>
                          <div className="flex flex-wrap flex-row gap-1 mt-3">
                            {item.hotel?.amenities
                              ?.slice(0, 3)
                              .map((amenity: string, index: number) => (
                                <span
                                  key={index}
                                  className="text-xs cursor-pointer hover:opacity-85 duration-300 transition-opacity text-doveGray-400 bg-doveGray-100 rounded-md p-2">
                                  {amenity}
                                </span>
                              ))}

                            {item.hotel?.amenities &&
                              item.hotel.amenities.length > 3 && (
                                <span className="text-xs text-doveGray-400 bg-doveGray-100 rounded-md p-2">
                                  +{item.hotel.amenities.length - 3} more
                                </span>
                              )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </>
              ))}
          </>
        )}
      </div>
    </>
  );
}
