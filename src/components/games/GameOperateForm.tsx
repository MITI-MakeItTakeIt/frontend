import { useForm } from "react-hook-form";
import { GameFormSteps, OperateGame } from "../../interface/games";
import { postOperateGame } from "../../api/games";
import { Button } from "../Button";
import { FindAddress } from "../address/FindAddress";

export const GameOperateForm = () => {
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
      className="flex flex-col  px-4  gap-5 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FindAddress register={register} />

      <div className="flex items-center   gap-4">
        <label htmlFor="">상세주소</label>
        <input
          className="w-[450px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
          type="string"
          {...register("address_detail", {
            required: true,
          })}
        />
      </div>

      <div className=" flex items-center   gap-4">
        <label>경기 제목</label>
        <input
          className="w-[450px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
          type="string"
          {...register("title", {
            required: true,
          })}
        />
      </div>
      {/* <hr className="w-[25rem] border border-grey-100 my-6" /> */}

      <div className="flex  gap-4">
        <div className="flex items-center   gap-4">
          <label htmlFor="game--date">경기 시작</label>
          <input
            className=" h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="date"
            id="game--date"
            {...register("startdate", {
              required: true,
            })}
          />
        </div>
        <div className="flex items-center   gap-4">
          {/* <label htmlFor="start--time">시작 시간</label> */}
          <input
            className=" h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="time"
            id="start--time"
            {...register("starttime", {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="flex items-center  gap-4">
        <div className="flex items-center   gap-4">
          <label>경기 종료</label>
          <input
            className=" h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="date"
            {...register("enddate", {
              required: true,
            })}
          />
        </div>

        <div className="flex items-center   gap-4">
          <input
            className=" h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="time"
            {...register("endtime", {
              required: true,
            })}
          />
        </div>
      </div>
      {/* <hr className="w-[25rem] border border-grey-100 my-6" /> */}

      <div className="flex  gap-4">
        <div className="flex items-center   gap-4">
          <label>최소 인원</label>

          <input
            className="w-[150px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="number"
            {...register("min_invitation", {
              required: true,
            })}
          />
        </div>
        <div className="flex items-center   gap-4">
          <label>최대 인원</label>
          <input
            className="w-[150px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
            type="number"
            {...register("max_invitation", {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="flex items-center  gap-4">
        <label className="mx-2"> 참여비</label>
        <input
          className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
          type="number"
          {...register("fee", {
            required: true,
          })}
        />
      </div>

      <div className="flex text-center  gap-4">
        <label className="mb-4">전달사항</label>
        <input
          className="w-[350px] h-[100px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
          type="textbox"
          {...register("info", {
            required: true,
          })}
        />
      </div>
      {/* <div className="mx-auto my-4"> */}
      {/* <Button size="medium">제출</Button> */}
      <button className=" p-[0.5rem] rounded-lg bg-[#4065F6] text-center text-white">
        제출
      </button>
      {/* </div> */}
    </form>
  );
};
