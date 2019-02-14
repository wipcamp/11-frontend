import React, { Component } from 'react'
import styled from 'styled-components'
import Headline from '../Core/Texts'

const Bg = styled.div`
  height: 100vh;
  position: relative;
  background : #F8E9D6;
  z-index:100;
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

const BgImage = [
  '../../static/img/game-center/MainGameCenter_BackLand.png',
  '../../static/img/game-center/MainGameCenter_FrontLand.png',
  '../../static/img/game-center/MainGameCenter_MiddleLand.png',
  '../../static/img/game-center/MainGameCenter_FrontLandWithTree.png'
]

const BackgroundGameCenter = () => (
  <div>
    {
      BgImage.map((data, i) => (
        <Layer1 src = {data} />
      ))}
  </div>
)

const LogoGame = styled.img`
  position: relative;
  width: 70%;
  z-index: 2;

  @media (min-width:320px) {
    width:100%;
  }
  @media (min-width:412px) {
    width:90%;
  }
  @media (min-width:576px) {
    width:100%;
  }
  @media (min-width:768px) {
    width:80%;
  }
  @media (min-width:1024px) {
    width:70%;
  }
`

const Mini = styled.div`
  display:none;
  width:100%;
  background-color: #F8E9D6;
  top:10vh;
  @media(max-width:768px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`

const Center = styled.div`
  text-align:center;!important
`

const SmallSize = () => (
  <Mini>
    <div className="row">
      <div className = "col-12">
        <LogoGame src="../../static/img/game-center/gameWoodLogo2.png" />
      </div>
    </div>
    <div className = "row">
      <div className = "col-6 mt-2">
        <LogoGame src="../../static/img/game-center/gameWoodLogo1.png" />
      </div>
      <div className = "col-6 mt-2">
        <LogoGame src="../../static/img/game-center/gameWoodLogo3.png" />
      </div>
    </div>
  </Mini>
)
const BigSize = () => (
  <div className="row">
    <Center className = "col-4 mt-5">
      <LogoGame src="../../static/img/game-center/gameWoodLogo1.png" />
    </Center>
    <Center className = "col-4">
      <LogoGame src="../../static/img/game-center/gameWoodLogo2.png" />
    </Center>
    <Center className = "col-4 mt-5">
      <LogoGame src="../../static/img/game-center/gameWoodLogo3.png" />
    </Center>
  </div>
)

const MSize = styled.div`
  @media(max-width:768px){
    display:none;
  }
`

export default class index extends Component {
  render () {
    return (
      <Bg>
        <BackgroundGameCenter />
        <div className = "container">
          <div className="justify-content-center">
            <h1><Headline className="pt-5">Game Center</Headline></h1>
            <SmallSize />
            <MSize><BigSize /></MSize>
          </div>
        </div>
      </Bg >
    )
  }
}
