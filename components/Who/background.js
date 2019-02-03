import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: -1;
  bottom: -10vh;
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
  z-index: 0;
  bottom: 20vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:170%;
    bottom: 7vh;
  }
  @media (min-width:412px) {
    width:140%;
    bottom: 8vh;
  }
  @media (min-width:576px) {
    width:120%;
    bottom: 10vh;
  }
  @media (min-width:1024px) {
    width:100%;
    bottom: 20vh;
  }
`

const TreeLeft = styled.img`
    position : absolute;
    z-index:0;
    bottom: 20vh;
    left : 5vw;
    width:20%;
`
const TreeRight = styled.img`
    position : absolute;
    z-index:0;
    bottom: 15vh;
    right: 10vw;
    width:30%;
`

const TreeMiddle = styled.img`
    position : absolute;
    z-index:0;
    bottom: 15vh;
    right: 50vw;
    width:30%;
`
export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-who/MainWho_all.png' />
        <TreeLeft src = '/static/img/background-who/MainWho_leftsakura.png' />
        <TreeRight src = '/static/img/background-who/MainWho_Rightsakura.png' />
        <TreeMiddle src = '/static/img/background-who/MainWho_midlesakura.png' />
      </div>
    )
  }
}
