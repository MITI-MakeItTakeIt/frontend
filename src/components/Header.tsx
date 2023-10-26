import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <NavigationBar>
      <NavItems>
        <NavLink to="/">MITI</NavLink>
        <NavLink to="/operate-game">경기 운영</NavLink>
        <NavLink to="/find-games">경기 조회</NavLink>
        <NavLink to="/login">로그인</NavLink>
        <NavLink to="/signup">회원가입</NavLink>
      </NavItems>
    </NavigationBar>
  );
};

const NavigationBar = styled.header`
  width: 100vw;
  height: 4rem;

  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
`;
const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  /* height: 100%; */
`;
