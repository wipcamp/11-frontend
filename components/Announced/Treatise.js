import React, { Component } from 'react'
import styled  from 'styled-components'
import { 
  DesktopResponsive, 
  MobileScripture,
  MobileResponsive, 
  ImgBefore, 
  Base, 
  Shadow,
  Linen,
  Box,
  MobileTextResponsive } from './Responsive'

const DesktopScripture = styled(DesktopResponsive)`
  position: absolute;
  z-index: 6;
  bottom: 38vh;
  width:20%;
  animation: ${props => props.discription};
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

const MobileText = styled(MobileTextResponsive)`
  position:absolute;
  z-index: 6;
  visibility:${props => props.display} ;
`

const ImgAfterEntrance = styled.img`
  position:absolute;
  z-index: 5 ;
  visibility:${props => props.display || 'hiiden' } ;
  @media (min-width:320px) {
    width: 280px;
  }
  @media (min-width:414px) {
    width: 300px;
  }
  @media (min-width:768px) {
    width: auto;
  }
`

const ImgBeforeEntrance = styled(ImgBefore)`
  position:absolute;
  z-index: 5 ;
  visibility: ${props => props.before || 'visible'};
`

const Desktop = (props) => (
  <DesktopScripture discription={props.discription}> {/* porps send change animation or don't */}
    <DesktopText>{props.text}</DesktopText> {/* change text */}
  </DesktopScripture>
) 

const Mobile = (props) => (
  <MobileScripture>{/* props send none and block and show or don't show  */}
    <Box className="row justify-content-center">
      <ImgBeforeEntrance before={props.before} src="/static/img/announce/_Scripture.png" />
      <ImgAfterEntrance display={props.display} src="/static/img/announce/_ScriptureFull.png" />
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
    if(this.props.text != nextProps.text){
      this.handleState1(nextProps.text)
    }
  }
  componentDidMount(props){
    const click = this.props.click;
    const text = this.props.text;
    this.handleState(click, text);
  }

  state = {
    discription: [
      'swing 1s linear infinite', //destop before login
      'spin 3s linear forwards' // desktop after login mobile don't have animation 
    ],
    text : '',
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

  handleState = (click, text) => { //check login
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
    if(text == true){
      this.setState({ // ถ้าติด
        text: 'ขอแสดงความยินดีกับน้องไอติมที่ผ่านรอบคัดเลือกเข้าค่าย WIP Camp #11'
      })
    }
    else if(text == false){
      this.setState({ // ถ้าไม่ติด
        text: 'ขอแสดงความเสียใจน้องไม่ผ่านการคัดเลือกเข้าค่าย WIP Camp #11 ครับ ไว้กลับมาสมัครใหม่อีกครั้งในปีหน้านะครับ'
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
            text = {this.state.text}
          />
        </div>
      </React.Fragment>
    )
  }
}
