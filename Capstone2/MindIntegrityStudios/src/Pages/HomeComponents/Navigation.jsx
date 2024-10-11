import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipLink = ({ children, to }) => {
    return (
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-2xl font-black uppercase"
        style={{
          lineHeight: 0.75,
        }}
      >
        <Link to={to}>
          <div>
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`menu ${isExpanded ? 'expanded' : ''}`}>
        <nav>
          <ul className="flex flex-col gap-4">
            <li><FlipLink to="/">Home</FlipLink></li>
            <li><FlipLink to="/AboutUs">About</FlipLink></li>
            <li><FlipLink to="/ContactUs">Contact</FlipLink></li>
            <li><FlipLink to="/Work">Work</FlipLink></li>
            <li><FlipLink to="/Additems">Add</FlipLink> </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';


// function Navigation() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleMenu = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <>
//       <button className="menu-toggle" onClick={toggleMenu}>
//         ☰
//       </button>

//       <div className={`menu ${isExpanded ? 'expanded' : ''}`}>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/AboutUs">About</Link></li>
//             <li><Link to="/ContactUs">Contact</Link></li>
//             <li><Link to="/Work">Work</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Navigation;