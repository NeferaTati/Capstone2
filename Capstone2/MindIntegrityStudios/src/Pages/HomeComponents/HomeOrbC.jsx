import React from 'react';
import EvEmitter from 'ev-emitter';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { preloadImage } from '../AboutComponents/imageVideoUtils';
import './HOC.css'
const HomeOrb = () => {
    let lenis;

    const contentWithSVG = Array.from(document.querySelectorAll('.content')).filter(element => {
        return element.querySelector(':scope svg') !== null;
    });

    const clipElements = [...document.querySelectorAll('clipPath')];

    const initSmoothScrolling = () => {
        lenis = new Lenis({
            lerp: 0.2,
            smoothWheel: true
        });

        lenis.on('scroll', () => ScrollTrigger.update());

        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
    };

    const applyCustomEffect_1 = (contentElement) => {
        const clipPath = contentElement.querySelectorAll('svg clipPath');
        const poster = contentElement.querySelectorAll('.poster');
        const posterInner = contentElement.querySelectorAll('.poster__inner');

        [...clipPath].forEach((clipPathEl, pos) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: poster[pos],
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            })
            .fromTo(clipPathEl, {
                xPercent: pos === 0 ? 40 : -80
            }, {
                ease: 'none',
                xPercent: pos === 0 ? -40 : 20
            }, 0)
            .fromTo(posterInner[pos], {
                xPercent: pos === 0 ? -5 : 5,
                yPercent: pos === 0 ? -5 : 5
            }, {
                xPercent: pos === 0 ? 5 : -5,
                yPercent: pos === 0 ? 5 : -5
            }, 0);
        });
    };

    // const imageSrc = './components/photos/IMG_5732_y2mvak.jpg';
    // preloadImage(imageSrc)
    //     .then(img => {
    //         // Image is preloaded and ready to use
    //         document.body.appendChild(img); // Example usage
    //     })
    //     .catch(error => {
    //         console.error('Error preloading image:', error);
    //     });

    return (
        <>
            {/* <svg>
                <clipPath id="clip-1">
                    <text x="0ch" y="0.95em" className="line-1 font-1 size-3">M</text>
                    <text x="1ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="2ch" y="0.95em" className="line-1 font-1 size-3">N</text>
                    <text x="3ch" y="0.95em" className="line-1 font-1 size-3">D</text>
                    <text x="4ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="5ch" y="0.95em" className="line-1 font-1 size-3">N</text>
                    <text x="6ch" y="0.95em" className="line-1 font-1 size-3">T</text>
                    <text x="7ch" y="0.95em" className="line-1 font-1 size-3">E</text>
                    <text x="8ch" y="0.95em" className="line-1 font-1 size-3">G</text>
                    <text x="9ch" y="0.95em" className="line-1 font-1 size-3">R</text>
                    <text x="10ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="11ch" y="0.95em" className="line-1 font-1 size-3">T</text>
                    <text x="12ch" y="0.95em" className="line-1 font-1 size-3">Y</text>
                    <text x="13ch" y="0.95em" className="line-1 font-1 size-3">S</text>
                    <text x="14ch" y="0.95em" className="line-1 font-1 size-3">T</text>
                    <text x="15ch" y="0.95em" className="line-1 font-1 size-3">U</text>
                    <text x="16ch" y="0.95em" className="line-1 font-1 size-3">D</text>
                    <text x="17ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="18ch" y="0.95em" className="line-1 font-1 size-3">O</text>
                    <text x="19ch" y="0.95em" className="line-1 font-1 size-3">S</text>
                </clipPath>
                <clipPath id="clip-1-1">
                <text x="0ch" y="0.95em" className="line-1 font-1 size-3">M</text>
                    <text x="1ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="2ch" y="0.95em" className="line-1 font-1 size-3">N</text>
                    <text x="3ch" y="0.95em" className="line-1 font-1 size-3">D</text>
                    <text x="4ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="5ch" y="0.95em" className="line-1 font-1 size-3">N</text>
                    <text x="6ch" y="0.95em" className="line-1 font-1 size-3">T</text>
                    <text x="7ch" y="0.95em" className="line-1 font-1 size-3">E</text>
                    <text x="8ch" y="0.95em" className="line-1 font-1 size-3">G</text>
                    <text x="9ch" y="0.95em" className="line-1 font-1 size-3">R</text>
                    <text x="10ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="11ch" y="0.95em" className="line-1 font-1 size-3">T</text>
                    <text x="12ch" y="0.95em" className="line-1 font-1 size-3">Y</text>
                    <text x="13ch" y="0.95em" className="line-1 font-1 size-3">S</text>
                    <text x="14ch" y="0.95em" className="line-1 font-1 size-3">T</text>
                    <text x="15ch" y="0.95em" className="line-1 font-1 size-3">U</text>
                    <text x="16ch" y="0.95em" className="line-1 font-1 size-3">D</text>
                    <text x="17ch" y="0.95em" className="line-1 font-1 size-3">I</text>
                    <text x="18ch" y="0.95em" className="line-1 font-1 size-3">O</text>
                    <text x="19ch" y="0.95em" className="line-1 font-1 size-3">S</text>
                </clipPath>
            </svg> */}
            <div className="poster poster--half" style={{ clipPath: 'url(#clip-1)', '--offset-x': '10%', '--offset-y': '10%' }}>
                <div className="poster__inner" style={{ backgroundImage: 'https://res.cloudinary.com/dvvin6oes/image/upload/v1727365242/work/IMG_5732_y2mvak.jpg' }}></div>
            </div>
            <div className="poster poster--half" style={{ clipPath: 'url(#clip-1-1)', '--offset-x': '10%', '--offset-y': '10%' }}>
                <div className="poster__inner" style={{ backgroundImage: 'https://res.cloudinary.com/dvvin6oes/image/upload/v1727365288/work/IMG_5734_xjkans.jpg' }}></div>
            </div>
        </>
    );
};

export default HomeOrb;
