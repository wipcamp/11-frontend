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

const CloudyLeft = styled.img`
    position : absolute;
    z-index:0;
    bottom: 75vh;
    left : 0vw;
    width:20%;
`
const CloudyRight = styled.img`
    position : absolute;
    z-index:0;
    bottom: 50vh;
    right: 0vw;
    width:30%;
`
export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-where/MainWhere_WallAndBuildings.png' />
        <Layer1 src = '/static/img/background-where/MainWhere_Front.png' />
        <Pinky src = '/static/img/background-where/MainWhere_PinkMountains.png' />
        <CloudyLeft src = '/static/img/background-where/MainWhere_FullLeftCloud.png' />
        <CloudyRight src = '/static/img/background-where/MainWhere_FullRightCloud.png' />
      </div>
    )
  }
}
