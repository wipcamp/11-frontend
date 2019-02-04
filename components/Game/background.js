import React, { Component } from 'react'
import styled from 'styled-components'

const Floor = styled.img`
  position: absolute;
  z-index: 0;
  width:100%;
  transform: translate(0%,10%);
  @media (min-width:320px) {
    width:100%;
    bottom: 34vh;
  }
  @media (min-width:412px) {
  }
  @media (min-width:576px) {
  }
  @media (min-width:768px) {
  }
  @media (min-width:1024px) {
    bottom:0;
    left: 0;
    width:100%;
  }
`

const SakuraBack = styled.img`
  position: absolute;
  z-index: -1;
  width:120%;
  transform: translate(-10%,15%);
  @media (min-width:320px) {
      top:30vh;
      width:200%;
    }
    @media (min-width:412px) {
      top:30%;
      width:100%;
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      right:0;
      left:0;
      top:10vh;
      width:120%;
    }
`

const SakuraLeft = styled.img`
  position : absolute;
  z-index:2;
  width: 48%;
    @media (min-width:320px) {
      z-index:-3;
      bottom: 5vh;
    }
    @media (min-width:412px) {
      z-index:-3;
      bottom: 5%;
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      margin-bottom:-2em;
      bottom: 0vh;
      left: -15vw;
      z-index: 2;
    }

`
const SakuraRight = styled.img`
  position : absolute;
  z-index:2;
  width: 52%;
    @media (min-width:320px) {
      z-index:-3;
      bottom: 1vh;
    }
    @media (min-width:412px) {
      z-index:-3;
      bottom: 1vh;
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      bottom: 0vh;
      right: -15vw;
      z-index: 2;
    }
`

const Stairs = styled.img`
    background-repeat:no-repeat;
    position : absolute;
    z-index:1;
    width:70%;
    transform: translate(9%,0%);
    @media (min-width:320px) {
      width:200%;
      height:55%;
      left: -62vw;
      bottom: 1vh;
    }
    @media (min-width:412px) {
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      left:10%;
      bottom:5%;
      width:70%;
    }
`

const RockRight = styled.img`
    position:absolute;
    z-index:1;
    height: 50%;
    transform: translate(0%,0%);
    @media (min-width:320px) {
      z-index:-2;
      bottom: 5vh;
    }
    @media (min-width:412px) {
      z-index:-2;
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      bottom: 0;
      right: 0;
      z-index:1;
      height: 50%;
    }
`

const RockLeft = styled.img`
    position:absolute;
    z-index: 1;
    height: 50%;
    transform: translate(0%,0%);
    @media (min-width:320px) {
      z-index:-2;
      bottom: 5%;
    }
    @media (min-width:412px) {
      z-index:-2;
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      bottom: 0;
      left: 0;      
      z-index:1;
      height: 50%;
    }
`

const Red =styled.img`
    position:absolute;
    z-index:1;
    transform: translate(36.5%,30%);
    @media (min-width:320px) {
      top: 22vh;
      left: 10vw;
      width:40%;
    }
    @media (min-width:412px) {
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      top:0vh;
      left:52vh;
      width:20%;
    }
`

const Dojo = styled.img`
    position:absolute;
    z-index:1;
    transform: translate(30%,50%);
    @media (min-width:320px) {
      top: 33.5vh;
      left: 29vw;
      width:20%;
    }
    @media (min-width:412px) {
    }
    @media (min-width:576px) {
    }
    @media (min-width:768px) {
    }
    @media (min-width:1024px) {
      top: 20vh;
      left:40vw;
      width: 10%;
    }
`
export default class background extends Component {
  render () {
    return (
      <div className="text-align-center">
        <Floor src='/static/img/background-game/MainGame_floor.png' />
        <Stairs src='/static/img/background-game/MainGame_stairs.png' />
        <RockLeft src='/static/img/background-game/MainGame_rockleft.png' />
        <RockRight src='/static/img/background-game/MainGame_rockright.png' />
        <SakuraRight src='/static/img/background-game/MainGame_sakuraright.png' />
        <SakuraLeft src='/static/img/background-game/MainGame_sakuraleft.png' />
        <SakuraBack src='/static/img/background-game/MainGame_sakuraback.png' />
        <Red src='/static/img/background-game/MainGame_red.png' />
        <Dojo src='/static/img/background-game/MainGame_Dojo.png' />
      </div>
    )
  }
}
