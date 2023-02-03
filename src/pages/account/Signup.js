import React, { useRef, useState, useEffect } from 'react';
import './Signup.css';
import Login from './Login';
import axios from '../../api/axios';

// ================REGEX로 input restriction===================
//lower or uppercase letter. 3- 23 characters digits, hyphens or undersscores
const USER_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// 영문자 소문자, 숫자, "-", "_" 로만 구성된 길이 2 ~ 10자리 사이 문자열
const USER_REGEX_NICK = /^[a-z]{3,18}$/;
// at least 1 lower, upper, digit, special character , 8 -24 charcters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,24}$/;
// yyyy-mm-dd:
const DATE_REGEX =
  /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
// const REGISTER_URL = '/';

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  //user
  const [email, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  //nickname
  const [nickname, setUserNickname] = useState('');
  const [validNick, setValidNick] = useState(false);
  const [nickFocus, setNickFocus] = useState(false);
  //date
  const [date, setDate] = useState('');
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);
  //password
  const [password, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  //confirm password
  const [matchpwd, setmatchpwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  //error message
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // user
  useEffect(() => {
    const result = USER_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidName(result);
  }, [email]);

  // date
  useEffect(() => {
    const result = DATE_REGEX.test(date);
    console.log(result);
    console.log(date);
    setValidName(result);
  }, [date]);

  // nickname
  useEffect(() => {
    const result = USER_REGEX_NICK.test(nickname);
    console.log(result);
    console.log(nickname);
    setValidNick(result);
  }, [nickname]);

  // password
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPwd(result);
    const match = password === matchpwd;
    setValidMatch(match);
  }, [password, matchpwd]);

  useEffect(() => {
    setErrMsg('');
  }, [email, password, matchpwd, nickname]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //if button enabled with JS hack
    const v1 = USER_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    const v3 = USER_REGEX_NICK.test(nickname);

    if (!v1 || !v2 || !v3) {
      setErrMsg('입력된 내용 확인해주세요');
      return;
    }
    // console.log(user, pwd, matchpwd, nickname, date);
    // setSuccess(true);

    // ================FETCH PROMISES ===================
    const data = {
      email: email,
      password: email,
      password_confirm: matchpwd,
      nickname: nickname,
    };

    const requestOptions = {
      method: 'POST', //OR POST
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    // https://reqres.in/api/users --> test API FETCH
    // http://makeittakeit-env.eba-yfmvebdm.ap-northeast-2.elasticbeanstalk.com/
    fetch('https://reqres.in/api/users', requestOptions)
      // method: 'POST', // or 'PUT'
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(data),
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setSuccess(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('실패', email, password, matchpwd, nickname, date);
      });

    // ================AXIOS ===================
    // try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON.stringify({ email, password, password_check: matchpwd, nickname }),
    //     {
    //       headers: { 'Content-Type': 'applications/json' },
    //       withCredientails: true,
    //     }
    //   );
    //   console.log(response.data);
    //   console.log(response.accessToken);
    //   console.log(JSON.stringify());
    //   setSuccess(true);
    // } catch (err) {
    //   if (!err.response) {
    //     setErrMsg('No Server Response');
    //   } else if (err.response?.status === 409) {
    //     setErrMsg('이미 가입된 정보입니다');
    //   } else {
    //     setErrMsg('회원가입 실패하셨습니다');
    //     console.log(email, password, matchpwd, nickname, date);
    //     console.log('AHHHHHHH ERRORRRR');
    //   }
    //   errRef.current.focus();
    // }
  };
  // ================Write code below===================
  return (
    <>
      {success ? (
        <Login />
      ) : (
        <div className='signup-layout'>
          <div className='signup-wrap'>
            {/* ======== error msg =========*/}
            <div className='signup-info'>
              <h1>회원가입</h1>
              <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live='assertive'
              >
                {errMsg}
              </p>
              <form onSubmit={handleSubmit}>
                {/* ---------------EMAIL (USERNAME)----------------- */}
                <div className='input-wrapper'>
                  <input
                    type='text'
                    id='email'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    required
                    value={email}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    placeholder='이메일 주소'
                  />

                  <button className='confirm'>중복확인</button>
                </div>
                {/* ---------------PASSWORD----------------- */}

                <div className='input-wrapper'>
                  <input
                    type='password'
                    id='pass'
                    placeholder='비빔번호 (영문 소대문 특수문자 포함) 6~24글자'
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    value={password}
                    // aria-invalid={validPwd ? 'false' : 'true'}
                    // aria-describedby='pwdnote'
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                </div>
                {/* ---------------PASSWORD CONFIRM----------------- */}
                <div className='input-wrapper'>
                  <input
                    type='password'
                    id='pass-check'
                    placeholder='비빔번호 확인'
                    value={matchpwd}
                    onChange={(e) => setmatchpwd(e.target.value)}
                    required
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                </div>
                {/* ---------------NICKNAME----------------- */}
                <div className='input-wrapper'>
                  <input
                    type='text'
                    id='nickname'
                    placeholder='닉네임 (영문 소문자만) 3~18글자'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUserNickname(e.target.value)}
                    required
                    // aria-invalid={validName ? 'false' : 'true'}
                    // aria-describedby='uidnote'
                    onFocus={() => setNickFocus(true)}
                    onBlur={() => setNickFocus(false)}
                  />
                  <button className='confirm'>중복확인</button>
                </div>
                {/* ---------------DATE----------------- */}
                <div className='input-wrapper'>
                  <input
                    type='date'
                    id='date'
                    value={date}
                    required
                    onChange={(e) => setDate(e.target.value)}
                    onFocus={() => setDateFocus(true)}
                    onBlur={() => setDateFocus(false)}
                  />
                </div>
                {/* ---------------SUBMIT BUTTON----------------- */}
                <div className='input-wrapper'>
                  <button
                    disabled={
                      !validName || !validPwd || !validMatch || !validNick
                        ? // !validDate
                          true
                        : false
                    }
                    className='signup--btn'
                    // disabled={!validName || !validPwd || !validMatch ? true : false}
                  >
                    회원가입
                  </button>
                </div>

                {/* ---------------LOGIN BUTTON----------------- */}
                <div className='input-wrapper'>
                  <span id='signup-cancel'>이미 회원이신가요? 로그인</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}{' '}
    </>
  );
};

export default Signup;
