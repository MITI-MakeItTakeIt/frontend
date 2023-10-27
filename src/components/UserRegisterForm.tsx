import { useForm } from "react-hook-form";
import { RegisterField } from "../interface/auth";
import { userRegisterSchema } from "../modals/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignupPost } from "../api/users";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email", {
          required: true,
        })}
      />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <input
        type="password"
        {...register("password", {
          required: true,
        })}
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}

      <input
        type="password"
        {...register("password_check", {
          required: true,
        })}
      />
      {errors.password_check?.message && (
        <p>{errors.password_check?.message}</p>
      )}

      <input
        type="text"
        {...register("nickname", {
          required: true,
        })}
      />
      {errors.nickname?.message && <p>{errors.nickname?.message}</p>}

      <button>제출</button>
    </form>
  );
};
