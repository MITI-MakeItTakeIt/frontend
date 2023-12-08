// import { useState } from "react";
import img from "../../assets/game_info.svg";
import { useGamesDateQuery } from "../../hooks/useGamesDateQuery";
import { AllGamesData } from "../../interface/games";
import { GameStatusTitle } from "../main/GameStatusTitle";

export const TodaysFinalGames = () => {
  // const [today, setToday] = useState(new Date());

  const changeDateFormatForAPI = (value: Date) => {
    const formattedDate = new Date(value);
    const year = formattedDate.getFullYear();
    const month = formattedDate.getMonth() + 1;
    const day =
      formattedDate.getDate() < 10
        ? "0" + formattedDate.getDate()
        : formattedDate.getDate();

    return `${year}-${month}-${day}`;
  };

  const formattedDate = changeDateFormatForAPI(new Date());
  const { data: todaysMatch } = useGamesDateQuery(formattedDate);

  console.log(todaysMatch);

  return (
    <>
      {todaysMatch?.data.data.map((game: AllGamesData) => {
        return (
          <div key={game.id} className="w-[220px] h-[205px]">
            <img src={img} alt="game info pic" />
            <p className="text-lg font-bold leading-7 truncate">
              {/* 수원 매탄 공원 코트 (주차 12...) */}
              {game.title}
            </p>
            <p className="text-base font-semibold leading-5">
              빠른 매칭 {game.startdate} {game.starttime.slice(0, -3)} ~ {/**/}
              {game.endtime.slice(0, -3)}
            </p>
            <GameStatusTitle>
              {`${game.max_invitation - game.participations.length}명 남음`}
            </GameStatusTitle>
            <p className="text-base font-medium leading-5">남녀모두 · 5vs5</p>
          </div>
        );
      })}
    </>
  );
};
