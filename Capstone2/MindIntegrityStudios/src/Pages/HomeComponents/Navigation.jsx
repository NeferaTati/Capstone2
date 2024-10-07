import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';


function Navigation() {
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
            <li><Link to="/AboutUs">About</Link></li>
            <li><Link to="/ContactUs">Contact</Link></li>
            <li><Link to="/Work">Work</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;