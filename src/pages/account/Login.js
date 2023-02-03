import React from 'react';
import './Login.css';
import kakaoLoginBox from '../../images/kakao_login_medium_wide.png';
const Login = () => {
  return (
    <div className='login-layout'>
      <div className='login-wrap'>
        {/* <div className='login-img'></div> */}
        <div className='login-info'>
          <h1>로그인</h1>
          <form action=''>
            <div className='input-wrapper'>
              <input type='text' id='email' placeholder='이메일' />
            </div>
            <div className='input-wrapper'>
              <input type='password' id='pass' placeholder='비빔번호' />
            </div>
            <div className='input-wrapper find-info'>
              <p id='find-id-pass'>아이디/비밀번호 찾기</p>
              <p id='to-signup'>회원가입 </p>
            </div>
            <div className='input-wrapper'>
              <input type='button' value='로그인' id='login--btn' />
            </div>
            <div className='input-wrapper'>
              <img
                src={kakaoLoginBox}
                alt='kakao login box'
                id='kakao-login-btn'
              />
            </div>
            <div className='input-wrapper'></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*

   <div className='login'>
      <div className='login-layout'>
        <div className='form-image'>
          <img src={img} alt='basetballs' />
        </div>
        <div className='login-form'>
          <h1>로그인</h1>
          <form action='' className='form'>

            <div className='login-item'>
              <label htmlFor='id'>이메일</label>
              <div className='login-confirm'>
                <input type='email' id='id ' className='inputBox' />
              </div>
            </div>

   
            <div className='login-item'>
              <label htmlFor='pw'>비밀번호</label>
              <input type='password' id='pw ' className='inputBox' />
            </div>


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
            <div className='social-login'>
              <div className='social-icons'>
                <img src={kakaologin} alt='kakao login' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> 
*/
