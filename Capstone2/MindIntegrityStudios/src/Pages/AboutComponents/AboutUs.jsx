import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { preloadImages, preloadVideo } from "\imageVideoUtils.js";

gsap.registerPlugin(ScrollTrigger);

//import { shuffleChars } from '../components/textshuffle';

const AboutUs = () => {
    useEffect(() => {
        // Preload images and video
        preloadImages('img').then(() => {
            console.log('All images preloaded');
        });

        preloadVideo('path/to/video.mp4').then((video) => {
            console.log('Video preloaded', video);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            {/* Your existing content here */}
            <div className="content">
                <svg>
                    <clipPath id="clip-1">
                        {/* ... existing clipPath text elements ... */}
                        <text x="0ch" y="0.95em" className="line-1 font-1 size-3">X</text>
                        <text x="1ch" y="0.95em" className="line-1 font-1 size-3">o</text>
                        <text x="2ch" y="0.95em" className="line-1 font-1 size-3">g</text>
                        <text x="3ch" y="0.95em" className="line-1 font-1 size-3">o</text>
                        <text x="4ch" y="0.95em" className="line-1 font-1 size-3">x</text>
                        <text x="5ch" y="0.95em" className="line-1 font-1 size-3">y</text>
                        <text x="6ch" y="0.95em" className="line-1 font-1 size-3">e</text>
                        <text x="7ch" y="0.95em" className="line-1 font-1 size-3">n</text>
                        <text x="8ch" y="0.95em" className="line-1 font-1 size-3">u</text>
                        <text x="9ch" y="0.95em" className="line-1 font-1 size-3">x</text>
                        <text x="10ch" y="0.95em" className="line-1 font-1 size-3">X</text>
                        <text x="11ch" y="0.95em" className="line-1 font-1 size-3">o</text>
                        <text x="12ch" y="0.95em" className="line-1 font-1 size-3">g</text>
                        <text x="13ch" y="0.95em" className="line-1 font-1 size-3">o</text>
                        <text x="14ch" y="0.95em" className="line-1 font-1 size-3">x</text>
                        <text x="15ch" y="0.95em" className="line-1 font-1 size-3">y</text>
                        <text x="16ch" y="0.95em" className="line-1 font-1 size-3">e</text>
                        <text x="17ch" y="0.95em" className="line-1 font-1 size-3">n</text>
                        <text x="18ch" y="0.95em" className="line-1 font-1 size-3">u</text>
                        <text x="19ch" y="0.95em" className="line-1 font-1 size-3">x</text>
                    </clipPath>
                    <clipPath id="clip-1-1">
                        {/* ... existing clipPath text elements ... */}
                        <text x="0ch" y="0.95em" className="line-2 font-1 size-3">X</text>
                        <text x="1ch" y="0.95em" className="line-2 font-1 size-3">o</text>
                        <text x="2ch" y="0.95em" className="line-2 font-1 size-3">g</text>
                        <text x="3ch" y="0.95em" className="line-2 font-1 size-3">o</text>
                        <text x="4ch" y="0.95em" className="line-2 font-1 size-3">x</text>
                        <text x="5ch" y="0.95em" className="line-2 font-1 size-3">y</text>
                        <text x="6ch" y="0.95em" className="line-2 font-1 size-3">e</text>
                        <text x="7ch" y="0.95em" className="line-2 font-1 size-3">n</text>
                        <text x="8ch" y="0.95em" className="line-2 font-1 size-3">u</text>
                        <text x="9ch" y="0.95em" className="line-2 font-1 size-3">x</text>
                        <text x="10ch" y="0.95em" className="line-2 font-1 size-3">X</text>
                        <text x="11ch" y="0.95em" className="line-2 font-1 size-3">o</text>
                        <text x="12ch" y="0.95em" className="line-2 font-1 size-3">g</text>
                        <text x="13ch" y="0.95em" className="line-2 font-1 size-3">o</text>
                        <text x="14ch" y="0.95em" className="line-2 font-1 size-3">x</text>
                        <text x="15ch" y="0.95em" className="line-2 font-1 size-3">y</text>
                        <text x="16ch" y="0.95em" className="line-2 font-1 size-3">e</text>
                        <text x="17ch" y="0.95em" className="line-2 font-1 size-3">n</text>
                        <text x="18ch" y="0.95em" className="line-2 font-1 size-3">u</text>
                        <text x="19ch" y="0.95em" className="line-2 font-1 size-3">x</text>
                    </clipPath>
                </svg>
                <div className="poster poster--half" style={{ clipPath: 'url(#clip-1)', '--offset-x': '10%', '--offset-y': '10%' }}>
                    <div className="poster__inner" style={{ backgroundImage: 'url(img/3.jpg)' }}></div>
                </div>
                <div className="poster poster--half" style={{ clipPath: 'url(#clip-1-1)', '--offset-x': '10%', '--offset-y': '10%' }}>
                    <div className="poster__inner" style={{ backgroundImage: 'url(img/4.jpg)' }}></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;