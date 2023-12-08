import { useForm } from "react-hook-form";
import { OperateGame } from "../../interface/games";
import { postOperateGame } from "../../api/games";
import { FindAddress } from "../address/FindAddress";
import { useNavigate } from "react-router-dom";

export const GameOperateForm = () => {
  const { register, handleSubmit } = useForm<OperateGame>();
  const navigate = useNavigate();
  const handleWindowConfirm = (data: OperateGame) => {
    if (window.confirm("경기를 생성하시겠습니까?")) {
      postOperateGame(data);
      console.log(data);
      alert("성공");
      navigate("/");
    } else {
      alert("취소");
      return;
    }
  };

  const onSubmit = (data: OperateGame) => {
    try {
      handleWindowConfirm(data);
    } catch (error) {
      console.error();
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

      <button className="mx-auto w-[20rem] my-4 p-[0.5rem] rounded-lg bg-[#4065F6] text-center text-white">
        제출
      </button>
    </form>
  );
};
