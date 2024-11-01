import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import SkillCards from '../subComponents/SkillCards';
import { motion } from 'framer-motion';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 75vw;
height: 70vh;
z-index:3;
line-height: 1.5;
backdrop-filter: blur(4px);
margin-right:5vw;

font-family: 'Ubuntu Mono',monospace;
display: flex;
justify-content: space-between;
align-items: center;

`

const Title = styled.h2`
padding-left: 2vw;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {

    const innerDivStyle = {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <ParticleComponent theme='light' />
                <Main
                    initial={{ height: 0 }}
                    animate={{ height: '55vh' }}
                    transition={{ type: 'spring', duration: 2, delay: 1 }}
                >

                    <motion.div
                        style={innerDivStyle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <Title>
                            Click to learn more about them
                        </Title>
                        <SkillCards />
                        {/* <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                    <Description>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>
                                Web Design
                            </li>
                            <li>
                                Mobile Apps
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                Figma
                            </li>

                        </ul>
                    </Description>

                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, Github, Codepen etc.
                        </p>
                    </Description> */}


                    </motion.div>
                    <BigTitle text="SKILLS" top="80%" right="10%" />

                </Main>

                

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
