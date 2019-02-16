import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle } from '../Core/Texts'
import Logo, { LogoGame, LogoGameHover } from '../GameCenter/LogoGame'

const Bg = styled.div`
  height: 100vh;
  position: relative;
  background : #F8E9D6;
  z-index:100;
  overflow-x:hidden;
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
  text-align:center !important;
`
const Div = styled.div`
  text-align:center !important;
  position:absolute;
  z-index:5;
  margin-top:-1.5em;
  font-size:28px;
  color:#421A00;
`
const TextClimbbamboo = styled(Div)`
  left:6.5vw;
  @media (min-width:320px) {
    font-size:15px;
    left:10vw;
   
  }
  @media (min-width:375px) {
    left :12vw;
  }
  @media (min-width:412px) {
    left :11vw;
  }
  @media (min-width:500px) {
    font-size:22px;
    left:9vw;
  }
  @media (min-width:576px) {
    left:10vw;
  }
  @media (min-width:700px) {
    font-size:24px;
    left:8vw;
  }
  @media (min-width:770px) {
    font-size:20px;
    left:7vw;
  }
  @media (min-width:1024px) {
    font-size:28px;
    left:7vw;
    
  }
`
const TextJanpu = styled(Div)`
  left:7vw;
  transform:translate(0%,0);
  @media (min-width:320px) {
    font-size:23px;
    left:20vw;
   
  }
  @media (min-width:360px) {
    left:19vw;
  }
  @media (min-width:375px) {
    left:16vw;
  }
  @media (min-width:380px) {
    left:18vw;
  }
  @media (min-width:412px) {
    left:12vw;
  }
  @media (min-width:500px) {
    left:11vw;
  }
  @media (min-width:550px) {
    left:10vw;
  }
  @media (min-width:576px) {
    font-size:24px;
    left:11.5vw;
  }
  @media (min-width:613px) {
    left:10vw;
  }
  @media (min-width:700px) {
    left:9vw;
  }
  @media (min-width:750px) {
    left:9vw;
  }
  @media (min-width:810px) {
    font-size:20px;
    left:7vw;
  }
  @media (min-width:836px) {
    left:7vw;
  }
  @media (min-width:855px) {
    left:6vw;
  }
  @media (min-width:895px) {
    left:6vw;
  }
  @media (min-width:945px) {
    left:5vw;
  }
  @media (min-width:992px) {
    margin-top:-1.5em;
    left:8.5vw;
  }
  @media (min-width:1024px) {
    font-size:28px;
    margin-top:-1.25em;
    left:7vw;
  }
  @media (min-width:1200px) {
    margin-top:-1.5em;
  }
`
const TextShinobi = styled(Div)`
  left:9vw;
  @media (min-width:320px) {
    font-size:15px;
    left:15vw;
  }
  @media (min-width:360px) {
    font-size:15px;
    left:16vw;
  }
  @media (min-width:412px) {
    left:16vw;
  }
  @media (min-width:500px) {
    font-size:22px;
    left:15vw;
  }
  @media (min-width:576px) {
    font-size:24px;
    
  }
  @media (min-width:700px) {
    font-size:24px;
    left:12vw;
  }
  @media (min-width:770px) {
    font-size:20px;
    left:10vw;
  }
  
  @media (min-width:1024px) {
    font-size:28px;
    left:9vw; 
  }
`

const ScoreBox = styled.div`
  position:absolute;
  background-color: #f8e9d6;
  box-shadow: 0px 4px 4px #000000;
  width:100%;
  height: 100px;
  opacity:0.6;
  z-index:200;
  margin-top:-9px;
  transform:translate(0,0);
  @media (min-width:320px) {
    margin-top:-8px;
    width:75%;
    height: 30px;
    left:6vw;
  }
  @media (min-width:375px) {
    width:80%;
    left:5vw;
  }
  @media (min-width:412px) {
    width:73%;
    left:4.5vw;
  }
  @media (min-width:576px) {
    width:75%;
  }
  @media (min-width:768px) {
    left:2.5vw;
    width:70%;
  }
  @media (min-width:1024px) {
    left:6vw;
    width:60%;
  }
  @media (min-width:1440px) {
    left:5vw;
    width:62%;
  }
  @media (min-width:1500px) {
    left:4.7vw;
  }
  @media (min-width:2560px) {
    left:3vw;
    width:60%;
  }
`
const ScoreBoxFirstGame = styled(ScoreBox)`
  @media (min-width:320px) {
    margin-top:-9px;
    width:85%;
    height: 35px;
    left:7vw;
  }
  @media (min-width:375px) {
    left:5.5vw;
  }
  @media (min-width:412px) {
    width:76%;
    left:5vw;
  }
  @media (min-width:576px) {
    width:80%;
  }
  @media (min-width:768px) {
    left:2.5vw;
    width:68%;
  }
  
`

const SmallSize = () => (
  <Mini>
    <div className="row justify-content-center">
      <div className = "col-12 mb-4">
        {/* <ScoreBox /> */}
        {/* <LogoGame src="../../static/img/game  center/logoGame1_comingSoon.png" imagehover="../../static/img/game-center/" display="block"/> */}
        <LogoGameHover src="../../static/img/game-center/logoGame2.png" imagehover="../../static/img/game-center/logoGame2_hover.png" />
        <h1><TextJanpu> Janpu Ninja </TextJanpu></h1>
        <ScoreBoxFirstGame />
      </div>
    </div>
    <div className = "row">
      <div className = "col-6 mt-2">
        <LogoGame src="../../static/img/game-center/logoGame1_comingSoon.png"/>
        <h1><TextClimbbamboo>Climb Bamboo</TextClimbbamboo></h1>
        {/* <LogoGame src="../../static/img/game-center/logoGame2.png" /> */}
        <Center>
          <ScoreBox />
        </Center>
      </div>
      <div className = "col-6 mt-2">
        {/* <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" imagehover="../../static/img/game-center/" />> */}
        <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" />
        <h1><TextShinobi>Shinobi</TextShinobi></h1>
        <ScoreBox />
      </div>
    </div>
  </Mini>
)

const BigSize = () => (
  <div className="row">
    <Center className = "col-4 mt-5">
      <LogoGame src="../../static/img/game-center/logoGame1_comingSoon.png" />
      <h1><TextClimbbamboo>Climb Bamboo</TextClimbbamboo></h1>
      <ScoreBox />
      {/* <LogoGame src="../../static/img/game-center/logoGame1_comingSoon.png" imagehover="../../static/img/game-center/" /> */}
    </Center>
    <Center className = "col-4">
      <LogoGameHover src="../../static/img/game-center/logoGame2.png" imagehover="../../static/img/game-center/logoGame2_hover.png" />
      <h1><TextJanpu> Janpu Ninja </TextJanpu></h1>
      <ScoreBox />
      {/* <LogoGame src="../../static/img/game-center/logoGame2.png" /> */}
    </Center>
    <Center className = "col-4 mt-5">
      {/* <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" imagehover="../../static/img/game-center/" />> */}
      <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" />
      <h1><TextShinobi>Shinobi</TextShinobi></h1>
      <ScoreBox />
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
