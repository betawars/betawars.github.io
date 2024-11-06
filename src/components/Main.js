import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'
;
import ContactForm from '../subComponents/Contactform'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Submit = styled.h2`
display: inline-block;
cursor: pointer;
z-index: 1;
transform: scale(1);
bottom:2rem;
transition: transform 0.5s ease-in-out;
&::after {
  content: '';
  position: absolute;
  height: 3px;
  left: 0;
  bottom: 0;
  width: 0;
  background: #006ea9;
  transition: width 0.2s;
}
&:hover::after {
  background-color: #006ea9;
  width: 100%;
}
&:hover {
  transform: scale(1.2);
}
&:active { 
  transform: scale(1.0); 
}
`

const MessageBox = styled(motion.div)`

left: 50%;
top: 40%;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
zIndex: 3, 
position: 'relative'

width: 60vw;
height: 10vh;
display: flex;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-right: 2px solid ${props => props.theme.text};
    border-top:2px solid ${props => props.theme.text};
    border-bottom:2px solid ${props => props.theme.text};
background:rgb(251, 246, 244);
z-index:5;

`

const Text = styled.div`
color: ${props => props.theme.body};
font-size: 3.5vh;
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
cursor: pointer;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const ThankYouContainer = styled.div`

z-Index: 3;
position: relative;
visibility:${JSON.parse(localStorage.getItem('formSubmitted'))?"visible":"none"}

`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #006ea9;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);
    const [formClick, setFormClick] = useState({
        formOpened:false,
        confirmation:false
    });

    useEffect(() => {
        setTimeout(()=>{
            setClick(true);
           }, 1)
        
      }, []);

    const handleFormClick = () => setFormClick({
        ...formClick,
        formOpened:!formClick.formOpened
    })

    
     
    return (
        <MainContainer>

            {
                formClick.formOpened ? (
                    <div style={{ zIndex: 2, position: 'relative' }}>
                        <ContactForm closeForm={handleFormClick}/>
                    </div>
                )

                    : ""
            }

            <DarkDiv click={click} />

            <Container>

                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />
                {/* target="_blank" href="mailto:betawars@oregonstate.edu" */}
                <Contact onClick={handleFormClick}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        Say hi..
                    </motion.h2>
                </Contact>
                {/* <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Blog
                </motion.h2>
            </BLOG> */}
                <WORK to="/work" click={+click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work.
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT to="/about" click={+click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>
                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills.
                        </motion.h2>
                    </SKILLS>

                </BottomBar>

            </Container>
            <Intro />


        </MainContainer>
    )
}

export default Main
