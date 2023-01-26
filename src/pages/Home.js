import React from 'react';
import './Home.css';
import hero from '../images/4.jpg';

const Home = () => {
  return (
    <div to='/' className='hero'>
      {/* <Aside /> */}{' '}
      <div className='image__wrap'>
        <img src={hero} alt='' className='hero__image' />
      </div>
    </div>
  );
};

export default Home;
