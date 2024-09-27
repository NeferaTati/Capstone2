import React, { useState } from 'react';
import HomeBdy from './homeBdy';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Use shuffleChars in your page component

function Home() {
  const navigate = useNavigate();
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

<div className="container">
	<div className="content">

    <div className="home-container">
    <h1 className="website-title">
      Mind Integrity Studios
    </h1>
    <header className="orbit-header">
        <div className="orbit-container">
          {/* Other components and content */}
          {/* <HomeOrbC /> */}
            {/* Other components and content */}
          </div> 
    <h1 className="website-title">Mind Integrity Studios</h1>
      </header>

      
    <HomeBdy />  {/* Use the HomeBdy component here */}
    
    </div>
    </div>
    </div>
    </>
  )
}

export default Home;