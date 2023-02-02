import React from 'react';
import './App.css';

//react dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';

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
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

/* function App() {
  return (
    <Router>
      <NavBarElements />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<RegisterGame />} />
        <Route path='/participate' element={<ParticipateGame />} />
        <Route path='/searchGame' element={<SearchGame />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
 */
