import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  height:15vh;
  width:100%;

  @media (min-width:412px) {
    height:20vh;
    width:150%;
  }
  @media (min-width:576px) {
    height:20vh;
    width:140%;
  }
  @media (min-width:768px) {
    height:15vh;
    width:130%;
  }
  @media (min-width:1024px) {
    height:15vh;
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
const Sakura = styled.img`
  position: absolute;
  z-index: 0;
  top: 0vh;
  width: 220%;
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

const BGTop = styled.img`
  position: absolute;
  z-index: 0;
  top: 0vh;
  width: 200%;
  left: 50%;
  transform: translate(-50%,0%);

  @media (min-width:412px) {
    height:20vh;
  }
  @media (min-width:576px) {
    height:23vh;
  }
  @media (min-width:768px) {
    height:25vh;
  }
  @media (min-width:1024px) {
    height:27vh;
  }
`

export const SponHeadBox = styled.div`
  background-image:url('/static/img/background-sponsor/header_forward.png');
  background-repeat:no-repeat;
  background-position: center center;
  background-size: cover;
`

export const SponTab = styled.div`
  background-image:url('/static/img/background-sponsor/header_forward1.png');
  background-size:cover;
  background-position: center center;

  @media (min-width:320px) {
    margin: 0.5em 0em 0em;
  }
  @media (min-width:412px) {
    
  }
  @media (min-width:576px) {
    margin: 1em 1em 0em;
  }
  @media (min-width:768px) {
    margin: 1.5em 2em 0em;
  }
  @media (min-width:912px) {
    margin: 2em 2em 0em;
  }
  @media (min-width:1024px) {
    margin: 3em 2em 0em;
  }
  @media(min-width:1366px){
    margin: 3em 2em 0em;
  }
`

const LeftSword = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 5vh;
  width:30%;
  
  @media (min-width:320px) {
    left:8vh;
    bottom: 2vh;
    width:30%;
  }
  @media (min-width:412px) {
    left:8vh;
    bottom: 4vh;
    width:27%;
  }
  @media (min-width:576px) {
    left:12vh;
    bottom: 2vh;
    width:25%;
  }
  @media (min-width:768px) {
    left:15vh;
    bottom: 2vh;
    width:22%;
  }
  @media (min-width:1024px) {
    left:20vh;
    bottom: 2vh;
    width:20%;
  }

`
const RightSword = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  right: 5vh;
  width:30%;
  
  @media (min-width:320px) {
    right:8vh;
    bottom: 2vh;
    width:30%;
  }
  @media (min-width:412px) {
    right:8vh;
    bottom: 4vh;
    width:27%;
  }
  @media (min-width:576px) {
    right:12vh;
    bottom: 2vh;
    width:25%;
  }
  @media (min-width:768px) {
    right:15vh;
    bottom: 2vh;
    width:22%;
  }
  @media (min-width:1024px) {
    right:20vh;
    bottom: 2vh;
    width:20%;
  }
`

const LeftDoor = styled.img`
  position: absolute;
  z-index: -10;
  bottom: 9vh;
  left: 0vh;
  
  @media (min-width:320px) {
    bottom:10vh;
    left: -30vh;
    height:80vh;
  }
  @media (min-width:412px) {
    bottom:19vh;
    left: -25vh;
    height:70vh;
  }
  @media (min-width:576px) {

  }
  @media (min-width:768px) {
    bottom:14vh;
    left: -20vh;
  }
  @media (min-width:912px) {
    left:-10vh;
  }
  @media (min-width:1024px) {
    left:-5vh;
  }
  @media(min-width:1366px){
    left:0vh;
    height:70vh;
  }
`

const RightDoor = styled.img`
  position: absolute;
  z-index: -10;
  bottom: 9vh;
  right: 0vh;

  @media (min-width:320px) {
    bottom:10vh;
    right: -30vh;
    height:80vh;
  }
  @media (min-width:412px) {
    bottom:19vh;
    right: -25vh;
    height:70vh;
  }
  @media (min-width:576px) {

  }
  @media (min-width:768px) {
    bottom:14vh;
    right: -20vh;
  }
  @media (min-width:912px) {
    right:-10vh;
  }
  @media (min-width:1024px) {
    right:-5vh;
  }
  @media(min-width:1366px){
    right:0vh;
    height:70vh;
  }
`

export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-sponsor/floor.png' />
        <LeftDoor src = '/static/img/background-sponsor/door_left.png' />
        <RightDoor src = '/static/img/background-sponsor/door_right.png' />
        <BGTop src = '/static/img/background-sponsor/header_background.png' />
        <Sakura src = '/static/img/background-sponsor/sakura.png' />
        <LeftSword src = '/static/img/background-sponsor/sword_left.png' />
        <RightSword src = '/static/img/background-sponsor/sword_right.png' />
      </div>
    )
  }
}
