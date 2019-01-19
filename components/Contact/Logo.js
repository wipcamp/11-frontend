import React from 'react'
import styled from 'styled-components'

const Divhover = styled.div`
  /* transform: scale(1);
  transition: .3s ease-in-out; */
  &:hover img {
    animation-duration: 1s;
    animation-name: headShake;
  }
  @keyframes headShake {
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
}
`
const Img = styled.img`
    height: 64px;
    width:64px;
    /* @media (min-width:320px) {
      width:2.5em;
    }
    @media (min-width:420px) {
    
      width:5em;
    }
    @media (min-width:576px) {
      margin-top: 2%;
      width:5em;
    }
    @media (min-width:768px) {
      margin-top: 5%;
      width:5em;
    }
    @media (min-width:1024px) {
      margin-top: 5%;
      width:5em;
    } */
`

const Logo = (props) => (
  <Divhover>
    <a href={props.link} target="_blank"><Img src={props.img} /></a>
  </Divhover>
)

export default Logo
