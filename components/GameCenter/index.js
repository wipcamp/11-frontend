import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle } from '../Core/Texts'
import Logo, { LogoGame, LogoGameHover } from '../GameCenter/LogoGame'
import axios from 'axios'

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
  @media (min-width:768px) {
    left:5vw;
  }
  @media (min-width:770px) {
    font-size:20px;
    left:7vw;
  }
  @media (min-width:992px) {
    left:9vw;
  }
  @media (min-width:1024px) {
    font-size:25px;
    left:8vw;
    
  }
  @media (min-width:1180px) {
    left:7vw; 
  }
  @media (min-width:1200px) {
    left:7vw;
  }
`
const TextJanpu = styled(Div)`
  left:7vw;
  transform:translate(0%,0);
  @media (min-width:320px) {
    font-size:25px;
    left:18vw;
    margin-top:-2em;
  }
  @media (min-width:360px) {
    left:18vw;
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
    left:10vw;
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
  @media (min-width:768px) {
    left:5vw;
  }
  @media (min-width:770px) {
    font-size:20px;
    left:8vw;
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
    left:9.5vw;
  }
  @media (min-width:1024px) {
    font-size:25px;
    margin-top:-1.75em;
    left:8vw;
  }
  @media (min-width:1180px) {
    left:7vw; 
  }
  @media (min-width:1200px) {
    left:7vw;
  }
`
const TextShinobi = styled(Div)`
  left:9vw;
  @media (min-width:320px) {
    font-size:15px;
    left:17vw;
  }
  @media (min-width:360px) {
    font-size:15px;
    left:17vw;
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
  @media (min-width:670px) {
    left:14vw;
    
  }
  @media (min-width:700px) {
    font-size:24px;
    left:12vw;
  }
  @media (min-width:768px) {
    left:9vw;
  }
  @media (min-width:770px) {
    font-size:20px;
    left:10vw;
  }
  @media (min-width:900px) {
    font-size:20px;
    left:9vw;
  }
  @media (min-width:992px) {
    left:12vw;
  }
  
  @media (min-width:1024px) {
    font-size:25px;
    left:11vw; 
  }
  @media (min-width:1180px) {
    font-size:25px;
    left:10vw; 
  }

  @media (min-width:1200px) {
    left:9vw; 
  }
`

const ScoreBox = styled.div`
  position:absolute;
  background-color: #f8e9d6;
  box-shadow: 0px 4px 4px #000000;
  width:100%;
  opacity:0.6;
  z-index:200;
  margin-top:-5px;
  padding: 5px 0;
  transform:translate(0,0);
  @media (min-width:320px) {
    margin-top:-8px;
    width:75%;
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

const MSize = styled.div`
  @media(max-width:768px){
    display:none;
  }
`

const TopScoreText = styled.p`
  @media (min-width:320px) {
    font-size:11px;
  }
  @media (min-width:360px) {
    font-size:11px;
  }
  @media (min-width:412px) {
  }
  @media (min-width:500px) {
    font-size:18px;
  }
  @media (min-width:576px) {
    font-size:20px;
  }
  @media (min-width:700px) {
    font-size:20px;
  }
  @media (min-width:770px) {
    font-size:16px;
  }
  @media (min-width:1024px) {
    font-size:24px;
  }
`

export default class index extends Component {
  state = {
    name:"",
    score:0,
  }
  componentDidMount  = async () => {
    await axios.get('https://game.service.wip.camp/api/janpu')
      .then((response) => {
        this.setState({score:response.data.score,name:response.data.player_name})
      })
      .catch((error) => {
      })
  }
  render () {
    const SmallSize = () => (
      <Mini>
        <div className="row justify-content-center">
          <div className = "col-12 mb-4">
            {/* <ScoreBox /> */}
            <a href="http://game-janpu.wip.camp" target="_blank">
              <LogoGameHover src="../../static/img/game-center/logoGame2.png" imagehover="../../static/img/game-center/logoGame2_hover.png" />
              <h1><TextJanpu> Janpu Ninja </TextJanpu></h1>
            </a>
            <ScoreBoxFirstGame className = "text-center">
              <h1><TopScoreText>TopScore <br/> {this.state.name} {this.state.score} </TopScoreText></h1>
            </ScoreBoxFirstGame>
          </div>
        </div>
        <div className = "row">
          <div className = "col-6 mt-2">
            {/* <a href="http://game-climbing.wip.camp" target="_blank"> */}
            <LogoGame src="../../static/img/game-center/logoGame1_comingSoon.png"/>
            {/* <LogoGameHover src="../../static/img/game-center/logoGame1.png" imagehover="../../static/img/game-center/logoGame1_hover.png" />> */}
            <h1><TextClimbbamboo>Climb Bamboo</TextClimbbamboo></h1>
            {/* </a> */}
            <Center>
              <ScoreBox />
            </Center>
          </div>
          <div className = "col-6 mt-2">
            {/* <a href="http://game-1.wip.camp" target="_blank"> */}
            {/* <LogoGameHover src="../../static/img/game-center/logoGame3.png" imagehover="../../static/img/game-center/logoGame3_hover.png" />> */}
            <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" />
            <h1><TextShinobi>Shinobi</TextShinobi></h1>
            {/* </a> */}
            <ScoreBox />
          </div>
        </div>
      </Mini>
    )
    
    const BigSize = () => (
      <div className="row">
        <Center className = "col-4 mt-5">
          {/* <a href="http://game-climbing.wip.camp" target="_blank"> */}
          {/* <LogoGameHover src="../../static/img/game-center/logoGame1.png" imagehover="../../static/img/game-center/logoGame1_hover.png" />> */}
          <LogoGame src="../../static/img/game-center/logoGame1_comingSoon.png" />
          <h1><TextClimbbamboo>Climb Bamboo</TextClimbbamboo></h1>
          {/* </a> */}
          <ScoreBox />
        </Center>
        <Center className = "col-4">
          <a href="http://game-janpu.wip.camp" target="_blank">
            <LogoGameHover src="../../static/img/game-center/logoGame2.png" imagehover="../../static/img/game-center/logoGame2_hover.png" />
            <h1><TextJanpu> Janpu Ninja </TextJanpu></h1>
          </a>
          <h1>
            <ScoreBox>
              <TopScoreText>
                TopScore <br/>{this.state.name} {this.state.score}
              </TopScoreText>
            </ScoreBox>
          </h1>
        </Center>
        <Center className = "col-4 mt-5">
          {/* <a href="http://game-1.wip.camp" target="_blank"> */}
          {/* <LogoGameHover src="../../static/img/game-center/logoGame3.png" imagehover="../../static/img/game-center/logoGame3_hover.png" />> */}
          <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" />
          <h1><TextShinobi>Shinobi</TextShinobi></h1>
          {/* </a> */}
          <ScoreBox />
        </Center>
      </div>
    )
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
