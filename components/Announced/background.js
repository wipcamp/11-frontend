import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%,0%);
  height:95vh;
  width:100%;
 `
const Floor = styled.img`
position: absolute;
  z-index: -2;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  height:20vh;
  width:100%;

`
const WoodFloor = styled.img`
position: absolute;
  z-index: -3;
  bottom: 15vh;
  left: 50%;
  transform: translate(-50%,0%);
  height:20vh;
  width:125%;

`
const LeftSakura1 = styled.img`
position: absolute;
  z-index: -1;
  bottom: 55vh;
  left: 31%;
  transform: translate(-50%,0%);
  width:30%;

`
const LeftSakura2 = styled.img`
position: absolute;
  z-index: -1;
  bottom: 35vh;
  left: 25%;
  transform: translate(-50%,0%);
  width:20%;

`
const RightSakura = styled.img`
position: absolute;
  z-index: -1;
  bottom: 38vh;
  left: 25%;
  transform: translate(200%,0%);
  width:20%;

`
const LeftDoorShadow = styled.img`
position: absolute;
  z-index: -1;
  bottom: 0vh;
  left: 25%;
  transform: translate(-140%,0%);
  width:20%;

`
const RightDoorShadow = styled.img`
position: absolute;
  z-index: -1;
  bottom: 0vh;
  left: 25%;
  transform: translate(290%,0%);
  width:20%;

`

export default class componentName extends Component {
  render () {
    return (
      <div>
        <Layer1 src = '/static/img/announce/door.png' />
        <Floor src = '/static/img/announce/floor.png' />
        <WoodFloor src = '/static/img/announce/wood-floor.png' />
        <LeftSakura1 src = '/static/img/announce/left-sakura1.png' />
        <LeftSakura2 src = '/static/img/announce/left-sakura2.png' />
        <RightSakura src = '/static/img/announce/right-sakura.png' />
        <LeftDoorShadow src = '/static/img/announce/left--doorshadow.png' />
        <RightDoorShadow src = '/static/img/announce/right-doorshadow.png' />

  
      </div>
    )
  }
}