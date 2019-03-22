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

const swing = keyframes`
  0% {
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  100% {
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
`

const DesktopScripture = styled.div`
position: absolute;
z-index: 6;
bottom: 38vh;
width:20%;
animation: ${props => props.discription};
animation-fill-mode: forwards;
@media (min-width : 320px) {
  display:none;
}
@media (min-width : 769px){
  display:block;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      display:none;
     }
    @media only screen and (min-width: 1024px) and (max-height: 768px) {
      display:none;
     }
    @media only screen and (min-width: 1030px) and (max-height: 768px) {
      display:block;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      display:none;
    }
    @media only screen and (min-width: 1366px) and (max-height: 1024px) {
      display:none;
    }
    @media only screen and (min-width: 1370px) and (max-height: 1024px) {
      display:block;
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
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  100% {
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
}
`

const MobileScripture = styled.div`
    position:absolute;
    z-index:6;
    visibility:${props => props.display} ;
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
    @media only screen and (min-width: 1366px) and (max-height: 1024px) {
      display:block !important;
    }
    @media only screen and (min-width: 1370px) and (max-height: 1024px) {
      display:none !important;
    }
`

const DesktopText = styled.div`
  position:relative;
  top:15vh;
  text-align:center !important;
`
const MobileText = styled.span`
  padding-top:5em;
  position:absolute;
  z-index: 6;
`
const Img = styled.img`
  position:absolute;
  z-index: 5 ;
  @media (min-width:320px) {
    width: 250px;
  }
  @media (min-width:320px) {
    width: 300px;
  }
  @media (min-width:768px) {
    width: auto;
  }
`

const Box =styled.div`
  position:absolute;
  @media (min-width:320px) {
    left: 7vw;
    top: 50vh;
  }
  @media (min-width:320px) {
    left: 5vw;
    top: 50vh;
  }
  @media (min-width:320px) {
    top: 25vh;
  }
`

const Pic = (props) => (
  <React.Fragment>
    <DesktopScripture discription={props.discription}> {/* porps send change animation or don't */}
      <DesktopText>{props.text}</DesktopText> {/** change text */}
    </DesktopScripture>
    <MobileScripture display={props.display}>{/* props send none and block and show or don't show  */}
      <Box className="row justify-content-center">
      <Img src="/static/img/announce/_ScriptureFull.png" />
      <MobileText>{props.text}</MobileText>{/* change text */}
      </Box>
    </MobileScripture>
  </React.Fragment>
)

export default class Treatise extends Component {

  state = {
    discription: [
      'swing 0.3s infinite', //destop before login
      'spin 3s linear' // desktop after login mobile don't have animation 
    ],
    text : [
      'เสียใจด้วยน้องติดแล้ว',
      'ดีใจด้วยน้องไม่ติด'
    ],
    display : [
      'hidden', //moblie before login
      'visible' //moblie after login
    ],
    textcount: 0, //location in array to change text
    count: 1, //location in array both of mobile and desktop
  }

  handleClick = () => { //check login
    if (i == true) { //if login success change count to one and change animation on desktop or show on mobile(iPad)
      this.setState({
        count: 1
      })
    }
    else if (i == false) {
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
          <Pic 
            discription={this.state.discription[this.state.count]}
            text = {this.state.text[this.state.textcount]}
            display = {this.state.display[this.state.count]}
          />
        </div>
      </React.Fragment>
    )
  }
}
