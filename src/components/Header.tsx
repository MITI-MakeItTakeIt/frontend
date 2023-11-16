import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-black w-full">
      <ul className="bg-black ">
        <NavLink to="/">MITI</NavLink>
        <NavLink to="/operate-game">경기 운영</NavLink>
        <NavLink to="/find-games">경기 조회</NavLink>
        <NavLink to="/login">로그인</NavLink>
        <NavLink to="/signup">회원가입</NavLink>
      </ul>
      <h2 className="bg-black w-full">hello</h2>
    </header>
  );
};
