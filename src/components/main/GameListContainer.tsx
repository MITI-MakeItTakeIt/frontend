import { KakaoMap } from "../games/KakaoMap";
import { GameListInfo } from "./GameListInfo";

export const GameListContainer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][today.getDay()];

  const formattedDate = `${year}. ${month}. ${day}. (${dayOfWeek})`;

  return (
    <div className="flex justify-between ">
      {/* left  */}
      <div className="mr-[41px]">
        {/* left top */}
        <div className="flex items-center justify-between px-[1.1rem] py-[0.9rem] w-[307px] h-[48px] rounded-8 bg-[#FBFBFB]">
          <span className="font-bold leading-[20.8px]">{formattedDate}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
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
        <div className="px-[1.1rem] py-[0.9rem] w-[307px] h-[409px] rounded-8 bg-[#FBFBFB] overflow-scroll ">
          <GameListInfo />
          <GameListInfo />
          <GameListInfo />
        </div>
      </div>
      {/* right */}
      <div className="w-[676px] h-[473px]  rounded-[8px] ">
        <KakaoMap />
      </div>
    </div>
  );
};
