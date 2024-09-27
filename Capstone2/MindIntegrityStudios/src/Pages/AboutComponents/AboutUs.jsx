import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import { shuffleChars } from '../components/textshuffle';

// Use shuffleChars in your page component

function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>

<button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

<div className={`menu ${isExpanded ? 'expanded' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/work">Work</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default AboutUs;