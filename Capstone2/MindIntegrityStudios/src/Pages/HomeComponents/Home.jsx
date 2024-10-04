import React, { useState } from 'react'; // Add this line
import { Link } from 'react-router-dom';
import HomeBdy from './HomeBdy';
import HomeOrbC from './HomeOrbC';
import './home.css'
import Navigation from './Navigation';



function Home() {
  return (
    <>
      {/* <HomeOrbC /> */}
      {/* <Navigation /> */}
      <HomeBdy />
    </>
  );
}

export default Home;