// components/Loading/SkeletonDetailsTour.tsx

import React from "react";

export default function SkeletonDetailsTour() {
  return (
    <div className="animate-pulse space-y-5">
      <div className="h-6 w-full bg-gray-200 rounded" />
      <div className="h-4 w-1/3 bg-gray-200 rounded" />
      <div className="h-4 w-1/4 bg-gray-200 rounded" />

      <div className="w-full h-[300px] bg-gray-200 rounded-md" />

      <div className="h-5 w-1/4 bg-gray-200 mt-6" />
      <div className="h-4 w-full bg-gray-100 rounded" />
      <div className="h-4 w-full bg-gray-100 rounded" />
      <div className="h-4 w-3/4 bg-gray-100 rounded" />

      <div className="grid grid-cols-3 gap-4 mt-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-[150px] bg-gray-200 rounded-md" />
        ))}
      </div>

      <div className="h-5 w-1/4 bg-gray-200 mt-8" />
      <div className="h-4 w-full bg-gray-100 rounded" />
      <div className="h-4 w-5/6 bg-gray-100 rounded" />
      <div className="h-4 w-4/6 bg-gray-100 rounded" />
    </div>
  );
}
