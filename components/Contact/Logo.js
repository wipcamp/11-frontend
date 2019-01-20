import React from 'react'
import styled from 'styled-components'

const Divhover = styled.div`
  /* transform: scale(1);
  transition: .3s ease-in-out; */
   /* @media (min-width:320px) {
      margin-left:.5em;
    }
   @media (min-width:420px) {
      margin-left:1.25em;
    }
    @media (min-width:576px) {
      margin-left:2.25em;
    }
    @media (min-width:768px) {
      margin-left:2em;
    }*/
    /* @media (min-width:1024px) {
      margin-left:4em;
    } */
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
    <a href={props.link} target="_blank"><Img src={props.img} width="80px" height="80px" /></a>
  </Divhover>
)

export default Logo
