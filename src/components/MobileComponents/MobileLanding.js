import React, { useEffect, useRef } from "react";
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import MobileNavBar from "./MobileNavebar";
import MobileLogoComponent from "./MobileLogoComponent";
import Me from '../../assets/Images/profile-img.png'
import MobileAbout from "./MobileAbout";
import MobileSkills from "./MobileSkills";

const MainMobileContainer = styled.div`

    font-family: 'Source Sans Pro',sans-serif;
    display: flex;
    flex-direction:column;
    position:relative;

`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`

const Floating = styled.div`
    position: relative;
    margin-top:6em;
    right: -8%;
    width: 80%;
    cursor: pointer;
    animation: ${float} 4s ease infinite;
    z-index:-1;

    img {
        width: 100%;
        height: auto; 
    }
`

const FloatingContainer = styled.div`
    position:relative;
    height:100vh;
    width:auto;
    z-index:-1;

`

const AboutContainer = styled.div`
    display:flex;
    background-color: #006ea9;
    justify-content:center;
    align-items:center;
    padding:0.5em;
    height:100vh;
    width:auto;
    z-index:-1;
    color:white;

`

const SkillContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0.5em;
    height:100vh;
    width:auto;
    z-index:-1;

`


const MobileLanding = (props) => {


    return (
        <MainMobileContainer>
            <MobileLogoComponent />
            <MobileNavBar  />
            <FloatingContainer>
                <Floating >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </Floating>
            </FloatingContainer>

            <AboutContainer 
                id="about">
                <MobileAbout/>
            </AboutContainer>
            
            
            <SkillContainer
                id = "skills">
                <MobileSkills/>
            </SkillContainer>

            <SkillContainer
                id = "work">
                <MobileSkills/>
            </SkillContainer>

            
            <SkillContainer
                id = "contact">
                <MobileSkills/>
            </SkillContainer>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
            </div>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
            </div>


        </MainMobileContainer>
    )
}

export default MobileLanding
