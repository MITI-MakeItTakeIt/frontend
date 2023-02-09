import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AutoProvider';
import './Login.css';
import kakaoLoginBox from '../../images/kakao_login_medium_wide.png';
import Home from '../Home';

const Login = () => {
  // KAKAO AUTHENTICAITON
  const REST_API_KEY = 'ac876f45a6f733c33d9c4f6e305208e7';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const navigate = useNavigate();

  // /////

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    setEmail('');
    setPassword('');
    setSuccess(true);

    // ================FETCH PROMISES ===================
    const data = {
      email,
      password,
    };

    const requestOptions = {
      method: 'GET', //OR POST
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      body: JSON.stringify(data),
    };
    // https://reqres.in/api/users --> test API FETCH
    // http://makeittakeit-env.eba-yfmvebdm.ap-northeast-2.elasticbeanstalk.com/
    fetch('https://reqres.in/api/users', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        setSuccess(true);
        const accessToken = data.accessToken;
        setAuth(email, password, accessToken);
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('FAILURE TO LOAD! ', email, password);
        errRef.current.focus();
      });
  };

  return (
    <>
      {success ? (
        <Home />
      ) : (
        <div className='login-layout'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>

          <div className='login-wrap'>
            {/* <div className='login-img'></div> */}
            <div className='login-info'>
              <h1>로그인</h1>
              <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                  <input
                    type='text'
                    id='email'
                    placeholder='이메일'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    required
                  />
                </div>
                <div className='input-wrapper'>
                  <input
                    type='password'
                    id='pass'
                    placeholder='비빔번호'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                </div>
                <div className='input-wrapper find-info'>
                  <p id='find-id-pass'>아이디/비밀번호 찾기</p>
                  <p id='to-signup'>회원가입 </p>
                </div>
                <div className='input-wrapper'>
                  <button type='submit' id='login--btn'>
                    로그인
                  </button>
                </div>
                <div className='input-wrapper'>
                  <a href={KAKAO_AUTH_URL}>
                    <img
                      src={kakaoLoginBox}
                      alt='kakao login box'
                      id='kakao-login-btn'
                    />
                  </a>
                </div>
                <div className='input-wrapper'></div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
