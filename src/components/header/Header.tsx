import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/MITI_logo.svg";
import { Button } from "../Button";

export const Header = () => {
  const navigate = useNavigate();
  const getToken = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.clear();
    alert("로그아웃");
    navigate("/login");
  };
  return (
    <header className="flex items-center w-full  max-w-[90] h-[3.75rem] px-[13rem] ">
      <nav className="flex  items-center justify-between w-full text-[1.25rem] ">
        <div className="flex items-center jusitfy-evenly gap-[1.5rem]">
          <NavLink className="" to="/">
            <img
              className="w-[5.5rem] h-[1.75rem]"
              src={logo}
              alt="miti logo"
            />
          </NavLink>
          <NavLink className="" to="/">
            <span className="font-bold">빠른 매칭</span>
          </NavLink>
          <div
            className="flex items-center"
            onClick={() => alert("in progress")}
          >
            <span className=" font-bold text-[#707070]">팀</span>
            <span className="text-[0.8125rem] text-[#9B8EFD]">NEW</span>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-[1.5rem] text-[1rem]">
          {getToken ? (
            <button onClick={handleLogout}>로그아웃</button>
          ) : (
            <>
              <NavLink to="/login" className="text-[#707070]">
                로그인
              </NavLink>
              <NavLink to="/signup" className="text-[#707070]">
                회원가입
              </NavLink>
            </>
          )}

          <NavLink
            // className="bg-[#4065F6] text-white p-[0.5rem] rounded-lg 	"
            to="/operate-game"
          >
            <Button size="small">경기 만들기</Button>

            {/* 경기 만들기 */}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
