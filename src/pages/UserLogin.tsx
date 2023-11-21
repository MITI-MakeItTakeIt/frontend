import { UserLoginForm } from "../components/auth/UserLoginForm";
import kakaoLogin from "../assets/kakao_login_medium_wide.png";
import { NavLink } from "react-router-dom";

export const UserLogin = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] h-screen max-w-[90rem] px-[13rem] mx-auto">
      <h1 className="font-bold text-3xl my-[3rem]">로그인</h1>
      <UserLoginForm />
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 mb-2  hover:underline cursor-pointer">
          아이디/비밀번호를 잊으셨나요?
        </p>
        <p className="text-sm text-gray-600">
          계정이 없으신가요?{" "}
          <NavLink
            to="/signup"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            회원가입
          </NavLink>
        </p>
      </div>
      <hr className="block w-[275px] h-px bg-black my-[2rem]" />
      <button>
        <img className="w-[300px]" src={kakaoLogin} alt="kakao login" />
      </button>
    </div>
  );
};
