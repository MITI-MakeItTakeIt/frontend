import { getFindAllGames, getFindGameByDate } from "../api/games";
import { GameInfoCard } from "../components/main/GameInfoCard";
import { GameListContainer } from "../components/main/GameListContainer";
import { MainBanner } from "../components/main/MainBanner";
import { Title } from "../components/main/Title";

export const MainPage = () => {
  return (
    <div className="w-full max-w-[90rem] px-[13rem]  mx-auto ">
      <MainBanner />
      <Title>⚡ 빠른 매칭 예약</Title>

      <GameListContainer />
      <Title> ⚡ 마감 ️12시간 전 매칭</Title>
      <div className=" flex items-center gap-[47px] overflow-x-scroll">
        <GameInfoCard />
      </div>
      <Title> 🗓️ 마감 하루 전 매칭</Title>
      <div className="flex items-center gap-[47px] overflow-x-scroll">
        <GameInfoCard />
      </div>
    </div>
  );
};
