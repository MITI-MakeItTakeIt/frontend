import { useState } from "react";
import { GameOperateForm } from "../components/games/GameOperateForm";
import { MultistepGuide } from "../components/games/MultistepGuide";

export const GameOperate = () => {
  const [step, setStep] = useState(1);

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
