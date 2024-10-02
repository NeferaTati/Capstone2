import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this line is present
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Lenis from 'lenis';

function Main() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Main />
  </Router>
);