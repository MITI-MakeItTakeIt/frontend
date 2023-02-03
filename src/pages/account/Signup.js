import React from 'react';
import './Signup.css';
import { FaCheckCircle } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className='signup-layout'>
      <div className='signup-wrap'>
        {/* <div className='signup-img'></div> */}
        <div className='signup-info'>
          <h1>회원가입</h1>
          <form action=''>
            <div className='input-wrapper'>
              <input type='text' id='email' placeholder='이메일' />
              <button className='confirm'>중복확인</button>
            </div>

            <div className='input-wrapper'>
              <input type='password' id='pass' placeholder='비빔번호' />
            </div>
            <div className='input-wrapper'>
              <input type='password' id='pass' placeholder='비빔번호 확인' />
            </div>
            <div className='input-wrapper'>
              <input type='text' id='nickname' placeholder='닉네임' />
              <button className='confirm'>중복확인</button>
            </div>
            <div className='input-wrapper'>
              <input type='date' id='date' />
            </div>
            <div className='input-wrapper'>
              <button type='submit' id='signup--btn'>
                회원가입
              </button>
            </div>
            <div className='input-wrapper'>
              <button type='reset' id='signup--btn'>
                초기화
              </button>
            </div>
            <div className='input-wrapper'>
              <span id='signup-cancel'>이미 회원이신가요? 로그인</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
