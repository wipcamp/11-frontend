import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle } from '../Core/Texts'
import Logo, { LogoGame, LogoGameHover } from '../GameCenter/LogoGame'
import axios from 'axios'
import Minisize from '../Core/Minisize'

const Bg = styled.div`
  height: 100vh;
  position: relative;
  background : #F8E9D6;
  z-index:100;
  overflow-x:hidden;
  overflow-y:hidden;
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
    margin-top:-2.2em;
   
  }
  @media (min-width:360px) {
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
    padding-top:10px;
    left:5vw;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
    padding-top:0;
  }
  @media (min-width:769px) {  
    padding-top:13px;
  }
  @media (min-width:770px) {
    font-size:20px;
    left:7vw;
  }
  @media (min-width:992px) {
    padding-top:3px;
    left:9vw;
  }
  @media (min-width:1024px) {
    font-size:25px;
    left:7.5vw;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    padding-top:0;
  }
  @media (min-width:1180px) {
    left:7vw; 
  }
  @media (min-width:1200px) {
    padding-top:6px;
    left:7.5vw;
  }
  @media (min-width:1440px) {
    padding-top:4px;
  }
  @media (min-width:1500px) {
    left:7vw;
  }
  @media (min-width:2500px) {
    padding-top:0;
    left:4.5vw;
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
    padding-top:8px;
    left:6vw;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
    padding-top:0;
  }
  @media (min-width:769px) {
    padding-top:8px;
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
    padding-top:3px;
    left:9.5vw;
  }
  @media (min-width:1024px) {
    font-size:25px;
    left:8vw;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    padding-top:0;
  }
  @media (min-width:1180px) {
    left:7vw; 
  }
  @media (min-width:1200px) {
    left:9vw;
  }
  @media (min-width:1440px) {
    left:8vw;
    padding-top:2px;
  }
  @media (min-width:1500px) {
    left:7vw;
  }
  @media (min-width:2500px) {
    padding-top:0;
    left:4.5vw;
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
    left:12vw; 
  }
  @media (min-width:1440px) {
    left:10vw; 
  }
  @media (min-width:1500px) {
    left:9vw;
  }
  @media (min-width:2500px) {
    padding-top:0;
    left:5.5vw;
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
  margin-left:3rem;
  padding: 5px 0;
  transform:translate(0,0);
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: landscape)  {
    margin-top:-8px;
    width:60%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    width:60%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: landscape)  {
    margin-left:3.5rem;
    width:62%;
  }
  @media (min-width:769px){
    width:67%;
    margin-left:1.5rem;
  }
  @media (min-width:992px){
    width:70%;
    margin-left:2rem;
  }
  @media (min-width:1024px){
    width:60%;
    margin-left:3rem;
  }
  @media (min-width:1200px){
    width:62%;
    margin-left:3.5rem;
  }
  @media (min-width:1440px){
    width:62%;
    margin-left:3.5rem;
  }
  `

const MiniScoreBoxGame = styled(ScoreBox)`
  left:0;
  padding-top:10px;
  margin-left:0.25rem ;
  @media (min-width:320px) {
    margin-top:-9px;
    width:97%;
  }
  @media (min-width:414px) {
    width:87%;
  }
  @media (min-width:576px) {
    width:97%;
  }
  @media (min-width:768px) {
    width:77%;
  }
  
`

const MSize = styled.div`
  @media(max-width:768px){
    display:none;
  }
`

const TopScoreText = styled.p`
  @media (min-width:320px) {
    margin-bottom:0;
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
    name_2:"",
    score_2:0,
  }
  componentDidMount  = async () => {
    await axios.get('https://game.service.wip.camp/api/janpu')
      .then((response) => {
        this.setState({score:response.data.score,name:response.data.player_name})
      })
      .catch((error) => {
      })
    await axios.get('https://game.service.wip.camp/api/climbing')
      .then((response) => {
        this.setState({score_2:response.data.score,name_2:response.data.player_name})
      })
      .catch((error) => {
      })
  }
  render () {
    const SmallSize = () => (
      <Mini>
        <div className="row justify-content-center">
          <div className= "col-12 mb-4 mb-md-5  px-3">
            <a href="http://game-janpu.wip.camp" target="_blank">
              <LogoGameHover src="../../static/img/game-center/logoGame2.png" imagehover="../../static/img/game-center/logoGame2_hover.png" />
              <h1><TextJanpu> Janpu Ninja </TextJanpu></h1>
            </a>
            <div className="col-12"> 
              <MiniScoreBoxGame className="text-center">
                  <h1><TopScoreText>TopScore <br /> {this.state.name} {this.state.score} </TopScoreText></h1>
              </MiniScoreBoxGame>
            </div>
          </div>
        </div>
        <div className= "row mt-4 mt-sm-5 justify-content-center">
          <div className = "col-6">
            <a href="http://game-climbing.wip.camp" target="_blank">
              <LogoGameHover src="../../static/img/game-center/logoGame1.png" imagehover="../../static/img/game-center/logoGame1_hover.png" />
              <h1><TextClimbbamboo>Climb Bamboo</TextClimbbamboo></h1>
            </a>
            <div className="col-12">
              <MiniScoreBoxGame className="text-center">
                <h1><TopScoreText>TopScore <br /> {this.state.name_2} {this.state.score_2} </TopScoreText></h1>
              </MiniScoreBoxGame>
            </div>
          </div>
          <div className = "col-6">
            {/* <a href="http://game-1.wip.camp" target="_blank"> */}
            {/* <LogoGameHover src="../../static/img/game-center/logoGame3.png" imagehover="../../static/img/game-center/logoGame3_hover.png" />> */}
            <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" />
            <h1><TextShinobi>Shinobi</TextShinobi></h1>
            {/* </a> */}
            {/* <div className="col-12">
              <MiniScoreBoxGame className="text-center">
                <h1><TopScoreText>TopScore <br /> {this.state.name_3} {this.state.score_3} </TopScoreText></h1>
              </MiniScoreBoxGame>
            </div> */}
          </div>
        </div>
      </Mini>
    )
    
    const BigSize = () => (
      <div className="row">
        <div className = "col-4 mt-5 text-center">
          <a href="http://game-climbing.wip.camp" target="_blank">
          <LogoGameHover src="../../static/img/game-center/logoGame1.png" imagehover="../../static/img/game-center/logoGame1_hover.png" />
          <h1><TextClimbbamboo>Climb Bamboo</TextClimbbamboo></h1>
          </a>
          <ScoreBox>
            <h1><TopScoreText>
                TopScore <br/>{this.state.name_2} {this.state.score_2}
            </TopScoreText></h1>
            </ScoreBox>
        </div>
        <div className = "col-4 text-center">
          <a href="http://game-janpu.wip.camp" target="_blank">
            <LogoGameHover src="../../static/img/game-center/logoGame2.png" imagehover="../../static/img/game-center/logoGame2_hover.png" />
            <h1><TextJanpu> Janpu Ninja</TextJanpu></h1>
          </a>
            <ScoreBox>
              <h1>
                  <TopScoreText>
                    TopScore <br/>{this.state.name} {this.state.score}
                  </TopScoreText>
              </h1>
            </ScoreBox>
        </div>
        <div className = "col-4 mt-5 text-center">
          {/* <a href="http://game-1.wip.camp" target="_blank"> */}
          {/* <LogoGameHover src="../../static/img/game-center/logoGame3.png" imagehover="../../static/img/game-center/logoGame3_hover.png" />> */}
          <LogoGame src="../../static/img/game-center/logoGame3_comingSoon.png" />
          <h1><TextShinobi>Shinobi</TextShinobi></h1>
          {/* </a> */}
            {/* <ScoreBox>
              <h1>
                  <TopScoreText>
                    TopScore <br/>{this.state.name_3} {this.state.score_3}
                  </TopScoreText>
              </h1>
            </ScoreBox> */}
        </div>
      </div>
    )
    return (
      <React.Fragment>
        <Minisize />
        <Bg>
          <BackgroundGameCenter />
          <div className = "container">
            <div className="justify-content-center">
              <h1><Headline className="pt-4">Game Center</Headline></h1>
              <SmallSize />
              <MSize><BigSize /></MSize>
            </div>
          </div>
        </Bg >
      </React.Fragment>
    )
  }
}
