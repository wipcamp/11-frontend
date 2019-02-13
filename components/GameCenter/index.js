import React, { Component } from 'react'
import styled from 'styled-components'
import Headline from '../Core/Texts'

const Bg = styled.div`
  height: 100vh;
  position: relative;
  background : #F8E9D6;
  z-index:100;
`
const LogoDiv = styled.div`
  z-index : 2;
  
`
const Logo1 = styled.img`
  width:70%;
  margin-top:10vh;
  

`
const Logo2 = styled.img`
  width:70%;
  

  
`
const Logo3 = styled.img`
  width:70%;
  margin-top:10vh;
  
  
`

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
    bottom:-10vh;
  }
`

export default class index extends Component {
  render () {
    return (
      <Bg>
        <div className="text-align-center">
          <h1><Headline className="pt-5">Game Center</Headline></h1>
          <Layer1 src="../../static/img/game-center/MainGameCenter_BackLand.png" />
          <Layer1 src="../../static/img/game-center/MainGameCenter_FrontLand.png" />
          <Layer1 src="../../static/img/game-center/MainGameCenter_MiddleLand.png" />
          <Layer1 src="../../static/img/game-center/MainGameCenter_FrontLandWithTree.png"/> 
          
          <div className="row">
            <div className="col-md-2">
            </div>
            <LogoDiv className="col-6 col-md-3">
              <Logo1 src="../../static/img/game-center/gameWoodLogo1.png" />
            </LogoDiv>
            <LogoDiv className="col-6 col-md-3">
              <Logo2 src="../../static/img/game-center/gameWoodLogo2.png" />
            </LogoDiv>
            <LogoDiv className="col-6 col-md-3">
              <Logo3 src="../../static/img/game-center/gameWoodLogo3.png" />
            </LogoDiv>
          </div>
        </div>

      </Bg >
    )
  }
}
