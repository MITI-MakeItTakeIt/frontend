import { useForm } from "react-hook-form";
import axiosUrl from "../utils/axios";
import { RegisterField } from "../interface/auth";
import { userRegisterSchema } from "../modals/userSchema";

// const { errors } = useFormState(); /
export const UserRegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterField>();

  const onSubmit = async (data: RegisterField) => {
    try {
      const userData = userRegisterSchema.parse(data);
      const response = await axiosUrl.post("/users/", userData);

      console.log(response.data);
    } catch (err) {
      console.error("Validation error", userRegisterSchema);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email", {
          required: true,
        })}
      />
      <input
        type="password"
        {...register("password", {
          required: true,
        })}
      />
      <input
        type="password"
        {...register("password_check", {
          required: true,
        })}
      />
      <input
        type="text"
        {...register("nickname", {
          required: true,
        })}
      />

      <button>제출</button>
    </form>
  );
};
