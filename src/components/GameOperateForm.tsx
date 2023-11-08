import { useForm } from "react-hook-form";
import { OperateGame } from "../interface/games";
import { postOperateGame } from "../api/games";

export const GameOperateForm = () => {
  const { register, handleSubmit } = useForm<OperateGame>();

  const onSubmit = (data: OperateGame) => {
    try {
      postOperateGame(data);
    } catch (error) {
      console.error("Operate Failure");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("startdate", {
          required: true,
        })}
      />
      <input
        type="text"
        {...register("starttime", {
          required: true,
        })}
      />
      <input
        type="text"
        {...register("enddate", {
          required: true,
        })}
      />
      <input
        type="text"
        {...register("endtime", {
          required: true,
        })}
      />
      <input
        type="number"
        {...register("min_invitation", {
          required: true,
        })}
      />
      <input
        type="number"
        {...register("max_invitation", {
          required: true,
        })}
      />
      <input
        type="number"
        {...register("fee", {
          required: true,
        })}
      />
      <input
        type="string"
        {...register("title", {
          required: true,
        })}
      />
      <input
        type="string"
        {...register("address", {
          required: true,
        })}
      />
      <input
        type="string"
        {...register("address_detail", {
          required: true,
        })}
      />
      <input
        type="string"
        {...register("info", {
          required: true,
        })}
      />
      <button>제출</button>
    </form>
  );
};
