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
const Buildy = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width:320px) {
    width:170%;
  }
  @media (min-width:412px) {
    width:160%;
  }
  @media (min-width:576px) {
    width:140%;
  }
  @media (min-width:768px) {
    width:130%;
  }
  @media (min-width:1024px) {
    width:100%;
  }
`

const RightCloudy = styled.img`
  position : absolute;
  z-index:0;
  bottom: 70vh;
  right: 10vw;
  width:10%;
  @media (min-width:320px) {
    right:5vh;
    bottom: 90vh;
    width:25%;
  }
  @media (min-width:576px) {
    right:5vh;
    bottom: 80vh;
    width:20%;
  }
  @media (min-width:1024px) {
    bottom: 70vh;
    width:15%;
  }
`

const LeftCloudy = styled.img`
  position : absolute;
  z-index:0;
  bottom: 80vh;
  left: 15vw;
  width:10%;
  @media (min-width:320px) {
    left:5vh;
    bottom: 85vh;
    width:25%;
  }
  @media (min-width:576px) {
    left:5vh;
    bottom: 60vh;
    width:20%;
  }
  @media (min-width:1024px) {
    bottom: 70vh;
    width:15%;
  }
`


export default class background extends Component {
  render () {
    return (
      <div className = "text-align-center">
        <Layer1 src = '/static/img/background-FAQs/Moutain.png' />
        <Buildy src = '/static/img/background-FAQs/FAQ Front.png' />
        <RightCloudy src = '/static/img/background-FAQs/Cloud.png' />
        <LeftCloudy src = '/static/img/background-when/MainWhen_RightCloudFull.png' />
      </div>
    )
  }
}
