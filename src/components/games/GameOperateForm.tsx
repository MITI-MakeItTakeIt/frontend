import { useForm } from "react-hook-form";
import { OperateGame } from "../../interface/games";
import { postOperateGame } from "../../api/games";
import { useState } from "react";

export const GameOperateForm = () => {
  const { register, handleSubmit } = useForm<OperateGame>();
  const [step, setStep] = useState(1);

  const onSubmit = (data: OperateGame) => {
    try {
      postOperateGame(data);
    } catch (error) {
      console.error("Operate Failure");
    }
  };
  return (
    <form
      className="flex flex-col items-center  gap-4"
      style={{ display: "flex", flexDirection: "column", width: "80vw" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {step === 1 && (
        <>
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="text"
            placeholder="경기 날짜"
            {...register("startdate", {
              required: true,
            })}
          />
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="text"
            placeholder="시작 시간"
            {...register("starttime", {
              required: true,
            })}
          />
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="text"
            placeholder="종료 날짜"
            {...register("enddate", {
              required: true,
            })}
          />

          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="text"
            placeholder="종료 시간"
            {...register("endtime", {
              required: true,
            })}
          />
          <button onClick={() => setStep(2)}>다음</button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="string"
            placeholder="코트 주소"
            {...register("address", {
              required: true,
            })}
          />
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="string"
            placeholder="상세 주소"
            {...register("address_detail", {
              required: true,
            })}
          />
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="string"
            placeholder="경기 제목"
            {...register("title", {
              required: true,
            })}
          />
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="number"
            placeholder="최소 인원"
            {...register("min_invitation", {
              required: true,
            })}
          />
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="number"
            placeholder="최대 인원"
            {...register("max_invitation", {
              required: true,
            })}
          />
          <input
            className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="number"
            placeholder="참여비"
            {...register("fee", {
              required: true,
            })}
          />

          <button onClick={() => setStep(1)}>이전</button>
          <button onClick={() => setStep(3)}>다음</button>
        </>
      )}

      {step === 3 && (
        <>
          <input
            className="w-[450px] h-[100px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="textbox"
            placeholder="공지사항"
            {...register("info", {
              required: true,
            })}
          />
          <button className="bg-[#4065F6]  text-white p-[0.5rem] rounded-lg	">
            경기 만들기
          </button>
          <button onClick={() => setStep(2)}>이전</button>
        </>
      )}
    </form>
  );
};
