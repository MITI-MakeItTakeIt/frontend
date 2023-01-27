import React from 'react';
import img from '../images/5.jpg';
import './Login.css';
import kakaologin from '../images/kakao_login_medium_wide.png';
const Login = () => {
  return (
    <div className='login'>
      <div className='login-layout'>
        <div className='form-image'>
          <img src={img} alt='basetballs' />
        </div>
        <div className='login-form'>
          <h1>로그인</h1>
          <form action='' className='form'>
            {/* email login */}
            <div className='login-item'>
              <label htmlFor='id'>이메일</label>
              <div className='login-confirm'>
                <input type='email' id='id ' className='inputBox' />
              </div>
            </div>

            {/* password */}
            <div className='login-item'>
              <label htmlFor='pw'>비밀번호</label>
              <input type='password' id='pw ' className='inputBox' />
            </div>

            {/* 제출 및 취소 버튼 */}
            <div className='login-item'>
              <div className='final-buttons'>
                <button type='submit' id='submit'>
                  로그인
                </button>
                <button type='reset' id='reset'>
                  회원가입
                </button>
              </div>
            </div>
            {/* 소셜 로그인 */}
            <div className='social-login'>
              <div className='social-icons'>
                <img src={kakaologin} alt='kakao login' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
