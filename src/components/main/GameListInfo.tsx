import { GameStatus } from "./GameStatus";

export const GameListInfo = () => {
  return (
    <div className="flex flex-col gap-[4px]">
      <GameStatus>1명 모집</GameStatus>
      <p className="text-lg font-bold leading-7 text-[#333]">
        수원 매탄 공원 4 vs 4 (주차 12자리)
      </p>
      <p className="text-sm font-medium leading-5 text-gray-500">
        2023. 11. 15 15:30~ 18:00
      </p>
      <p className="text-[#4065F6] font-bold leading-7">₩23,000</p>
      <span className="block w-275 h-px bg-gray-300 my-[1rem]"></span>
    </div>
  );
};
