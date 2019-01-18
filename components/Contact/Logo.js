import React from 'react'
import styled from 'styled-components'

const Divhover = styled.div`
  width:100%;
  height: 100%;
  /* transform: scale(1);
  transition: .3s ease-in-out; */
  &:hover img {
    animation-duration: 2s;
    animation-name: hinge;
  }
  @keyframes hinge {
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(700px, 700px, 0);
    opacity: 0;
  }
}
`
const Img = styled.img`
    width:5em;
    @media (min-width:320px) {
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
    }
`

const Logo = (props) => (
  <Divhover>
    <a href={props.link} target="_blank"><Img src={props.img} /></a>
  </Divhover>
)

export default Logo
