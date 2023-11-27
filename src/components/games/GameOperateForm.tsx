import { useForm } from "react-hook-form";
import { GameFormSteps, OperateGame } from "../../interface/games";
import { postOperateGame } from "../../api/games";
import { Button } from "../Button";

export const GameOperateForm = ({ step, setStep }: GameFormSteps) => {
  const { register, handleSubmit } = useForm<OperateGame>();

  const onSubmit = (data: OperateGame) => {
    try {
      postOperateGame(data);
      console.log(data);
    } catch (error) {
      console.error("Operate Failure");
    }
  };
  return (
    <form
      className="flex flex-col items-center  gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {step === 1 && (
        <>
          <div className="flex items-center  gap-4">
            <label htmlFor="game--date">경기 시작</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="text"
              id="game--date"
              {...register("startdate", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center  gap-4">
            <label htmlFor="start--time">시작 시간</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="text"
              id="start--time"
              {...register("starttime", {
                required: true,
              })}
            />
          </div>

          <div className="flex items-center  gap-4">
            <label>경기 종료</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="text"
              {...register("enddate", {
                required: true,
              })}
            />
          </div>

          <div className="flex items-center  gap-4">
            <label>종료 시간</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="text"
              {...register("endtime", {
                required: true,
              })}
            />
          </div>

          <Button size="small" onClick={() => setStep(2)}>
            다음
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex items-center  gap-4">
            <label>경기 주소</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="string"
              {...register("address", {
                required: true,
              })}
            />
          </div>

          <div className="flex items-center  gap-4">
            <label>상세 주소</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="string"
              {...register("address_detail", {
                required: true,
              })}
            />
          </div>

          <div className="flex items-center  gap-4">
            <label>경기 제목</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="string"
              {...register("title", {
                required: true,
              })}
            />
          </div>

          <div className="flex items-center  gap-4">
            <label>최소 인원</label>

            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="number"
              {...register("min_invitation", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center  gap-4">
            <label>최대 인원</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="number"
              {...register("max_invitation", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="mx-2"> 참여비</label>
            <input
              className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="number"
              {...register("fee", {
                required: true,
              })}
            />
          </div>

          <div className="flex items-center gap-10">
            <Button size="small" onClick={() => setStep(1)}>
              이전
            </Button>{" "}
            <Button size="small" onClick={() => setStep(3)}>
              다음
            </Button>{" "}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex flex-col text-center">
            <label className="mb-4">전달사항</label>
            <input
              className="w-[400px] h-[100px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
              type="textbox"
              {...register("info", {
                required: true,
              })}
            />
          </div>

          <div className="flex items-center gap-10">
            <Button size="small" onClick={() => setStep(2)}>
              이전
            </Button>
            <button>제출</button>
          </div>
        </>
      )}
    </form>
  );
};
