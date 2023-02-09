import React from 'react';
import Auth from './Auth';
import Profile from './Profile';

import './App.css';

//react dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import ImportGame from './pages/games/ImportGame';
import JoinGame from './pages/games/JoinGame';
import Login from './pages/account/Login';
import SearchGame from './pages/games/SearchGame';
import Signup from './pages/account/Signup';
// import Navbar from './components/Navbar';
import Aside from './components/Aside';

//styles
import './App.css';

const App = () => {
  // const REST_API_KEY = 'ac876f45a6f733c33d9c4f6e305208e7';
  // const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Aside />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<ImportGame />} />
          <Route path='/participate' element={<JoinGame />} />
          <Route path='/searchGame' element={<SearchGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/oauth/kakao/callback' element={<Auth />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
