import { LoginField } from "../../interface/auth";
import { useForm } from "react-hook-form";
import { userLoginPost } from "../../api/users";

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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="email"
        {...register("email", {
          required: true,
        })}
      />
      <input
        className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="password"
        {...register("password", {
          required: true,
        })}
      />
      <button className="bg-[#4065F6]  text-white p-[0.5rem] rounded-lg	">
        로그이
      </button>
    </form>
  );
};
