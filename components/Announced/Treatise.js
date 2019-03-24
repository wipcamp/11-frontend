import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Base = styled.img`
position: absolute;
z-index: 4;
bottom: 0vh;
width:100%;

@media (min-width: 320px) { 
    bottom:3vh;
    width:70%;
  }
  @media (min-width: 1025px) { 
    bottom:5vh;
    width:30%
  }
  @media (min-width: 1366px) { 
    bottom:6vh;
    width:35%
  }
  @media (min-width: 1367px) { 
    bottom:5vh;
    width:30%
  }


`

const Shadow = styled.img`
position: absolute;
z-index: 3;
bottom: 0vh;
width:100%;

@media (min-width: 320px) { 
    bottom:0vh;
    width:61%;
  }

@media (min-width: 1025px) { 
    bottom:0vh;
    width:26.3%;
   
  }

  @media (min-width: 1366px) { 
    bottom:2vh;
    width:31%;
   
  }
  @media (min-width: 1367px) { 
    bottom:0vh;
    width:26.3%;
   
  }
`
const Linen = styled.img`
position: absolute;
z-index: 5;
bottom: 0vh;
width:100%;

@media (min-width: 320px) { 
    bottom:19vh;
    width:70%;
  }



  @media (min-width: 768px) { 
    bottom:25vh;
    width:70%;
  }

@media (min-width: 1025px) { 
    bottom:27vh;
    width:35%;
  }


`

const DesktopScripture = styled.div`
  position: absolute;
  z-index: 6;
  bottom: 38vh;
  width:20%;
  animation: ${props => props.discription};
  /* animation-fill-mode: forwards; */
  @media (min-width : 320px) {
    display:none;
  }
  @media (min-width : 769px){
    display:block;
  }
  /* iPad 9.7" */
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    display:none;
  }
  @media only screen and (min-width: 1030px) and (max-height: 768px) {
    display:block;
  }
  /* iPad Pro 2017 10.5" */
  @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    display:none;
  }
  @media only screen and (min-width: 1115px) and (max-height: 835px) {
    display:block;
  }
  /* iPad Pro 2017 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    display:none;
  }
  @media only screen and (min-width: 1370px) and (max-height: 1024px) {
    display:block;
  }
  /* iPad Pro 2018 11" */
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
    display:none;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    display:none;
  }
  @media only screen and (min-width: 1197px) and (max-height: 835px) {
    display:block;
  }
  /* iPad Pro 2018 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait) {
    display:none;
  }
  @media only screen and (min-width: 1466px) and (max-height: 1024px) {
    display:none;
  }
  @media only screen and (min-width: 1470px) and (max-height: 1024px) {
    display:block;
  }
  /* ipad Mini Portrait */
  @media only screen and (width:768px) and (resolution: 163dpi) {
    display:none;
  }

  /* ipad Mini Landscape */
  @media only screen and (width:1024px) and (resolution: 163dpi) {
    display:none;
  }
  @keyframes spin{
  
    0%{
      content : url('/static/img/announce/_Scripture.png');
      width:auto;
      height:auto;
      transform: rotate3d(0, 0, 1, 5deg);
    }
    10%, 20%, 30%, 40%, 50% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    5%, 15%, 25%, 35%, 45%, 55% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    60% {
        content : url('/static/img/announce/_Scripture.png');
        transform: translate(0, -100%) rotate(360deg);
        opacity : 1;
        bottom:54vh;
    }
    65% {
        transform: translate(0, -200%) rotate(720deg);
        opacity : 1;
        width:auto;
        height:auto;
    }
    70% {
        transform: translate(0, -300%) rotate(1080deg);
        opacity : 1;
    }
    75% {
        transform: translate(0, -400%) rotate(1440deg);
        opacity : 0;
    }
    80% {
        transform: translate(0, -500%) rotate(1800deg);
        opacity : 0;

    }
    100%{
      background-image: url('/static/img/announce/_ScriptureFull.png');
      background-position:center;
      background-repeat:no-repeat;
      background-size:contain;
      transform:translate(0, 0) rotate(0deg);
      opacity:1;
      bottom:30vh;
      width:50%;
      height:50%;
    }
  }
  @keyframes swing{
    0% {
      content : url('/static/img/announce/_Scripture.png');
      transform: rotate3d(0, 0, 1, 5deg);
    }
    50%{
      content : url('/static/img/announce/_Scripture.png');
      transform: rotate3d(0, 0, 1, -5deg);
    }
    100%{
      content : url('/static/img/announce/_Scripture.png');
      transform: rotate3d(0, 0, 1, 5deg);
    }
  }
`

const MobileScripture = styled.div`
  position:absolute;
  z-index:6;
  display : block;
  @media (min-width : 320px) {
    display:block;
  }
  @media (min-width : 768px){
    display:none;
  }
  @media (min-width : 768px){
    display:none;
  }
  /* iPad 9.7" */
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    display:block !important;
   }
   @media only screen and (min-width: 1024px) and (max-height: 768px) {
    display:block !important;
  }
  @media only screen and (min-width: 1030px) and (max-height: 768px) {
    display:none !important;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:block !important;
  }
  /* iPad Pro 2017 10.5" */
  @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
    display:block !important;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    display:block !important;
  }
  @media only screen and (min-width: 1115px) and (max-height: 835px) {
    display:none !important;
  }
  /* iPad Pro 2017 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:block !important;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    display:block !important;
  }
  @media only screen and (min-width: 1370px) and (max-height: 1024px) {
    display:none !important;
  }
  /* iPad Pro 2018 11" */
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
    display:block !important;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    display:block !important;
  }
   @media only screen and (min-width: 1197px) and (max-height: 835px) {
    display:none !important;
  }
  /* iPad Pro 2018 12.9" */
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait) {
    display:block !important;
  }
  @media only screen and (min-width: 1466px) and (max-height: 1024px) {
    display:block !important;
  }
  @media only screen and (min-width: 1470px) and (max-height: 1024px) {
    display:none !important;
  }
   /* ipad Mini Portrait */
  @media only screen and (width:768px) and (resolution: 163dpi) {
    display:block !important;
  }

  /* ipad Mini Landscape */
  @media only screen and (width:1024px) and (resolution: 163dpi) {
    display:block !important;
  }
`

const DesktopText = styled.div`
  padding-top:4em;
  padding-left:15em;
  padding-right:15em;
  position:relative;
  top:15vh;
  text-align:center !important;
  @media (min-width : 1050px) {
    left:16vw;
    padding-top:3em;
    padding-left:1em;
    padding-right:1em;
    width: 200px;
  }
  @media (min-width : 1171px) {
    left:12vw;
    padding-top:3em;
    font-size:1.2em;
    width: 400px;
  }
  @media (min-width : 1500px) {
    left:12vw;
  }
`

const MobileText = styled.span`
  position:absolute;
  z-index: 6;
  visibility:${props => props.display} ;
  @media (min-width : 320px) {
    padding-top:4em;
    padding-left:1.5em;
    padding-right:1.5em;
    font-size:0.8em;
    width: 200px;
  }
  @media (min-width : 768px) {
    padding-top:9em;
    padding-left:1.5em;
    padding-right:1.5em;
    font-size:1em;
    width: 300px;
  }
   
`
const Img = styled.img`
  position:absolute;
  z-index: 5 ;
  visibility:${props => props.display || 'hiiden' } ;
  @media (min-width:320px) {
    width: 250px;
  }
  @media (min-width:414px) {
    width: 300px;
  }
  @media (min-width:768px) {
    width: auto;
  }
`

const Img2 = styled.img`
  position:absolute;
  z-index: 5 ;
  visibility: ${props => props.before || 'visible'};
  @media (min-width:320px) {
    bottom: -36vh;
    width: 150px;
  }
  @media (min-width:375px) {
    width: 170px;
  }
  @media (min-width:768px) {
    bottom: -28vh;
    width: auto;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1367px) and (orientation: portrait) {
    bottom: -27vh;
    width: 400px;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    bottom: -36vh;
    width: 300px;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    bottom: -45vh;
    width: 270px;
  }
`

const Box =styled.div`
  position:absolute;
  @media (min-width:320px) {
    left: 2vw;
    right:2vw;
    top:40vh;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    top:20vh;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    top:30vh;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    top:20vh;
  }
   @media only screen and (min-width: 1194px) and (max-height: 835px) {
    top:20vh;
  }
`
const Desktop = (props) => (
  <DesktopScripture discription={props.discription}> {/* porps send change animation or don't */}
    <DesktopText>{props.text}</DesktopText> {/** change text */}
  </DesktopScripture>
) 

const Mobile = (props) => (
  <MobileScripture >{/* props send none and block and show or don't show  */}
    <Box className="row justify-content-center">
      <Img2 before={props.before} src="/static/img/announce/_Scripture.png" />
      <Img display={props.display} src="/static/img/announce/_ScriptureFull.png" />
      <MobileText display={props.display}>{props.text}</MobileText>
    </Box>
  </MobileScripture>
)

const Animation = (props) => (
  <React.Fragment>
    <Desktop discription={props.discription} text={props.text} />
    <Mobile display={props.display} text={props.text} before={props.before} />
  </React.Fragment>
)

export default class Treatise extends Component {

  componentWillReceiveProps(nextProps){
    if(this.props.click != nextProps.click){
      this.handleState(nextProps.click);
    }
  }
  componentDidMount(props){
    const click = this.props.click;
    this.handleState(click);
  }
  state = {
    discription: [
      'swing 1s linear infinite', //destop before login
      'spin 3s linear forwards' // desktop after login mobile don't have animation 
    ],
    text : [
      '',
      'ขอแสดงความยินดีกับน้องไอติมที่ผ่านรอบคัดเลือกเข้าค่าย WIP Camp #11',
      'ขอแสดงความเสียใจน้องไม่ผ่านการคัดเลือกเข้าค่าย WIP Camp #11 ครับ ไว้กลับมาสมัครใหม่อีกครั้งในปีหน้านะครับ'
    ],
    display : [
      'hidden', //moblie before login
      'visible' //moblie after login
    ],
    before:[
      'visible', //moblie before login
      'hidden' //moblie after login
    ],
    textcount: 0, //location in array to change text
    count: 0, //location in array both of mobile and desktop
  }

  handleState = (click) => { //check login
    if (click === true) { //if login success change count to one and change animation on desktop or show on mobile(iPad)
      console.log(click);
      this.setState({
        count: 1
      })
    }
    else if (click === false) {
      console.log(click);
      this.setState({ //if login fail don't play animation on desktop or don't show on mobile(iPad)
        count: 0
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center" id="background">
          <Base src='../../static/img/announce/_Scripture base.png' />
          <Shadow src='../../static/img/announce/Scripturebaseshadow.png' />
          <Linen src='../../static/img/announce/linen.png' />
        </div>
        <div className="row justify-content-center">
          <Animation 
            discription={this.state.discription[this.state.count]}
            display = {this.state.display[this.state.count]}
            before={this.state.before[this.state.count]}
            text = {this.state.text[this.state.textcount]}
          />
        </div>
      </React.Fragment>
    )
  }
}
