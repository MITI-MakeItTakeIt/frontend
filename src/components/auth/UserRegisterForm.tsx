import { useForm } from "react-hook-form";
import { RegisterField } from "../../interface/auth";
import { userRegisterSchema } from "../../modals/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignupPost } from "../../api/users";

// const { errors } = useFormState(); /
export const UserRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterField>({ resolver: zodResolver(userRegisterSchema) });

  const onSubmit = (data: RegisterField) => {
    try {
      const userData = userRegisterSchema.parse(data);
      userSignupPost(userData);
    } catch (error) {
      console.error("Validation error");
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="email"
        placeholder="이메일"
        {...register("email", {
          required: true,
        })}
      />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <input
        className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="password"
        placeholder="비밀번호"
        {...register("password", {
          required: true,
        })}
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}

      <input
        className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="password"
        placeholder="비빈번호 확인"
        {...register("password_check", {
          required: true,
        })}
      />
      {errors.password_check?.message && (
        <p>{errors.password_check?.message}</p>
      )}

      <input
        className="w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="text"
        placeholder="닉네임"
        {...register("nickname", {
          required: true,
        })}
      />
      {errors.nickname?.message && <p>{errors.nickname?.message}</p>}

      <button className="bg-[#4065F6]  text-white p-[0.5rem] rounded-lg	">
        회원가입
      </button>
    </form>
  );
};
