import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: 0;
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
    height:40vh;
  }
  
`
const Layer2 = styled.img`
  position: absolute;
  z-index: 0;
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
    height:30vh;
    
  }
  
`
const RockLeft = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-153%,0%);
  width:100%;

  @media (min-width:320px) {
    width:40%;
    bottom:8vh;
  }
  @media (min-width:412px) {
    width:40%;
    bottom:8vh;
  }
  
  @media (min-width:768px) {
    width:40%;
    bottom:9vh;
  }
  @media (min-width:1024px) {
    width:33%;
    bottom: 6vh;
  }

`
const RockRight = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(43%,0%);
  width:100%;

  @media (min-width:320px) {
    width:40%;
    bottom:9vh;
  }
  @media (min-width:412px) {
    width:40%;
    bottom:8vh;
  }
  @media (min-width:768px) {
    width:40%;
    bottom:10vh;
  }
  @media (min-width:1024px) {
    width:35%;
    bottom: 8vh;
  }
`
const Road = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-60%,0%);
  width:100%;

  @media (min-width:320px) {
    width:25%;
    bottom:17vh;
  }

  @media (min-width:768px) {
    width:20%;
  }
  @media (min-width:1024px) {
    width:18%;
    bottom:10vh;
    
  }
`

const Tree = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:240%;
    bottom:18vh;
  }
  @media (min-width:412px) {
    width:210%;
    bottom:20vh;
  }
  @media (min-width:576px) {
    width:180%;
    bottom:30vh;
  }
  @media (min-width:768px) {
    width:120%;
    bottom:25vh;
  }
  @media (min-width:1024px) {
    bottom : 30vh;
    width:100%;
    }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    bottom: 25vh;
    width:100%;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
    bottom: 25vh;
    width:100%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    bottom: 0;
    width:70%;
  }
`
export default class componentName extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Road src = 'static/img/background-what/road.png'/>
        <Tree src = 'static/img/background-what/sakuratreeEdited3.png'/>
        <Layer2 src = 'static/img/background-what/floor.png'/>
        <RockLeft src = 'static/img/background-what/newRockLeft.png'/>
        <RockRight src = 'static/img/background-what/newRockRight.png'/>
        <Layer1 src = 'static/img/background-what/Bridge.png'/>
        
      </div>

    )
  }
}
