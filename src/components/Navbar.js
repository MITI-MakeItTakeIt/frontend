import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/MITI logo.png';

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
        <div className='items-left'>
          <NavLink to='/' className='item'>
            <img src={logo} alt='logo' className='logo' />
          </NavLink>
          <NavLink to='/' className='item'>
            홈
          </NavLink>
          <NavLink to='/about' className='item'>
            서비스 소개
          </NavLink>
          <NavLink to='/importGame' className='item'>
            경기 등록
          </NavLink>
        </div>
        <div className='items-right'>
          <NavLink to='/signup' className='item'>
            회원가입
          </NavLink>
          <NavLink to='/login' className='item'>
            로그인
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
