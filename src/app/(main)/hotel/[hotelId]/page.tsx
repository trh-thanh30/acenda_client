import Image from "next/image";

import HotelImage from "@/../public/hotelImg.png";
import MapIC from "@/../public/map-pin.svg";
import { CiStar } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { TiTickOutline } from "react-icons/ti";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
import RoomHotel from "./components/RoomHotel";
import Link from "next/link";
const amenities = [
  "Internet miễn phí",
  "Bữa sáng tại phòng",
  "Giường lớn",
  "Hồ bơi",
  "Máy lạnh",
  "Tủ lạnh mini",
  "TV màn hình phẳng",
  "Dịch vụ dọn phòng",
  "Lễ tân 24/7",
  "Chỗ đỗ xe miễn phí",
];
export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ hotelId: string }>;
}) {
  const { hotelId } = await params;
  
  return (
    <div className="md:mt-20 mt-10">
      {/* Image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] gap-4">
        {/* Ảnh bên trái chiếm full chiều cao */}
        <Image
          src={HotelImage}
          alt="hotel image"
          className="w-full h-full object-cover rounded-md"
        />

        {/* Cột bên phải: 3 ảnh chia đều chiều cao */}
        <div className="flex md:flex-col flex-row gap-2 h-full">
          <div className="w-full h-full overflow-hidden rounded-md">
            <Image
              src={HotelImage}
              alt="hotel image"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="w-full h-full overflow-hidden rounded-md">
            <Image
              src={HotelImage}
              alt="hotel image"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="w-full h-full overflow-hidden rounded-md">
            <Image
              src={HotelImage}
              alt="hotel image"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Information */}
      <div className="md:mt-12 mt-8 grid md:grid-cols-[1.5fr_0.5fr] grid-cols-1 gap-4">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-midnightBlue-950 xl:text-3xl md:text-xl sm:text-base font-semibold">
              Vinpearl Resort & Golf Nam Hội An
            </h1>
            <div className="flex items-center gap-1  text-doveGray-500">
              <FiHeart
                size={16}
                className="hover:text-primary-500 cursor-pointer"
              />
              <IoShareSocialOutline
                size={16}
                className="hover:text-doveGray-600 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center mt-3 md:gap-8 gap-3 md:text-sm text-xs text-doveGray-500">
            <div className="space-x-2 ">
              <span className="border-r border-r-doveGray-200 pr-2">
                Have breakfast
              </span>

              <span>Entertainment</span>
            </div>
            <div className="flex items-center gap-2">
              <Image className="w-4 h-4" src={MapIC} alt="map-ic" />
              Xã Bình Minh, Huyện Thăng Bình, Tỉnh Quảng Nam
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold flex items-center gap-1">
                <CiStar />
                4.8
              </span>
              <span className="text-primary-500 underline">(24 reviews)</span>
            </div>
          </div>
          <hr className="border border-doveGray-100 my-4" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <section>
              <h2 className="text-base font-semibold text-midnightBlue-950">
                Hotel amenities
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-3">
                {amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 md:text-sm text-xs text-dove-500">
                    <span className="inline-block w-5 h-5 bg-gray-200 rounded"></span>
                    {item}
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-base font-semibold text-midnightBlue-950">
                Hotel policy
              </h2>
              <div className="flex items-center justify-between text-sm text-doveGray-500 mt-1 md:mt-3">
                <span>Check-in:</span>
                <span>From 14:00</span>
              </div>
              <div className="flex items-center justify-between text-sm text-doveGray-500">
                <span>Check out:</span>
                <span>Before 12:00</span>
              </div>
            </section>
          </div>
        </div>
        <div className="bg-doveGray-0 py-5 px-3 rounded-md h-fit">
          <div className="flex items-center justify-center gap-1 text-midnightBlue-950 text-center">
            <HiOutlineCalendarDateRange />
            <h3 className="font-medium">Check-in - Check-out</h3>
          </div>
          <hr className="border border-doveGray-200 w-full my-4" />
          <div className="flex items-center gap-5 text-sm text-doveGray-500 justify-center">
            <span className="border-r border-r-doveGray-200 pr-5">
              Th 2, 26/06
            </span>
            <span>Th4, 28/06 </span>
          </div>
          <hr className="border border-doveGray-200 w-full my-4" />
          <div className="flex mb-4 flex-col gap-4 text-sm text-doveGray-500">
            <span className="flex items-center gap-1">
              <TiTickOutline />
              Good price, exclusive offer
            </span>
            <span className="flex items-center gap-1">
              <TiTickOutline />
              24/7 support, service from the heart
            </span>
          </div>
          <Link href={`/hotel/${hotelId}/payment`}>
            <ButtonPrimary isValid text="Book now" wFull />
          </Link>
        </div>
        <hr className="border border-doveGray-100 my-6" />
      </div>
      {/* Description */}
      <div className="bg-doveGray-0 py-5 px-4 rounded-md">
        <h4 className="text-base text-midnightBlue-950 font-semibold">
          Description
        </h4>
        <p className="text-sm mt-4 text-doveGray-500">
          Trải nghiệm phải thử ở Khu nghỉ dưỡng Vinpearl Resort & Golf Nam Hội
          An. Tại tổ hợp hồ bơi giải trí Fantasia, nơi tàu chiến lớn với các ống
          trượt nước mạo hiểm mang đậm phong cách Tây Ban Nha đang neo đậu, bố
          mẹ và trẻ nhỏ sẽ có những phút giây vui chơi thỏa thích và sảng khoái.
          Bên cạnh đó, du khách cũng có thể thưởng ngoạn toàn cảnh đại dương từ
          tháp quan sát Faro cao 30 mét hoặc thư giãn tại Spa Cenvaree. Những vị
          khách nhỏ tuổi có thể tự do tạo ra không gian phấn khích của riêng
          mình tại sân chơi trẻ em ngoài trời hoặc trung tâm giải trí trong nhà,
          bao gồm các khu vực riêng biệt dành cho trẻ em hoặc thanh thiếu niên
          như sân chơi bowling, phòng hát karaoke, vận động trường...
        </p>
      </div>
      <h3 className="text-base font-semibold text-midnightBlue-950 md:mt-8 mt-5">
        Select room type
      </h3>
      <RoomHotel />
    </div>
  );
}
