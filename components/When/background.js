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
  z-index:2;
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
  z-index:2;
  bottom: 0vh;
  right: 0vw;
  width:30%;

  @media (min-width:320px) {
    right:-20vh;
    width:65%;
  }
  @media (min-width:412px) {
    right:-20vh;
    width:80%;
  }
  @media (min-width:576px) {
    right:-20vh;
    width:60%;
  }
  @media (min-width:768px) {
    right:-10vh;
    width:40%;
  }
  @media (min-width:1024px) {
    width:35%;
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


export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-when/MainWhen_Mountains.png' />
        <LeftTree src = '/static/img/background-when/MainWhen_LeftTreeAndBags.png' />
        <RightTree src = '/static/img/background-when/MainWhen_RightTreeAndSwords.png' />
        <RightCloudy src = '/static/img/background-when/MainWhen_RightCloudFull.png' />
        <LeftCloudy src = '/static/img/background-when/MainWhen_LeftCloud.png' />
      </div>
    )
  }
}
