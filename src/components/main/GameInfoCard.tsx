import img from "../../assets/game_info.svg";
import { GameStatusTitle } from "./GameStatusTitle";

export const GameInfoCard = () => {
  return (
    <div className="w-[220px] h-[205px]">
      <img src={img} alt="game info pic" />
      <p className="text-lg font-bold leading-7 truncate">
        수원 매탄 공원 코트 (주차 12...)
      </p>
      <p className="text-base font-semibold leading-5">
        빠른 매칭 16:00 ~ 18:00
      </p>
      <GameStatusTitle>1명 남음</GameStatusTitle>
      <p className="text-base font-medium leading-5">
        남녀모두 · 5vs5 · 풀코트 · 뉴비
      </p>
    </div>
  );
};
