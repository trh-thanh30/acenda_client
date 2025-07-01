import Image from "next/image";
import { CiHeart, CiShare1, CiStar, CiTimer } from "react-icons/ci";
import map from "@/../public/map.png";
import InputPrimary from "@/components/Input/InputPrimary";
import ButtonPrimary from "@/components/ui/Button/ButtonPrimary";
export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ tourId: string }>;
}) {
  const { tourId } = await params;
  return (
    <div className="md:mt-16 mt-10 grid md:grid-cols-[1.5fr_0.5fr] grid-cols-1 gap-8">
      {/* Left side */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-midnightBlue-950">
            Tour Phú Quốc 3N2Đ:
          </h1>
          <div className="flex items-center gap-2 text-midnightBlue-950 font-medium text-base">
            <CiHeart />
            <CiShare1 />
          </div>
        </div>
        <p className="md:text-sm text-xs text-smaltBlue-500 mt-2">
          HCM - Grand World - Câu Cá - Lặn Ngắm San Hô
        </p>
        <div className="flex items-center gap-5 mt-4">
          <span className="text-xs text-doveGray-400">Kiên Giang</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <CiStar color="#f27052" />
              <span className="text-xs text-doveGray-500 font-medium">4.8</span>
            </div>
            <span className="text-xs text-primary-500 underline">
              (24 đánh giá)
            </span>
          </div>
        </div>
        <div className="md:mt-10 mt-8 bg-doveGray-0 md:p-4 p-2 rounded-md">
          <div className="flex md:gap-14 gap-6 items-center transition-all duration-300">
            <h2 className="md:text-base text-xs font-semibold text-midnightBlue-950 border-b-2 border-b-primary-500 pb-3">
              Tổng quan
            </h2>
            <h2 className="md:text-base text-xs font-medium text-doveGray-500 pb-3 hover:cursor-pointer  hover:text-midnightBlue-950">
              Chương trình tour
            </h2>
            <h2 className="md:text-base text-xs font-medium text-doveGray-500 pb-3 hover:cursor-pointer  hover:text-midnightBlue-950">
              Lịch khởi hành
            </h2>
          </div>
          <p className="mt-4 text-sm text-doveGray-500">
            Thường được biết đến với tên &rsquo;Đảo Ngọc&#39;, Phú Quốc sở hữu
            những bãi biển hoang sơ tuyệt đẹp, sinh vật biển đa dạng và cảnh
            quan thiên nhiên phong phú được kết hợp tài tình với những cánh rừng
            tự nhiên, núi, biển và thác nước, sông hồ. Phú Quốc luôn là một
            trong những điểm nghĩ dưỡng hàng đầu với các khu resort đẳng cấp
            quốc tế cùng với những khu vui chơi, giải trí quy mô bậc nhất Đông
            Nam Á như công viên chủ đề Vin Wonders, thành phố không ngủ Grand
            World, casino Phú Quốc....Ngoài ra, Phú Quốc vẫn còn lưu giữ nhiều
            di tích văn hóa, lịch sử và các nghề truyền thống hàng trăm năm tuổi
            như nghề làm nước mắm Phú Quốc trứ danh.
          </p>
        </div>
        <div className="md:mt-10 mt-8">
          <h3 className="text-base font-semibold text-midnightBlue-950">Map</h3>
          <Image
            src={map}
            alt="map"
            className="object-cover w-full h-[276px] md:mt-5 mt-4 rounded-md"
          />
        </div>
        <div className="md:mt-10 mt-8">
          <h3 className="text-base font-semibold text-midnightBlue-950">
            Hình ảnh
          </h3>
          <div className="grid grid-cols-3 md:gap-4 gap-2 mt-4">
            <Image
              src={map}
              alt="map"
              className="object-cover w-full rounded-md"
            />
            <Image
              src={map}
              alt="map"
              className="object-cover w-full rounded-md"
            />
            <Image
              src={map}
              alt="map"
              className="object-cover w-full rounded-md"
            />
            <Image
              src={map}
              alt="map"
              className="object-cover w-full rounded-md"
            />
            <Image
              src={map}
              alt="map"
              className="object-cover w-full rounded-md"
            />
            <Image
              src={map}
              alt="map"
              className="object-cover w-full rounded-md"
            />
          </div>
        </div>
        <div className="md:mt-10 mt-8 bg-doveGray-0 md:p-4 p-2 rounded-md">
          <div className="flex md:gap-14 gap-6 items-center transition-all duration-300">
            <h2 className="md:text-base text-xs font-semibold text-midnightBlue-950 border-b-2 border-b-primary-500 pb-3">
              Chi phí dự kiến
            </h2>
            <h2 className="md:text-base text-xs font-medium text-doveGray-500 pb-3 hover:cursor-pointer  hover:text-midnightBlue-950">
              Phụ thu
            </h2>
            <h2 className="md:text-base text-xs font-medium text-doveGray-500 pb-3 hover:cursor-pointer  hover:text-midnightBlue-950">
              Lưu ý
            </h2>
          </div>
          <p className="mt-4 text-sm text-doveGray-500">
            Vận chuyển: - Vé máy bay khứ hồi Vietjet Air bao gồm 7kg hành lý ký
            xách tay + 20kg hành lý ký gửi, thuế và phí sân bay. - Xe du lịch
            hiện đại, điều hòa, đời mới đưa đón tham quan theo chương trình -
            Tàu câu cá và lặn ngắm san hô: dụng cụ câu cá, kính lặn, áo phao,
            ghế xếp nghỉ mát…. Lưu trú: - Khách sạn 3 sao tiêu chuẩn (2-3
            khách/phòng). Phòng tiện nghi điều hoà, tivi, nóng lạnh khép kín 02
            người/phòng. Trường hợp lẻ nam hoặc nữ ngủ ghép 03 người/ phòng.
            Khác: - Ăn uống theo lịch trình tham quan. - Vé vào cửa và thăm quan
            các điểm theo lịch trình (vào cửa lần 1) - HDV nhiệt tình, kinh
            nghiệm, am hiểu kiến thức tuyến điểm phục vụ đoàn theo tour. - Nước
            uống, khăn lạnh phục vụ đoàn: 01 chai nước + 01 khăn lạnh/ngày. -
            Bảo hiểm du lịch mức cao nhất 20.000.000 đồng/người/vụ. - Y tế dự
            phòng trên xe.
          </p>
        </div>
      </div>
      {/* Right side */}
      <div>
        <div className="bg-doveGray-0 rounded-md py-5 px-2">
          <div className="flex items-center justify-between">
            <h4 className="text-base text-midnightBlue-950 font-semibold  text-nowrap w-full">
              Khởi hành
            </h4>
            <InputPrimary type="date" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <h4 className="text-base text-midnightBlue-950 font-semibold  text-nowrap w-full">
              Giờ đi
            </h4>
            <InputPrimary type="time" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base text-midnightBlue-950 font-semibold  mt-5">
              Số lượng người
            </h4>
            <div className="flex items-center justify-between mt-2">
              <h5 className="text-sm text-doveGray-500 font-medium text-nowrap w-full">
                Người lớn
              </h5>
              <InputPrimary type="number" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <h5 className="text-sm text-doveGray-500 font-medium text-nowrap w-full">
                Trẻ em
              </h5>
              <InputPrimary type="number" />
            </div>
          </div>
          <hr className="mt-3 border-doveGray-100 border" />
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h5 className="text-base text-smaltBlue-500 font-medium">
                Tổng cộng:
              </h5>
              <span className="text-2xl text-midnightBlue-950 font-semibold">
                2.500.000đ
              </span>
            </div>
            <div className="mt-8 mb-4 w-full">
              <ButtonPrimary wFull text="Đặt ngay" isValid={true} />
            </div>
            <button className="border border-primary-500 rounded-md py-2 px-8 font-medium transition-all bg-primary-50 text-primary-500 w-full hover:cursor-pointer">
              Liên hệ tư vấn
            </button>
          </div>
        </div>
        <div className="md:mt-10 mt-8">
          <h4 className="text-base font-semibold text-midnightBlue-950">
            Có thể bạn thích
          </h4>
          <div className="flex items-stretch bg-doveGray-0 rounded-md mt-3">
            <div className="w-[76px] flex-shrink-0">
              <Image
                loading="lazy"
                src={map}
                alt="blog"
                className="w-full h-full object-cover rounded-l-md"
              />
            </div>
            <div className="flex flex-col gap-3 mx-3 py-2 flex-grow">
              {" "}
              {/* flex-grow allows content to expand */}
              <h5 className="text-sm font-medium text-midnightBlue-950">
                Tour Ninh Bình Quảng Ninh
              </h5>
              <div className="flex items-center gap-2 text-xs text-doveGray-400">
                <CiTimer />
                <span>3 ngày 2 đêm</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <CiStar color="#f27052" />
                  <span className="text-xs text-doveGray-500 font-medium">
                    4.8
                  </span>
                </div>
                <h6 className="text-sm font-semibold text-midnightBlue-950">
                  2.945.000đ
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
