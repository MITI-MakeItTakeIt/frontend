import React from 'react';
import Auth from './Auth';
import Profile from './Profile';

import './App.css';

//react dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import RegisterGame from './pages/games/RegisterGame';
import SubstitutePlayer from './pages/games/SubstitutePlayer';
import Login from './pages/account/Login';
import SearchGame from './pages/games/SearchGame';
import Signup from './pages/account/Signup';
// import Navbar from './components/Navbar';
import Aside from './components/Aside';

//styles
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Aside />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/registergame' element={<RegisterGame />} />
          <Route path='/substitute' element={<SubstitutePlayer />} />
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
