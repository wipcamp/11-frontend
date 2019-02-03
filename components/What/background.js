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
    width:105%;
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
    bottom: 22vh;
  }
`
const Road = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 20vh;
  left: 50%;
  transform: translate(-55%,0%);
  width:100%;

  @media (min-width:320px) {
    width:20%;
  }
  @media (min-width:412px) {
    width:20%;
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
    width:20%;
  }
  @media (min-width:412px) {
    width:20%;
  }
  @media (min-width:576px) {
    width:20%;
  }
  @media (min-width:768px) {
    width:20%;
  }
  @media (min-width:1024px) {
    bottom : 45vh;
    width:100%;
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
    width:20%;
  }
  @media (min-width:412px) {
    width:20%;
  }
  @media (min-width:576px) {
    width:20%;
  }
  @media (min-width:768px) {
    width:20%;
  }
  @media (min-width:1024px) {
    bottom : 50vh;
    width:100%;
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
    width:20%;
  }
  @media (min-width:412px) {
    width:20%;
  }
  @media (min-width:576px) {
    width:20%;
  }
  @media (min-width:768px) {
    width:20%;
  }
  @media (min-width:1024px) {
    bottom : 50vh;
    width:100%;
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
        <Sakura2 src = 'static/img/background-what/SakuraFront.png'/>
        <Layer2 src = 'static/img/background-what/floor.png'/>
       
        <Rock src = 'static/img/background-what/rock.png'/>
        <Road src = 'static/img/background-what/road.png'/>
        

        <Layer1 src = 'static/img/background-what/Bridge.png'/>
        
      </div>

    )
  }
}
