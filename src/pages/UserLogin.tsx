import { UserLoginForm } from "../components/UserLoginForm";
import kakaoLogin from "../assets/kakao_login_medium_wide.png";

export const UserLogin = () => {
  return (
    <div className="flex flex-col items-center mt-[6rem] h-screen max-w-[90rem] px-[13rem] mx-auto">
      <h1 className="font-bold text-3xl my-[3rem]">로그인</h1>
      <UserLoginForm />
      <hr className="block w-[275px] h-px bg-black my-[3rem]" />
      <button>
        <img className="w-[300px]" src={kakaoLogin} alt="kakao login" />
      </button>
    </div>
  );
};
