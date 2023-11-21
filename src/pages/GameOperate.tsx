import { useState } from "react";
import { GameOperateForm } from "../components/games/GameOperateForm";
import { MultistepGuide } from "../components/games/MultistepGuide";

export const GameOperate = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center  mt-[2rem]   max-w-[90rem] px-[13rem] mx-auto">
      <h1 className="font-bold text-3xl my-[3rem]">경기 만들기</h1>
      <MultistepGuide step={step} />
      <GameOperateForm step={step} setStep={setStep} />
    </div>
  );
};
