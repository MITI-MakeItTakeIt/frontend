import { NavLink } from "react-router-dom";
import { UserRegisterForm } from "../components/auth/UserRegisterForm";

export const UserRegister = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] h-screen max-w-[90rem] px-[13rem] mx-auto">
      <h1 className="font-bold text-3xl my-[3rem]">회원가입</h1>
      <UserRegisterForm />
      <hr className="block w-[275px] h-px bg-black my-[2rem]" />
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          계정이 있으신가요?{" "}
          <NavLink
            to="/login"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            로그인
          </NavLink>
        </p>
      </div>
    </div>
  );
};
