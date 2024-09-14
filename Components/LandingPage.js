import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center bg-homepage-gradient'>
      <Navbar className='align-top'/>
      <hr className="md:mr-20 md:ml-20" style={{color: 'gray'}}/>
      <div className='flex flex-grow justify-center w-full'>
        <Home/>
      </div>
    </div>
  );
};

export default LandingPage;
