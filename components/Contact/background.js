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
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:150%;
  }
  @media (min-width:412px) {
    width:140%;
    bottom: 4vh;
  }
  @media (min-width:576px) {
    width:130%;
  }
  @media (min-width:768px) {
    width:120%;
    bottom: 7vh;
  }
  @media (min-width:1024px) {
    width:100%;
    bottom: 8vh;
  }
`

const LeftBuildy = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 35vh;
  left: 0vh;
  width:35%;
  
  @media (min-width:320px) {
    left:-20vh;
    bottom: 10vh;
    width:65%;
  }
  @media (min-width:412px) {
    left:-30vh;
    bottom: 10vh;
    width:80%;
  }
  @media (min-width:576px) {
    left:-20vh;
    bottom: 20vh;
    width:60%;
  }
  @media (min-width:768px) {
    left:-5vh;
    bottom: 20vh;
    width:40%;
  }
  @media (min-width:1024px) {
    bottom: 27vh;
    width:35%;
  }

`
const RightBuildy = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 35vh;
  right: 0vh;
  width:35%;

  @media (min-width:320px) {
    right:-20vh;
    bottom: 10vh;
    width:65%;
  }
  @media (min-width:412px) {
    right:-30vh;
    bottom: 10vh;
    width:80%;
  }
  @media (min-width:576px) {
    right:-20vh;
    bottom: 20vh;
    width:60%;
  }
  @media (min-width:768px) {
    right:-5vh;
    bottom: 20vh;
    width:40%;
  }
  @media (min-width:1024px) {
    bottom: 27vh;
    width:35%;
  }
`

const LeftTree = styled.img`
  position : absolute;
  z-index:0;
  bottom: 0vh;
  left : 0vw;
  width:25%;

  @media (min-width:320px) {
    left:-20vh;
    width:65%;
  }
  @media (min-width:412px) {
    left:-20vh;
    width:80%;
  }
  @media (min-width:576px) {
    left:-10vh;
    width:60%;
  }
  @media (min-width:768px) {
    left:0vh;
    width:40%;
  }
  @media (min-width:1024px) {
    width:35%;
  }
`
const RightTree = styled.img`
  position : absolute;
  z-index:0;
  bottom: 0vh;
  right: 0vw;
  width:30%;

  @media (min-width:320px) {
    right:0vh;
    width:15%;
  }
  @media (min-width:412px) {
    right:0vh;
    width:20%;
  }
  @media (min-width:576px) {
    right:-15vh;
    width:20%;
  }
  @media (min-width:768px) {
    right:-10vh;
    width:15%;
  }
  @media (min-width:1024px) {
    width:20%;
  }
`

const Tree = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 10vh;
  left: 40%;
  transform: translate(-50%,0%);
  width:20%;

  @media (min-width:320px) {
    width:10%;
    bottom:0vh;
  }
  @media (min-width:412px) {
    width:10%;
    bottom:0vh;
  }
  @media (min-width:576px) {
    width:10%;
    bottom:5vh;
  }
  @media (min-width:768px) {
    width:20%;
    bottom:7vh;
  }
  @media (min-width:1024px) {
    bottom : 10vh;
    width:10%;
  }
`

const RightCloudy = styled.img`
  position : absolute;
  z-index:0;
  bottom: 70vh;
  right: 10vw;
  width:10%;
`

const LeftCloudy = styled.img`
  position : absolute;
  z-index:0;
  bottom: 80vh;
  left: 15vw;
  width:10%;
`
const Pinky = styled.img`
  position: absolute;
  z-index: -3;
  bottom: 20vh;
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
    bottom: 10vh;
  }
`

export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer2 src = '/static/img/background-contact/MainContact_BackLand.png' />
        <Layer1 src = '/static/img/background-contact/MainContact_MiddleLand.png' />
        <Layer1 src = '/static/img/background-contact/MainContact_FrontLand.png' />
        <RightTree src = '/static/img/background-contact/MainContact_Secondtree.png' />
        <LeftTree src = '/static/img/background-contact/MainContact_FirstTree.png' />
        <RightCloudy src = '/static/img/background-contact/MainContact_BigCloud.png' />
        <LeftCloudy src = '/static/img/background-contact/MainContact_SmallCloud.png' />
        <Pinky src = '/static/img/background-contact/MainContact_blueMountains.png' />
        <Tree src = '/static/img/background-contact/MainContact_ThirdTree.png' />
      </div>
    )
  }
}
