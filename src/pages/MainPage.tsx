import { MainBanner } from "../components/MainBanner";

export const MainPage = () => {
  return (
    <body className="w-screen max-w-[90] h-screen  px-[13rem]   ">
      <MainBanner />
      <p className="mb-[1.5rem] text-[20px] font-bold leading-6">
        ⚡ 빠른 매칭 예약
      </p>
      {/* container */}
      <div className="flex  w-screen">
        {/* left  */}
        <div className="">
          {/* left top */}
          <div className="flex items-center justify-between px-[1.1rem] py-[0.9rem] w-[307px] h-[48px] rounded-8 bg-[#FBFBFB]">
            {" "}
            <span className="text-[16px]">2023. 11.15 (목)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
            >
              <path
                d="M10.59 0.365357L6 6.54619L1.41 0.365358L-4.61523e-07 2.26819L6 10.3654L12 2.26819L10.59 0.365357Z"
                fill="#454545"
              />
            </svg>
          </div>
          {/* left bottom */}
          <div className="px-[1.1rem] py-[0.9rem] w-[307px] h-[409px] rounded-8 bg-[#FBFBFB]">
            <span className="py-1 px-2 text-xs font-semibold leading-4 bg-blue-200 text-blue-600">
              1명 모집
            </span>
            <p className="text-lg font-bold leading-7 text-[#333]">
              수원 매탄 공원 4 vs 4 (주차 12자리)
            </p>
            <p className="text-sm font-medium leading-5 text-gray-500">
              2023. 11. 15 15:30~ 18:00
            </p>
            <p className="text-[#4065F6] font-bold leading-7">₩23,000</p>
            <span className="block w-275 h-px bg-gray-300"></span>
          </div>
        </div>
        {/* right */}
        <div className="w-[42.25rem] h-[29.6rem]  rounded-8 bg-yellow-100">
          map
        </div>
      </div>
    </body>
  );
};
