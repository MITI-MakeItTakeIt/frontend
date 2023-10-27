import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

interface RegisterField {
  email: string;
  password: string;
  password_check: string;
  nickname: string;
}

const userSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  password_check: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),

  nickname: z.string().min(5, { message: "Minimum of 5 or more characters" }),
});

export const UserRegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterField>();
  const onSubmit: SubmitHandler<RegisterField> = (data) => {
    try {
      userSchema.parse(data);
      console.log(data);
    } catch (err) {
      console.error("Validation error");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />
      <input type="password" {...register("password_check")} />
      <input type="text" {...register("nickname")} />

      <FormSubmitBtn>제출</FormSubmitBtn>
    </form>
  );
};

const FormSubmitBtn = styled.button`
  width: 200px;
  height: 20px;
  background-color: blue;
  color: #fff;
`;
