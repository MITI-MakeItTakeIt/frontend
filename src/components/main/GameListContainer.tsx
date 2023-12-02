import { KakaoMap } from "../games/KakaoMap";
import { GameListInfo } from "./GameListInfo";
import "react-datepicker/dist/react-datepicker.css";
import { useGamesDateQuery } from "../../hooks/useGamesDateQuery";
import { useState } from "react";

export const GameListContainer = () => {
  const [selectingDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "long",
    })
  );
  const [displayDates, setDisplayDates] = useState(false);

  const handleDisplayDates = () => {
    setDisplayDates(!displayDates);
  };

  const handleSelectDate = (input) => {
    setSelectedDate(input);
  };

  // console.log(date.toLocaleDateString("kr-KO"));

  // alert(date.getFullYear());
  const changeDateFormat = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  console.log("----");

  console.log(changeDateFormat(selectingDate));

  // alert(changeDateFormat(date));
  const next13Days = [];

  for (let i = 0; i < 14; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    const formattedDate = newDate.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "long",
    });
    next13Days.push(formattedDate);
  }

  // console.log(next13Days);

  // query
  const {
    data: gamesByDateData,

    // } = useGamesDateQuery(dateFormat);
  } = useGamesDateQuery("2023-12-10");

  return (
    <div className="flex justify-between ">
      {/* left  */}
      <div className="mr-[41px]">
        {/* left top */}
        <div
          onClick={handleDisplayDates}
          className=" hover:cursor-pointer relative flex items-center justify-between px-[1.1rem] py-[0.9rem] w-[307px] mb-[16px] h-[48px] rounded-8 bg-[#FBFBFB]"
        >
          <span className="font-bold leading-[20.8px]">
            {/* {date.toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              weekday: "long",
            })} */}
            {/* {date} */}
            {/* {selectingDate instanceof Date
              ? selectingDate.toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  weekday: "long",
                })
              : "Invalid Date"} */}
            {selectingDate}
          </span>

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
          {displayDates && (
            <div className="   border absolute flex flex-col gap-3 py-[0.9rem] top-[48px] left-0 px-[1.1rem] rounded-8 text-gray-400  bg-[#FBFBFB] w-full">
              {next13Days.map((dateList, index) => (
                <span
                  key={index}
                  className="hover:cursor-pointer hover:text-black hover:font-bold "
                  onClick={() => handleSelectDate(dateList)}
                >
                  {dateList}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* left bottom */}
        <div className="px-[1.1rem] py-[0.9rem] w-[307px] h-[409px] rounded-8 bg-[#FBFBFB] overflow-scroll ">
          <GameListInfo gamesByDateData={gamesByDateData} />
        </div>
      </div>
      {/* right */}
      <div className="w-[676px] h-[473px]  rounded-[8px] ">
        <KakaoMap />
      </div>
    </div>
  );
};
