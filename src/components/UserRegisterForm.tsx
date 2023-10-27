import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { userRegisterSchema } from "../modals/UsersZod";

interface RegisterField {
  email: string;
  password: string;
  password_check: string;
  nickname: string;
}

export const UserRegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterField>();

  const onSubmit = (data: RegisterField) => {
    try {
      const userData = userRegisterSchema.parse(data);
      console.log(userData);
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
