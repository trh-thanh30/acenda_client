import React from "react";

export default function TourItemSkeleton() {
  return (
    <div className="animate-pulse h-full bg-doveGray-0 w-full rounded-md">
      <div className="w-full h-[200px] bg-doveGray-100 rounded-t-md" />
      <div className="flex flex-col md:p-3 p-2 gap-2">
        <div className="h-4 bg-doveGray-200 rounded w-3/4 mx-auto" />
        <div className="flex md:flex-row flex-col items-center justify-between md:mt-3 mt-1 gap-2">
          <div className="h-3 w-24 bg-doveGray-200 rounded" />
          <div className="flex gap-1">
            <div className="h-3 w-3 bg-doveGray-200 rounded-full" />
            <div className="h-3 w-3 bg-doveGray-200 rounded-full" />
            <div className="h-3 w-3 bg-doveGray-200 rounded-full" />
            <div className="h-3 w-3 bg-doveGray-200 rounded-full" />
            <div className="h-3 w-3 bg-doveGray-200 rounded-full" />
          </div>
        </div>
        <hr className="md:my-3 my-2 border-doveGray-200" />
        <div className="flex items-center md:justify-between justify-center gap-4">
          <div className="h-4 w-20 bg-doveGray-200 rounded" />
          <div className="md:block hidden h-4 w-24 bg-doveGray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
