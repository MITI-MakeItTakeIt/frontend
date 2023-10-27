import { LoginField } from "../interface/auth";
import { useForm } from "react-hook-form";
import { userLoginPost } from "../api/users";

export const UserLoginForm = () => {
  const { register, handleSubmit } = useForm<LoginField>();

  const onSubmit = (data: LoginField) => {
    try {
      userLoginPost(data);
    } catch (error) {
      console.error("Login Failure");
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
      <button>제출</button>
    </form>
  );
};
