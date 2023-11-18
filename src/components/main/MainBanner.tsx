import bg from "../../assets/banner-2.svg";
export const MainBanner = () => {
  return (
    <aside className="my-[2.5rem]">
      <div className=" mx-auto relative">
        <img className="mx-auto" src={bg} alt="basketball shot" />
        <div className="absolute left-6 bottom-6 font-Pretendard">
          <p className="text-[#FFCF0A] text-[1rem] font-bold">
            MITI 서비스 런칭
          </p>
          <p className="text-white text-[2rem] font-extrabold	">
            MITI와 함께, 경기 모집부터
          </p>
          <p className="text-white text-[2rem] font-extrabold	">
            관리, 결제, 매칭까지 한번에.
          </p>
        </div>
      </div>
    </aside>
  );
};
