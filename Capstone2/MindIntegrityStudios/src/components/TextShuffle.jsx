import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { lettersAndSymbols } from './utils.js';

 export const TextShuffle = () => {

    const boxRef = useRef();

        useEffect(() => {
            gsap.to(boxRef.current, { rotation: 360, duration: 2 });
        }, []);

        return (
            <div ref={boxRef} style={{ width: 100, height: 100, background: 'red' }}>
            Hello GSAP
            </div>
  )
//     const elRef = useRef(null);
//     const titleRef = useRef(null);
//     const dateRef = useRef(null);
//     const linkRef = useRef(null);
//     const imageRef = useRef(null);
//     const imageWrapperRef = useRef(null);
// ///Mouse hover
//     useEffect(() => {
//         const onMouseEnter = () => mouseEnter();
//         const onMouseLeave = () => mouseLeave();

//         elRef.current.addEventListener('mouseenter', onMouseEnter);
//         elRef.current.addEventListener('mouseleave', onMouseLeave);

//         return () => {
//             elRef.current.removeEventListener('mouseenter', onMouseEnter);
//             elRef.current.removeEventListener('mouseleave', onMouseLeave);
//         };
//     }, []);

//     const mouseEnter = () => {
//         shuffleChars(dateRef.current.children);
//         shuffleChars(titleRef.current.children);
//         shuffleChars(linkRef.current.children);

//         // Add your gsap animation here
//     };

//     const mouseLeave = () => {
//         // Add your mouseLeave logic here
//     };
// ///Shuffles the inner HTML in the array, randomizing it 3 times 
//     const shuffleChars = (arr) => {
//         arr.forEach((char) => {
//             gsap.killTweensOf(char);
//             gsap.fromTo(char, 
//                 { opacity: 0 },
//                 {
//                     duration: 0.04,
//                     innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
//                     repeat: 3,
//                     repeatRefresh: true,
//                     opacity: 1,
//                     repeatDelay: 0.05,
//                     onComplete: () => gsap.set(char, {innerHTML: char.dataset.initial, delay: 0.03}),
//                 }
//             );
//         });
//     };

    
};

export default TextShuffle;