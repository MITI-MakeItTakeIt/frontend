import { GameOperateForm } from "../components/games/GameOperateForm";
import useGameStore from "../store/useGameStore";

export const GameOperate = () => {
  const { gamesByDateData } = useGameStore();
  console.log("from run games", gamesByDateData);

  return (
    <div className=" flex flex-col items-center   my-[2rem]   max-w-[90rem] px-[13rem] mx-auto">
      <div className="h-full border border-gray-200 w-[42rem] p-10 rounded-xl">
        <h1 className="font-bold text-3xl my-[3rem] text-center">
          경기 만들기
        </h1>
        {/* <MultistepGuide step={step} /> */}
        <GameOperateForm />
        {/* <GameOperateForm step={step} setStep={setStep} /> */}
      </div>
    </div>
  );
};
