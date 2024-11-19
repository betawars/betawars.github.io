// import { motion } from "framer-motion"
// import React, { useEffect, useRef } from "react"
// import styled from "styled-components"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import gsap from "gsap"
// gsap.registerPlugin(ScrollTrigger)

// const Main = styled(motion.div)`
//   border: 2px solid ${(props) => props.theme.text};
//   color: ${(props) => props.theme.text};
//   padding: 2rem;
//   width: auto;
//   height: 90vh;
//   z-index: -1;
//   line-height: 1.5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: calc(0.6rem + 1vw);
//   backdrop-filter: blur(4px);
  
//   position: relative;
//   font-family: 'Ubuntu Mono', monospace;
//   font-style: italic;
// `


// const MobileAbout = (props) => {
//     const aboutRef = useRef(null); // Create a ref to the component
//     const contentRef = useRef(null);

//     useEffect(() => {
//         const currentAbout = aboutRef.current;
//         const currentContent = contentRef.current

//         gsap.fromTo(
//             currentAbout,
//             {
//                 height: 0,
//             },
//             {
//                 height: "60vh",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: currentAbout,
//                     start: "top 80%", // Start when top of element reaches 95% of viewport height
//                     end: "bottom 20%", // End when bottom of element leaves the viewport
//                     // markers: true, // Show debug markers
//                 },
//             }
//         );

//         // Animate opacity of content
//         gsap.fromTo(
//             currentContent,
//             {
//                 opacity: 0,
//             },
//             {
//                 opacity: 1, // Animating to opacity: 1
//                 duration: 2,
//                 scrollTrigger: {
//                     trigger: currentContent,
//                     start: "top 95%", // Trigger when top of content reaches 95% of viewport height
//                     end: "bottom 20%", // End when bottom of content leaves the viewport
//                     scrub: true, // Smooth animation
//                     markers: true, // Debug markers to see trigger points
//                 },
//             }
//         );
//         return () => {
//             ScrollTrigger.kill();
//         };
//     }, []);

//     return (

//         <Main
//             ref={aboutRef}
//             initial={{ height: 0 }}
//             animate={{ height: '55vh' }}
//             transition={{ type: 'spring', duration: 2, delay: 1 }}
//         >
//             <motion.div
//                 ref={contentRef}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 2 }}
//             >
//                 Hi! I am Shashank Sanjay Betawar.
//                 <br /> <br />
//                 I’m a grad student at OSU and a Software Developer. I specialize in creating user-friendly interfaces and powerful backends.
//                 <br /> <br />
//                 Outside of coding, I’m passionate about video games, trekking, and reading. I enjoy bringing ideas to life and would love to connect with fellow tech enthusiasts.
//                 <br /> <br />
//                 Let’s talk tech or chat about universe!
//                 (Psst!. Remember to share your favorite book or video game with me. :))
//             </motion.div>
//         </Main>

//     )
// }


// export default MobileAbout



import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import BigTitlte from "../../subComponents/BigTitlte";
gsap.registerPlugin(ScrollTrigger);

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: auto;
  height: 90vh;
  z-index: -1;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: relative;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const MobileAbout = () => {
  const aboutRef = useRef(null); 
  const contentRef = useRef(null); 

  useEffect(() => {
    const currentAbout = aboutRef.current;
    const currentContent = contentRef.current;

    // Scroll animation for About Container (height)
    gsap.fromTo(
      currentAbout,
      { height: 0 },
      {
        height: "50vh",
        duration: 0.5,
        scrollTrigger: {
          trigger: currentAbout,
          start: "top 80%",
          end: "bottom 20%",
          once: false,
          toggleActions: "play none none none", 
        },
      }
    );

    // Scroll animation for content opacity
    gsap.fromTo(
      currentContent,
      { opacity: 0 },
      {
        opacity: 1, 
        duration: 2,
        scrollTrigger: {
          trigger: currentContent,
          start: "top 70%",  // Trigger when top of content reaches 70% of viewport height
          end: "bottom 20%",  // End when the bottom of content leaves the viewport
          once: false,
          toggleActions: "play none none none", // Play animation when entering viewport, don't reset on leaving
        },
      }
    );
  }, []);

  return (
    <Main ref={aboutRef}>
      <div ref={contentRef}>
        Hi! I am Shashank Sanjay Betawar.
        <br /> <br />
        I’m a grad student at OSU and a Software Developer. I specialize in creating user-friendly interfaces and powerful backends.
        <br /> <br />
        Outside of coding, I’m passionate about video games, trekking, and reading. I enjoy bringing ideas to life and would love to connect with fellow tech enthusiasts.
        <br /> <br />
        Let’s talk tech or chat about the universe!
        <br />
        (Psst! Remember to share your favorite book or video game with me. :))
      </div>

      <BigTitlte color="252, 246, 244" text="ABOUT" top="75%" right="5%" />
    </Main>
  );
};

export default MobileAbout;
