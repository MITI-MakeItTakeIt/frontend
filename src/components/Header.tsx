import styled from "styled-components";

export const Header = () => {
  return (
    <NavigationBar>
      <NavItems>
        <li>MITI</li>
        <li>경기 운영</li>
        <li>경기 조회</li>
        <li>로그인</li>
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
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  /* height: 100%; */

  li {
    list-style: none;
  }
`;
