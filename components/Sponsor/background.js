import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;
`
const Flower = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 50%;
  transform: translate(-50%,0%);

  @media (min-width:412px) {
    top: 0vh;
    width:180%;
  }
  @media (min-width:576px) {
    width:150%;
  }
  @media (min-width:768px) {
    top: -5vh;
    width:140%;
  }
  @media (min-width:1024px) {
    top: -7.5vh;
    width:100%;
  }
`
const Top = styled.img`
  position: absolute;
  z-index: 0;
  top: 12vh;
  width: 220%;
  left: 50%;
  transform: translate(-50%,0%);

  @media (min-width:412px) {
    width:180%;
    top: 7.5vh;
  }
  @media (min-width:576px) {
    width:150%;
    top: 6.5vh;
  }
  @media (min-width:768px) {
    width:140%;
    top: 6.5vh;
  }
  @media (min-width:1024px) {
    width:100%;
    top: 0vh;
  }
`

const BGTop = styled.img`
  position: absolute;
  z-index: 0;
  top: 0vh;
  width: 200%;
  left: 50%;
  transform: translate(-50%,0%);

  @media (min-width:412px) {
    width:180%;
  }
  @media (min-width:576px) {
    width:150%;
  }
  @media (min-width:768px) {
    width:140%;
  }
  @media (min-width:1024px) {
    width:100%;
  }
`
const LeftBuildy = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 0vh;
  width:35%;
  
  @media (min-width:320px) {
    left:-20vh;
    bottom: 10vh;
    width:65%;
  }
  @media (min-width:412px) {
    left:-30vh;
    bottom: 10vh;
    width:80%;
  }
  @media (min-width:576px) {
    left:-20vh;
    bottom: 20vh;
    width:60%;
  }
  @media (min-width:768px) {
    left:-5vh;
    bottom: 20vh;
    width:40%;
  }
  @media (min-width:1024px) {
    bottom: 0vh;
    width:35%;
  }

`
const RightBuildy = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  right: 0vh;
  width:35%;

  @media (min-width:320px) {
    right:-20vh;
    bottom: 10vh;
    width:65%;
  }
  @media (min-width:412px) {
    right:-30vh;
    bottom: 10vh;
    width:80%;
  }
  @media (min-width:576px) {
    right:-20vh;
    bottom: 20vh;
    width:60%;
  }
  @media (min-width:768px) {
    right:-5vh;
    bottom: 20vh;
    width:40%;
  }
  @media (min-width:1024px) {
    bottom: 27vh;
    width:35%;
  }
`

const LeftTree = styled.img`
  position : absolute;
  z-index:2;
  bottom: 0vh;
  left : 0vw;
  width:25%;
`
const RightTree = styled.img`
  position : absolute;
  z-index:2;
  bottom: 0vh;
  right: 0vw;
  width:30%;
`

const Door = styled.img`
  position: absolute;
  z-index: 2;
  bottom: 10vh;
  left: 50%;
  transform: translate(-50%,0%);

  @media (min-width:320px) {
    height:80vh;
  }
  @media (min-width:412px) {
    height:50vh;
  }
  @media (min-width:576px) {
    height:50vh;
  }
  @media (min-width:768px) {
    height:40vh;
  }
  @media (min-width:1024px) {
    height:60vh;
  }
`

export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-sponsor/d1.png' />
        <Door src = '/static/img/background-sponsor/door.png' />
        <BGTop src = '/static/img/background-sponsor/header_background.png' />
      </div>
    )
  }
}
