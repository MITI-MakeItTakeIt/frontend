import { UserRegisterForm } from "../components/UserRegisterForm";

export const UserRegister = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] h-screen max-w-[90rem] px-[13rem] mx-auto">
      <h1 className="font-bold text-3xl my-[3rem]">회원가입</h1>
      <UserRegisterForm />
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          계정이 있으신가요?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            로그인
          </span>
        </p>
      </div>
      {/* <hr className="block w-[275px] h-px bg-black my-[2rem]" /> */}
    </div>
  );
};
