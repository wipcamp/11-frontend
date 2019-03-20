import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 15vh;
  left: 50%;
  transform: translate(-345%,0%);
  height:75%;
  width:15%;
 `
 const Layer2 = styled.img`
 position: absolute;
 z-index: 3;
 bottom: 15vh;
 left: 50%;
 transform: translate(245%,0%);
 height:75%;
 width:15%;
`
const Top = styled.img`
position: absolute;
  z-index: 4;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,-420%);
  height:20vh;
  width:101%;

`
const Floor = styled.img`
position: absolute;
  z-index: 1;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  height:15vh;
  width:100%;

`
const WoodFloor = styled.img`
position: absolute;
  z-index: 0;
  bottom: 10vh;
  left: 50%;
  transform: translate(-50%,0%);
  height:20vh;
  width:205%;

`
const LeftSakura1 = styled.img`
position: absolute;
  z-index: 2;
  bottom: 52vh;
  left: 31%;
  transform: translate(-60%,0%);
  width:30%;

`
const LeftSakura2 = styled.img`
position: absolute;
  z-index: 2;
  bottom: 30vh;
  left: 25%;
  transform: translate(-60%,0%);
  width:20%;

`
const RightSakura = styled.img`
position: absolute;
  z-index: 2;
  bottom: 35vh;
  left: 25%;
  transform: translate(210%,0%);
  width:20%;

`
const LeftDoorShadow = styled.img`
position: absolute;
  z-index: 2;
  bottom: 0vh;
  left: 25%;
  transform: translate(-160%,19%);
  width:20%;

`
const RightDoorShadow = styled.img`
position: absolute;
  z-index: 2;
  bottom: 0vh;
  left: 25%;
  transform: translate(308%,15%);
  width:20%;

`


export default class componentName extends Component {
  render () {
    return (
      <div>
        <Layer1 src='/static/img/announce/door.png' />
        <Layer2 src='/static/img/announce/door.png' />
        <Top src='/static/img/announce/Top.png' />
        
        <Floor src='/static/img/announce/floor.png' />
        <WoodFloor src='/static/img/announce/wood-floor.png' />
        <LeftSakura1 src='/static/img/announce/left-sakura1.png' />
        <LeftSakura2 src='/static/img/announce/left-sakura2.png' />
        <RightSakura src='/static/img/announce/right-sakura.png' />
        <LeftDoorShadow src='/static/img/announce/left--doorshadow.png' />
        <RightDoorShadow src='/static/img/announce/right-doorshadow.png' />

     </div>
    )
  }
}