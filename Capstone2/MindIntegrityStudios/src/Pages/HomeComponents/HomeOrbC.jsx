import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";

const Example = () => {
  const [isNavClosed, setIsNavClosed] = useState(true);

  useEffect(() => {
    const checkNavState = () => {
      const navElement = document.querySelector('.menu');
      setIsNavClosed(!navElement.classList.contains('expanded'));
    };

    // Check initial state
    checkNavState();

    // Set up a MutationObserver to watch for changes in the navigation menu
    const observer = new MutationObserver(checkNavState);
    const navElement = document.querySelector('.menu');
    if (navElement) {
      observer.observe(navElement, { attributes: true, attributeFilter: ['class'] });
    }

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex h items-center justify-center">
       
      </div>
      {isNavClosed && <HorizontalScrollCarousel />}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[30vh] bg-stone-50"> {/* Reduced height */}
      <div className="sticky top-[10px] flex h-[calc(30vh-10px)] items-center overflow-hidden"> {/* Adjusted top and height */}
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative  h-[80px] w-[90px] overflow-hidden bg-slate-50"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/505dc1a5cf674774c499c3fed250a61e_l0jsdx.jpg",
    title: "M",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556318/261-esmeralda-mardi-gras-solidago-orange-painted_ydwo4h.jpg",
    title: "I",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/R_xv3zkt.jpg",
    title: "N",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/pngtree-orange-tinted-natural-stone-a-smooth-texture-ideal-for-backgrounds-image_13815749_zuonxw.png",
    title: "D",
    id: 4,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/cornfield-sunset-6842751_tkhd8p.webp",
    title: "I",
    id: 5,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/orange-tinted-sky-illustrating-tommyix_fubm9m.jpg",
    title: "N",
    id: 6,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/1ed3518c57f12aa4c3ed344d91e48ad8_bnaiec.jpg",
    title: "T",
    id: 7,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556316/png-transparent-orange-abstract-halftone-dot-pattern-brochure-template-flyer-background-illustration-with-colored-circles-thumbnail_mvmm8v.png",
    title: "E",
    id: 8,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556180/orange-color-painting_efnxbc.webp",
    title: "G",
    id: 9,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556316/OIP_n6ujbv.jpg",
    title: "R",
    id: 10,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556316/MG_6747-1100x619_gbp1gi.jpg",
    title: "I",
    id: 11,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/artworks-000514165245-yl742v-t500x500_n8svkk.jpg",
    title: "T",
    id: 12,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/real-de-los-reyes-4-63cedb78c116e_lzzvf5.jpg",
    title: "Y",
    id: 13,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/106b0489d2104264988c6968edd4a568_wmo0un.jpg",
    title: "S",
    id: 14,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559464/OIP_1_b9bcvj.jpg",
    title: "T",
    id: 15,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559461/Aqn4hK_wkt9k3.webp",
    title: "U",
    id: 16,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559457/OIP_2_uvoegv.jpg",
    title: "D",
    id: 17,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559314/R_1_yn0gup.jpg",
    title: "I",
    id: 18,
  },
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559298/orange-modern-abstract-background-modern-orange-abstract-design-concept-of-web-page-design-easy-to-edit-illustration-vector_etsbho.jpg",
    title: "O",
    id: 19,
  }, 
  {
    url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559314/R_1_yn0gup.jpg",
    title: "S",
    id: 20,
  },
];

export default Example;






// import React from 'react';
// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";

// const Example = () => {
//   return (
//     <div className>
//       <div className="flex h- items-center justify-center">
       
//       </div>
//       <HorizontalScrollCarousel />
     
//       </div>
    
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <section ref={targetRef} className=" h-15 bg-stone-50">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[250px] w-[250px] overflow-hidden bg-stone-50"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Example;

// const cards = [
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/505dc1a5cf674774c499c3fed250a61e_l0jsdx.jpg",
//     title: "M",
//     id: 1,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556318/261-esmeralda-mardi-gras-solidago-orange-painted_ydwo4h.jpg",
//     title: "I",
//     id: 2,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/R_xv3zkt.jpg",
//     title: "N",
//     id: 3,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/pngtree-orange-tinted-natural-stone-a-smooth-texture-ideal-for-backgrounds-image_13815749_zuonxw.png",
//     title: "D",
//     id: 4,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/cornfield-sunset-6842751_tkhd8p.webp",
//     title: "I",
//     id: 5,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/orange-tinted-sky-illustrating-tommyix_fubm9m.jpg",
//     title: "N",
//     id: 6,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/1ed3518c57f12aa4c3ed344d91e48ad8_bnaiec.jpg",
//     title: "T",
//     id: 7,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556316/png-transparent-orange-abstract-halftone-dot-pattern-brochure-template-flyer-background-illustration-with-colored-circles-thumbnail_mvmm8v.png",
//     title: "E",
//     id: 8,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556180/orange-color-painting_efnxbc.webp",
//     title: "G",
//     id: 9,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556316/OIP_n6ujbv.jpg",
//     title: "R",
//     id: 10,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556316/MG_6747-1100x619_gbp1gi.jpg",
//     title: "I",
//     id: 11,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/artworks-000514165245-yl742v-t500x500_n8svkk.jpg",
//     title: "T",
//     id: 12,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/real-de-los-reyes-4-63cedb78c116e_lzzvf5.jpg",
//     title: "Y",
//     id: 13,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728556317/106b0489d2104264988c6968edd4a568_wmo0un.jpg",
//     title: "S",
//     id: 14,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559464/OIP_1_b9bcvj.jpg",
//     title: "T",
//     id: 15,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559461/Aqn4hK_wkt9k3.webp",
//     title: "U",
//     id: 16,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559457/OIP_2_uvoegv.jpg",
//     title: "D",
//     id: 17,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559314/R_1_yn0gup.jpg",
//     title: "I",
//     id: 18,
//   },
//   {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559298/orange-modern-abstract-background-modern-orange-abstract-design-concept-of-web-page-design-easy-to-edit-illustration-vector_etsbho.jpg",
//     title: "O",
//     id: 19,
//   }, {
//     url: "https://res.cloudinary.com/dvvin6oes/image/upload/v1728559314/R_1_yn0gup.jpg",
//     title: "S",
//     id: 20,
//   },
  
// ];





