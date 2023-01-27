import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Login from '../pages/Login';

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
        <div className='items'>
          <NavLink to='/signup' className='item'>
            <div className='item'>회원가입</div>
          </NavLink>
          <NavLink to='/login' className='item'>
            <div className='item'>로그인</div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* <NavLink className='item item-1' to='home'>
        MITI
      </NavLink> */
}

// <div className='items'>
//   <NavLink className='item' to='home'>
//     홈
//   </NavLink>
//   <NavLink className='item' to='about'>
//     서비스 소개
//   </NavLink>
//   <NavLink className='item item-header' to='home'>
//     MITI
//   </NavLink>
//   <NavLink className='item' to=''>
//     경기 등록/참여
//   </NavLink>
//   {/* <NavLink className='item' to='/'>
//     회원가입
//   </NavLink> */}
//   <NavLink className='item' to='login'>
//     로그인
//   </NavLink>
