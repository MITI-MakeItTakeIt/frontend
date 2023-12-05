import { GameStatusTitle } from "../main/GameStatusTitle";
import img from "../../assets/game_info.svg";
import { useGamesDateQuery } from "../../hooks/useGamesDateQuery";
import { useState } from "react";

export const HalfDayFinalGames = () => {
  const [today, setToday] = useState(new Date());

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

  const formattedDate = changeDateFormatForAPI(today);
  const { data: todaysMatch } = useGamesDateQuery(formattedDate);

  const filteredGames = todaysMatch?.data.data.filter((game) => {
    const startTime = new Date(`${formattedDate} ${game.starttime}`);
    const noonTime = new Date(`${formattedDate} 12:00:00`);
    return startTime > noonTime;
  });

  //   console.log(todaysMatch.data.data);

  return (
    <>
      {filteredGames?.map((game) => {
        return (
          <div key={game.id} className="w-[220px] h-[205px]">
            <img src={img} alt="game info pic" />
            <p className="text-lg font-bold leading-7 truncate">{game.title}</p>
            <p className="text-base font-semibold leading-5">
              빠른 매칭 {game.startdate} {game.starttime.slice(0, -3)} ~
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
