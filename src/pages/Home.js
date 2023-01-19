import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import hero from '../images/1_2.png';

const Home = () => {
  return (
    <div to='/' className='hero'>
      <div className='image__wrap'>
        <img src={hero} alt='' className='hero__image' />
      </div>
    </div>
  );
};

export default Home;
