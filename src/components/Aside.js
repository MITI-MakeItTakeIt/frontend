import React from 'react';
import './Aside.css';
import logo from '../images/MITI logo.png';
import {
  FaHome,
  FaQuestionCircle,
  FaClone,
  FaHandshake,
  FaBasketballBall,
  FaSearchLocation,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <div className='aside'>
      <div className='aside-logo'>
        <img src={logo} alt='main-logo' />
      </div>
      {/* ------ 홈 영역  ------ */}
      <div className='aside-items'>
        <NavLink to='/'>
          <div className='aside-item home'>
            <div className='item'>
              <FaHome />
              <span>홈</span>
            </div>
          </div>
        </NavLink>
        {/* ------ 서비스 소개 영역  ------ */}
        <NavLink to='about'>
          <div className='aside-item home'>
            <div className='item'>
              <FaClone />
              <span>서비스 소개</span>
            </div>
          </div>
        </NavLink>
        {/* ------ 솔루션 영역  ------ */}
        <NavLink to='about'>
          <div className='aside-item home'>
            <div className='item'>
              <FaQuestionCircle />
              <span>솔루션</span>
            </div>
          </div>
        </NavLink>
        {/* ------ 경기 등록 영역  ------ */}
        <NavLink to='register'>
          <div className='aside-item home'>
            <div className='item'>
              <FaBasketballBall />
              <span>경기 등록</span>
            </div>
          </div>
        </NavLink>
        {/* ------ 경기 조회 영역  ------ */}
        <NavLink to='participate'>
          <div className='aside-item home'>
            <div className='item'>
              <FaSearchLocation />
              <span>경기 조회</span>
            </div>
          </div>
        </NavLink>
        {/* ------ 경기 침여 영역  ------ */}
        <NavLink to='searchGame'>
          <div className='aside-item home'>
            <div className='item'>
              <FaHandshake />
              <span>경기 참여</span>
            </div>
          </div>
        </NavLink>
        <div className='account'>
          {/* 로그인 버튼 */}
          <NavLink to='login'>
            <div className='login-box'>
              <button id='login-btn'>로그인</button>
            </div>
          </NavLink>
          {/* 회원가입 버튼 */}
          <NavLink to='signup'>
            <div className='signup-box'>
              <button id='signup-btn'>회원가입</button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Aside;
