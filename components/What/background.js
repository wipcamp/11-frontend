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
    bottom:0vh;
  }
`
const Rock = styled.img`
  position: absolute;
  z-index: 0;
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
    bottom:12vh;
  }
  @media (min-width:576px) {
    width:130%;
    bottom:18vh;
  }
  @media (min-width:768px) {
    width:120%;
    bottom:20vh;
  }
  @media (min-width:1024px) {
    width:100%;
    bottom: 10vh;
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
    width:20%;
    bottom:20vh;
  }

  @media (min-width:576px) {
    width:20%;
  }
  @media (min-width:768px) {
    width:20%;
  }
  @media (min-width:1024px) {
    width:18%;
  }
`
const Sakura1 = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:150%;
    bottom : 19vh;

  }
  @media (min-width:412px) {
    width:150%;
    bottom :22vh;
  }
  @media (min-width:576px) {
    width:150%;
    bottom:28vh;
  }
  @media (min-width:768px) {
    width:150%;
    bottom:33vh;
  }
  @media (min-width:1024px) {
    bottom : 13vh;
    width:150%;
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
    bottom:20vh;
  }
  @media (min-width:412px) {
    width:210%;
    bottom:25vh;
  }
  @media (min-width:576px) {
    width:180%;
    bottom:30vh;
  }
  @media (min-width:768px) {
    width:120%;
    bottom:37vh;
  }
  @media (min-width:1024px) {
    bottom : 22vh;
    width:110%;
  }
`
const Sakura2 = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:200%;
    bottom:25vh;
  }
  @media (min-width:412px) {
    width:180%;
    bottom:30vh;
  }
  @media (min-width:576px) {
    width:160%;
    bottom:35vh;
  }
  @media (min-width:768px) {
    width:140%;
    bottom:40vh;
  }
  @media (min-width:1024px) {
    bottom : 25vh;
    width:110%;
  }
`


export default class componentName extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Sakura1 src = 'static/img/background-what/SakuraBack.png'/>
        <Sakura2 src = 'static/img/background-what/SakuraFront.png'/>
        <Tree src = 'static/img/background-what/TreeFront.png'/>
        <Tree src = 'static/img/background-what/TreeBack.png'/>
        <Layer2 src = 'static/img/background-what/floor.png'/>
        <Rock src = 'static/img/background-what/rock.png'/>
        <Road src = 'static/img/background-what/road.png'/>
        <Sakura2 src = 'static/img/background-what/SakuraFront.png'/>
        <Layer1 src = 'static/img/background-what/Bridge.png'/>
        
      </div>

    )
  }
}
