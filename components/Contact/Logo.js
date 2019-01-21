import React from 'react'
import styled from 'styled-components'

const Divhover = styled.div`

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
  <div className="col-3 col-lg-3">
    <Divhover>
      <a href={props.link} target="_blank"><Img src={props.img} width="80px" height="80px" /></a>
    </Divhover>
  </div>
)

export default Logo
