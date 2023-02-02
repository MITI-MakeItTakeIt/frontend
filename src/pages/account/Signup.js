import React from 'react';
import './Signup.css';
import img from '../../images/7.jpg';

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-layout'>
        <div className='form-image'>
          <img src={img} alt='basetballs' />
        </div>
        <div className='signup-form'>
          <h1>회원가입</h1>
          <form action='' className='form'>
            {/* email login */}
            <div className='signup-item'>
              <label htmlFor='id'>이메일</label>
              <div className='signup-confirm'>
                <input
                  type='email'
                  id='id '
                  className='inputBox'
                  placeholder='이메일 주소'
                />
                <input
                  type='button'
                  value='이메일 확인'
                  id='id'
                  className='confirm'
                />
              </div>
            </div>

            {/* password */}
            <div className='signup-item'>
              <label htmlFor='pw'>비밀번호</label>
              <input
                type='password'
                id='pw '
                className='inputBox'
                placeholder='6-15자의 영문 대소문자, 숫자, 특수문자 조합'
              />
            </div>

            {/*password confirmation  */}
            <div className='signup-item'>
              <label htmlFor='pw2'>비밀번호</label>
              <input
                type='password'
                id='pw2 '
                className='inputBox'
                placeholder='비밀번호 확인'
              />
            </div>
            {/*nickname 영역  */}
            <div className='signup-item'>
              <label htmlFor='nickname'>닉네임</label>
              <div className='inputBox'>
                {' '}
                <input
                  type='text'
                  id='nickname '
                  className='inputBox'
                  placeholder='영문 조합'
                />
                <input type='button' value='닉네임 확인' className='confirm' />{' '}
              </div>
            </div>
            {/*birthday 영역  */}
            <div className='signup-item'>
              <label htmlFor='birth'>생년월일</label>
              <input type='date' id='birth ' className='inputBox' />
            </div>
            {/* 제출 및 취소 버튼 */}
            <div className='signup-item'>
              <div className='final-buttons'>
                <button type='submit' id='submit'>
                  제출
                </button>
                <button type='reset' id='reset'>
                  초기화
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
