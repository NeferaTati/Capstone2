import React from 'react';
import { Link } from 'react-router-dom';
import HomeBdy from './HomeBdy';
import HomeOrb from '../HomeOrbC';
import Navigation from '../Navigation';

// Adjust the import path as needed

function Home() {
  return (
    <>
      <HomeOrb />
      {/* <div className="flex flex-col min-h-screen">
        <Navigation />
         */}
        <main className="flex-grow p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <HomeBdy />
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              
            </div>
          </div>
        </main>

        <div className="mt-8 text-center">
          <Link to="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            Learn More
          </Link>
        </div>
      {/* </div> */}
    </>
  );
}

export default Home;