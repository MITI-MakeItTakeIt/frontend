import { HalfDayFinalGames } from "../components/games/HalfDayFinalGames";
import { TodaysFinalGames } from "../components/games/TodaysFinalGames";
import { GameListContainer } from "../components/main/GameListContainer";
import { MainBanner } from "../components/main/MainBanner";
import { Title } from "../components/main/Title";
import { useGamesAllQuery } from "../hooks/useGamesAllQuery";

export const MainPage = () => {
  const { data } = useGamesAllQuery();
  console.log(data);

  return (
    <div className="w-full max-w-[90rem] px-[13rem]  mx-auto ">
      <MainBanner />
      <Title>⚡ 빠른 매칭 예약</Title>

      <GameListContainer />
      <Title> ⚡ 마감 ️12시간 전 매칭</Title>
      <div className=" flex items-center gap-[47px] overflow-x-scroll">
        <HalfDayFinalGames />
      </div>
      <Title> 🗓️ 마감 하루 전 매칭</Title>
      <div className="flex items-center gap-[47px] overflow-x-scroll">
        <TodaysFinalGames />
      </div>
    </div>
  );
};
