import { UserLoginForm } from "../components/UserLoginForm";

export const UserLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[90rem] px-[13rem] mx-auto">
      <UserLoginForm />
      <hr className="block w-[275px] h-px bg-black my-[3rem]" />
      <h1>카카오 로그인</h1>
    </div>
  );
};
