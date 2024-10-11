import React, { useState } from 'react'; // Add this line
import { Link } from 'react-router-dom';
import HomeBdy from './HomeBdy';
import Example from './HomeOrbC';
import './home.css'
import RevealLinks from '../ContactComponents/Contactfooter';



function Home() {
  return (
    <>
     <Example />  
      {/* <Navigation /> */}
      <HomeBdy />
      <RevealLinks />
    </>
  );
}

export default Home;