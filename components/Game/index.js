import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'
import Background from './background'

const Model = styled(Wippo)`
  @media(min-width:320px) {
    bottom: 0;
  }
  @media (min-width:768px) {
    bottom: -5vh;
  }
  @media(min-width:800px) {
    bottom: -2.5vh;
  }
  @media(min-width:900px) {
    bottom: -3vh;
  }
  @media(min-width:1024px) {
    bottom: -3.5vh;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
     bottom: -4.5vh;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    bottom: -4vh;
  }    
`
const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
  `
const Img = styled.img`
  animation: ${pulse} 3s infinite;
  cursor: pointer;
   @media(min-width:320px) {
    width:309px;
    height: auto;
  }
  @media (min-width:410px) {
    width:360px;
    height: auto;
  }
  @media (min-width:576px) {
    width:390px;
    height: auto;
  }
  @media (min-width:768px) {
    width: 420px;
    height: auto;
  }
  @media(min-width:1024px) {
    width:500px;
    height:auto;
  }
`
const Div = styled.div`
  top:50%;
  z-index:9;
  transform: translate(0%,30%);
  @media(min-width:320px) {
    top: 35vh;
  }
  @media (min-width:410px) {
    top: 35vh;
  }
  @media (min-width:576px) {
    top: 25vh;
  }
  @media (min-width:768px) {
    top: 20vh;
  }
  @media(min-width:900px) {
    top: 15vh;
  }
  @media(min-width:1024px) {
    top: 10vh;
  }
  @media(min-width:2000px) {
    top: 20vh;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    top: 35vh;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
    top: 9vh;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    top:30vh;
  }
`

export default class index extends Component {
  render () {
    return (
      <Bg>
        <Background />
        <Model src='../../static/img/wippo/wippoGame.png' />
        <div className="container">
          <div className="row">
            <Div className="col-12 d-flex justify-content-center align-items-center text-center" onClick={() => this.handleClickIcon()}>
              <a href="http://wip.camp/game" target="_blank">
                <Img alt="Gamecenter" src='../../static/img/gameCenteIcon.png' />
              </a>
            </Div>
          </div>
        </div>
      </Bg>
    )
  }
}
