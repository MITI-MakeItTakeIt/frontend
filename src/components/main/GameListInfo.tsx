import { AllGamesData } from "../../interface/games";
import useAuthStore from "../../store/useAuthStore";
import { GameStatusTitle } from "./GameStatusTitle";

interface GameDateProp {
  gamesByDateData: string;
}

export const GameListInfo = ({ gamesByDateData }: GameDateProp) => {
  // console.log(gamesByDateData);
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="overflow-auto w-full h-full">
      {isLoggedIn ? (
        gamesByDateData?.data?.data.map((game: AllGamesData) => {
          return (
            <div key={game.id} className="flex flex-col gap-[4px] ">
              <GameStatusTitle>
                {`${game.max_invitation - game.participations.length}명 모집`}
              </GameStatusTitle>
              <p className="text-lg font-bold leading-7 text-[#333]">
                {game.title}
              </p>
              <p className="text-sm font-medium leading-5 text-gray-500">
                {game.startdate} {game.starttime.slice(0, -3)} ~ {/**/}
                {game.endtime.slice(0, -3)}
              </p>
              <p className="text-[#4065F6] font-bold leading-7">
                {game.fee.toLocaleString("ko-KR")}원
              </p>
              <hr className="block w-275 h-px bg-gray-300 my-[1rem]" />
            </div>
          );
        })
      ) : (
        <div className=" w-full h-full flex flex-col gap-4 font-bold items-center justify-center">
          <p>모집중인 경기 구경하기</p>
          <button className="bg-[#4065F6] text-white w-[200px] h-[40px] rounded-xl ">
            로그인
          </button>
        </div>
      )}
    </div>
  );
};
