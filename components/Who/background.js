import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);

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
    width:100%;
  }
  @media (min-width:1024px) {
    width:100%;
  }
`
const Pinky = styled.img`
  position: absolute;
  z-index: -2;
  bottom: 10vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:170%;
    bottom: 4vh;
  }
  @media (min-width:412px) {
    width:140%;
    bottom: 5vh;
  }
  @media (min-width:576px) {
    width:120%;
    bottom: 7vh;
  }
  @media (min-width:1024px) {
    width:100%;
    bottom: 5vh;
  }
`

const Home = styled.img`
  position : absolute;
  z-index:0;
  bottom: 10vh;
  right: 5vw;
  width:30%;
`

const TreeLeft = styled.img`
    position : absolute;
    z-index:0;
    bottom: 7.5vh;
    left : 0vw;
    width:20%;
`
const TreeRight = styled.img`
    position : absolute;
    z-index:0;
    bottom: 2vh;
    right: -10vw;
    width:30%;
`

const TreeMiddle = styled.img`
    position : absolute;
    z-index:0;
    bottom: 0vh;
    right: 35vw;
    width:20%;
`
export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-who/MainWho_floor.png' />
        <Pinky src = '/static/img/background-who/MainWho_mount.png' />
        <TreeLeft src = '/static/img/background-who/MainWho_leftsakura.png' />
        <TreeRight src = '/static/img/background-who/MainWho_Rightsakura.png' />
        <TreeMiddle src = '/static/img/background-who/MainWho_midlesakura.png' />
        <Home src = '/static/img/background-who/MainWho_Dojo.png' />
      </div>
    )
  }
}
