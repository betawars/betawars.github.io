import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { NavLink } from 'react-router-dom'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
cursor:pointer;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
transform: scale(1);

&::after{
content:'';
position: absolute;
height:5px;
left: 0;
bottom: 0;
width: 0;
background: white;
transition: width .2s;
}

&:hover:after{
width:100%
}

&:hover{

  transform: scale(1.2);
}
`

const handleClick = () => {
  return(
    <NavLink to="/">
    </NavLink>
  )
}

const LogoComponent = (props) => {
    return (
      <NavLink to="/">
        <Logo color={props.theme} onClick={() => handleClick()}>
          SSB
        </Logo>
      </NavLink>    
    )
}

export default LogoComponent
