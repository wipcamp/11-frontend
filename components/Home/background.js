import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:150%;
  }
  @media (min-width:412px) {
    width:140%;
  }
  @media (min-width:576px) {
    width:130%;
  }
  @media (min-width:768px) {
    width:120%;
  }
  @media (min-width:1024px) {
    width:100%;
  }
`
const LeftBuildy = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 35vh;
  left: 0vh;
  width:35%;
  
  @media (min-width:320px) {
    transform: translate(-20%,-10%);
    bottom: 10vh;
    width:65%;
  }
  @media (min-width:412px) {
    transform: translate(-20%,-10%);
      width:60%;
  }
  @media (min-width:576px) {
    left:-20vh;
    
    width:60%;
  }
  @media (min-width:768px) {
    transform: translate(60%,10%);
    width:40%;
    bottom: 25vh;
  }
  @media (min-width:1024px) {
    transform: translate(40%,-20%);
    bottom: 10vh;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(10%,10%);
    bottom: 0;
    width:70%;
  }
 

`
const RightBuildy = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 35vh;
  right: 0vh;
  width:35%;

  @media (min-width:320px) {
    transform: translate(20%,-10%);
    bottom: 10vh;
    width:65%;
  }
  @media (min-width:412px) {
    transform: translate(20%,-10%);
    bottom: 10vh;
    width:60%;
  }
  @media (min-width:576px) {
    right:-20vh;
    width:60%;
  }
  @media (min-width:768px) {
    transform: translate(-60%,10%);
    width:40%;
    bottom: 25vh;
  }
  @media (min-width:1024px) {
    transform: translate(-40%,-20%);
    bottom: 10vh;
  }

`

const LeftTree = styled.img`
  position : absolute;
  z-index:2;
  bottom: 0vh;
  left : 0vw;
  width:30%;

  @media (min-width:320px) {
    width:65%;
  }
  @media (min-width:412px) {
    width:65%;
    left : -10vw;
  }
  @media (min-width:576px) {
    width:55%;
    left : -7vw;
  }
  @media (min-width:768px) {
    width:35%;
    left : -2vw;
  }
  @media (min-width:1024px) {
    width:40%;
    left: 0vw;
  }
`
const RightTree = styled.img`
  position : absolute;
  z-index:2;
  bottom: 0vh;
  right: 0vw;
  width:25%;

  @media (min-width:320px) {
    width:40%;
  }
  @media (min-width:412px) {
    width:40%;
    right: -7vw;
  }
  @media (min-width:576px) {
    width:35%;
    right: -4vw;
  }
  @media (min-width:768px) {
    width:30%;
    right: -2vw;
  }
  @media (min-width:1024px) {
    width:25%;
    right: 0vw;
  }
`

const Mount = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:150%;
    bottom:10vh;
  }
  @media (min-width:412px) {
    width:140%;
  }
  @media (min-width:576px) {
    width:130%;
  }
  @media (min-width:768px) {
    width:120%;
    bottom: 5vh;
  }
  @media (min-width:1024px) {
    width:100%;
    bottom: 0vh;
    
  }
`
const LeftCloudy = styled.img`
    position : absolute;
    z-index:0;
    bottom: 75vh;
    left : 0vw;
    width:20%;
`
const RightCloudy = styled.img`
    position : absolute;
    z-index:-2;
    bottom: 70vh;
    right: 0vw;
    width:30%;
`

export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-home/MainHome_Wall.png' />
        <LeftBuildy src = '/static/img/background-home/MainHome_LeftBuildings.png' />
        <RightBuildy src = '/static/img/background-home/MainHome_RightBuildings.png' />
        <LeftTree src = '/static/img/background-home/MainHome_LeftTree.png' />
        <RightTree src = '/static/img/background-home/MainHome_RightTree.png' />
        <Mount src = '/static/img/background-home/MainHome_Mountains.png' />
        <RightCloudy src = '/static/img/background-FAQs/Cloud.png' />
        <LeftCloudy src = '/static/img/background-when/MainWhen_RightCloudFull.png' />
      </div>
    )
  }
}
