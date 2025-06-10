import Thumbnail from "@/components/ui/Thumbnail";
import MainLayout from "./(main)/layout";

import notifiIC from "@/../public/notifi.svg";
import chatIC from "@/../public/chat.svg";
import pinMapIC from "@/../public/pin-map.svg";
import Image from "next/image";
export default function Home() {
  return (
    <MainLayout>
      <Thumbnail />
      <div className="mt-36 text-center">
        <span className="text-2xl text-smaltBlue-500 font-medium">
          3 STEPS TO A PERFECT TRIP
        </span>
        <h3 className="font-bold text-3xl text-midnightBlue-950 uppercase mt-2">
          Find the ride for you
        </h3>
        <div className="mt-20 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <Image src={notifiIC} alt="notification icon" />
            <h4 className="text-2xl text-midnightBlue-950 font-medium">
              Tell us what you want to do?
            </h4>
            <p className="text-sm text-doveGray-500">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={pinMapIC} alt="notification icon" />
            <h4 className="text-2xl text-midnightBlue-950 font-medium">
              Share your travel destination
            </h4>
            <p className="text-sm text-doveGray-500">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={chatIC} alt="notification icon" />
            <h4 className="text-2xl text-midnightBlue-950 font-medium">
              Share your travel interests
            </h4>
            <p className="text-sm text-doveGray-500">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
