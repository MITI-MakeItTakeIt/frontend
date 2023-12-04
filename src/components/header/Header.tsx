import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/MITI_logo.svg";
import { Button } from "../Button";
import useAuthStore from "../../store/useAuthStore";

export const Header = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      logout();
      navigate("/login");
      window.location.reload();
    } else {
      alert("취소합니다.");
      return;
    }
  };
  // // const getToken = localStorage.getItem("access_token");

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
          {isLoggedIn ? (
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

          <NavLink to="/operate-game">
            <Button size="small">경기 만들기</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
