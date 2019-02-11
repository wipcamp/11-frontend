import React, { Component } from 'react'
import styled from 'styled-components'

const Hill = styled.img`
  position: absolute;
  z-index: 0;
  width:100%;
  transform: translate(0%,10%);
  @media (min-width:320px) {
    width:100%;
    height: 50%;
    bottom: 34vh;
  }
  @media (min-width:768px) {
    bottom:0;
    left: 0;
    width:120%;
  }
  @media (min-width:1024px) {
    bottom:0;
    left: 0;
    width:100%;
    height:110%;
  }
  @media (min-width:1100px) {
    bottom:0;
    left: 0;
    width:100%;
    height:150%;
  }
  @media (min-width:1500px) {
    bottom:0;
    left: 0;
    height:140%;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    left:0;
    bottom: 0;
    height:75%;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
    left:0;
    bottom: 0;
    height:140%;
  }
  /* @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    left:0;
    bottom: 0;
    height:70%;
  } */
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
      top:33vh;
      right:0;
      left:10vw;
      width:120%;
    }
    @media (min-width:576px) {
      top:25vh;
      width:120%;
    }
    @media (min-width:768px) {
      right:0;
      left:0;
      top:20vh;
    }
    @media (min-width:900px) {
      right:0;
      left:0;
      top:15vh;
    }
    @media (min-width:1024px) {
      top:5vh;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
      top:10vh;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      top:25vh;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      top:28vh;
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
    @media (min-width:768px) {
      margin-bottom:-2em;
      bottom: 0vh;
      left: -15vw;
      z-index: 2;
    }
    @media (min-width:1024px) {
      margin-bottom:-3em;
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
    @media (min-width:768px) {
      z-index: 2;
      bottom: 0vh;
      right: -15vw;
    }
    @media (min-width:1024px) {
      margin-bottom:-1em;
      z-index: 2;
      bottom: 0vh;
      right: -15vw;
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
      height:57%;
      left: -56vw;
      bottom: 1vh;
    }
    @media (min-width:576px) {
      left: -58vw;
    }
    @media (min-width:768px) {
      left:13vw;
      bottom:5vh;
      width:70%;
    }
    @media (min-width:1024px) {
      left:1vw;
      width:90%;
      bottom:5vh;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      left:4vw;
      width:85%;
      bottom:4vh;
    }
`

const RockRight = styled.img`
    position:absolute;
    z-index:1;
    right:0;
    bottom: 0;
    height: 50%;
    transform: translate(0%,0%);
    @media (min-width:320px) {
      z-index:-2;
      bottom: 5vh;
    }
    @media (min-width:768px) {
      bottom: 0;
      z-index:1;
      height: 40%;
    }
    @media (min-width:1024px) {
      height: 50%;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
      height:auto;
      width:40%;
      bottom:0vh;
    }

    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      height:auto;
      width:40%;
      bottom:0vh;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      height:auto;
      width:40%;
      bottom:0vh;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: landscape)  {
      width:40%;
      height:auto;
      bottom:-3.5vh;
    }
`

const RockLeft = styled.img`
    position:absolute;
    z-index: 1;
    left: 0;  
    bottom: 0;    
    height: 50%;
    transform: translate(0%,0%);
    @media (min-width:320px) {
      z-index:-2;
      bottom: 5%;
    }
    @media (min-width:768px) {
      bottom: 0;
      z-index:1;
      height: 40%;
    }
    @media (min-width:1024px) {
      height: 40%;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
      height:auto;
      width:40%;
      bottom:0vh;
    }

    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      height:auto;
      width:40%;
      bottom:0vh;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      height:auto;
      width:40%;
      bottom:0vh;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: landscape)  {
      height:auto;
      width:35%;
      bottom:-1.5vh;
    }
`

const Red =styled.img`
    position:absolute;
    z-index:1;
    top: 0;
    left:50%;
    transform: translate(36.5%,30%);
    @media (min-width:320px) {
      top: 24vh;
      left: 16.5vw;
      width:40%;
    }
    @media (min-width:412px) {
      top:24vh;
    }
    @media (min-width:576px) {
      top: 15vh;
      left:20vw;
      width:35%;
    }
    @media (min-width:768px) {
      top:12vh;
      left:32vw;
      width:20%;
    }
    @media (min-width:1024px) {
      top:0vh;
      left:33vw;
    }
    @media (min-width:1100px) {
      top:2vh;
      left:33vw;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
      top: 1vh;
      left:33vw;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      top: 26vh;
      left:33vw;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      top:25vh;
    }
`

const Dojo = styled.img`
    position:absolute;
    z-index:1;
    top: 0;
    left:50%;
    transform: translate(30%,50%);
    @media (min-width:320px) {
      top: 33vh;
      left: 35.25vw;
      width:20%;
    }
    @media (min-width:410px){
      top: 33vh;
    }
    @media (min-width:576px) {
      top: 28vh;
      left:35vw;
    }
    @media (min-width:768px) {
      top: 28vh;
      left:41.5vw;
      width: 10%;
    }
    @media (min-width:1024px) {
      top: 15vh;
      left:40vw;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
      top: 15vh;
      left:42.5vw;
    }

    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      top: 32vh;
      left:42.5vw;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      top:33vh;
      left:42vw;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: landscape)  {
      top:13vh;
      left:42.5vw;
    } 
`
const FooterBg = styled.div`
  position: absolute;
  z-index: 10;
  min-height: 3vh;
  min-width: 100%;
  background-color: #493A39;
  bottom: 0vh;
`
export default class background extends Component {
  render () {
    return (
      <div className="text-align-center">
        <Hill src='/static/img/background-game/MainGame_floor.png' />
        <Stairs src='/static/img/background-game/MainGame_stairs.png' />
        <RockLeft src='/static/img/background-game/MainGame_rockleft.png' />
        <RockRight src='/static/img/background-game/MainGame_rockright.png' />
        <SakuraRight src='/static/img/background-game/MainGame_sakuraright.png' />
        <SakuraLeft src='/static/img/background-game/MainGame_sakuraleft.png' />
        <SakuraBack src='/static/img/background-game/MainGame_sakuraback.png' />
        <Red src='/static/img/background-game/MainGame_red.png' />
        <Dojo src='/static/img/background-game/MainGame_Dojo.png' />
        <FooterBg className="d-flex justify-content-center align-items-center text-white">
          Created&nbsp;
          &nbsp;by 11 I'm Developer
        </FooterBg>
      </div>
    )
  }
}
