import React from 'react'
import styled, { keyframes } from 'styled-components'

const headShake = keyframes` 
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
`

const Divhover = styled.div`
  /* @media (min-width:1000px) {
    padding-left:2em;
    padding-right:auto;
  } */
  &:hover img {
    animation: ${headShake} 1s;
  }
`
const Img = styled.img`
    /* content: url(${(props) => props.imgUrl}); */
    @media (min-width:320px) {
      width:50px;
      height:50px;
    }
    @media (min-width:420px) {
      width:70px;
      height:70px;
    }
    @media (min-width:576px) {
      width:70px;
      height:70px;
    }
    @media (min-width:768px) {
      width:80px;
      height:80px;
    }
    @media (min-width:1024px) {
      width:80px;
      height:80px;
    }
`

const Logo = (props) => (
  <Divhover>
    <a href={props.link} target="_blank"><Img src={props.imgUrl} width="80px" height="80px" /></a>
  </Divhover>
)

export default Logo
