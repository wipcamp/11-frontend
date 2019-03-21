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
  @media (min-width: 1024px) { 
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

@media (min-width: 1024px) { 
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

@media (min-width: 1024px) { 
    bottom:27vh;
    width:35%;
  }


`

<<<<<<< HEAD


const Scripture = styled.div`
position: absolute;
z-index: 6;
bottom: 0vh;
width:100%;

@media (min-width: 1024px) { 
    bottom:38vh;
    width:20%;

    
  }

animation: ${props => props.discription};
animation-fill-mode: forwards;

=======
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
@media (min-width : 768px){
  display:block;
}
@media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
  display:none;
 }
@media only screen and (width: 768px) and (height: 1024px) and (orientation: landscape)  {
  display:none;
 }
 @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
   display:none;
 }
 @media only screen and (width: 1024px) and (height: 1370px) and (orientation: landscape)  {
   display:none;
 }
>>>>>>> 25af9d479e8becd4970fc40a3560ab46799eea30
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
<<<<<<< HEAD
    transform: ${props => props.transform};
    opacity:1;
    bottom:30vh;
    width:${props => props.width || '50%'};
    height:${props => props.height || '50%'};
    border:none;
=======
    transform:translate(0, 0) rotate(0deg);
    opacity:1;
    bottom:30vh;
    width:50%;
    height:50%;
>>>>>>> 25af9d479e8becd4970fc40a3560ab46799eea30
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
    bottom: 40vh;
    z-index:6;
    @media (min-width : 320px) {
      display:block;
    }
    @media (min-width : 768px){
      display:none;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      display:block;
     }
    @media only screen and (width: 768px) and (height: 1024px) and (orientation: landscape)  {
      display:block;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      display:block;
    }
    @media only screen and (width: 1024px) and (height: 1370px) and (orientation: landscape)  {
      display:block;
    }
`

const DesktopText = styled.div`
  position:relative;
  top:15vh;
  text-align:center !important;
`
const MobileText = styled.div`
  position:relative;  
  z-index: 6;
`
const Img = styled.img`
  position:absolute;
  bottom: -8vh;
  left:-11vw;
  z-index: 5 ;
  width: 150%;
  height:auto;
`

const Pic = (props) => (
<<<<<<< HEAD
  <Scripture
    id="animation"
    discription={props.discription}
    transform={props.transform}
    width={props.width}
    height={props.height}
  >
    <Span>{props.text}</Span>
  </Scripture>
)

export default class Treatise extends Component {
  componentWillMount = () => {
    this.timeouts = null;
  };

  componentDidMount = () => {
    this.performAndDisapper();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  };

  resize() {
    // this.setState({ hideNav: <= 760 });
    if (window.innerWidth <= 768) {
      this.setState({
        trancount: 1
      })
    }
    if (window.innerWidth > 768) {
      this.setState({
        trancount: 0
      })
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.timeouts)
  };

  performAndDisapper = () => {
    const element = document.getElementById('animation');
    const element1 = document.getElementById('background');
    element.addEventListener('animationend', () => {
      element1.style =
        'visibility: \'hidden\'; opacity: 0; transition: visibility 0s 0s, opacity 0s linear;';
      this.timeouts = setTimeout(() => {
        element1.remove();
      }, 0);
    });
  }
=======
  <React.Fragment>
    <DesktopScripture discription={props.discription}>
      <DesktopText>{props.text}</DesktopText>
    </DesktopScripture>
    <MobileScripture>
      <Img src="/static/img/announce/_ScriptureFull.png" />
      <MobileText>{props.text}</MobileText>
    </MobileScripture>
  </React.Fragment>
)

export default class Treatise extends Component {

>>>>>>> 25af9d479e8becd4970fc40a3560ab46799eea30
  state = {
    discription: [
      'swing 0.3s infinite',
      'spin 3s linear'
    ],
<<<<<<< HEAD
    transform: [
      'translate(0, 0) rotate(0deg)', //desktop
      'translate(0, 0) rotate(90deg)' //mobile
    ],
    width: [
      '50%',//desktop
      '100%' //mobile
    ],
    height: [
      '50%', //desktop
      '30%' //mobile
    ],
    text: [
=======
    text : [
>>>>>>> 25af9d479e8becd4970fc40a3560ab46799eea30
      'เสียใจด้วยน้องติดแล้ว',
      'ดีใจด้วยน้องไม่ติด'
    ],
    textcount: 0,
    count: 1,
<<<<<<< HEAD
    trancount: 0,
    widthdevice: 0

=======
>>>>>>> 25af9d479e8becd4970fc40a3560ab46799eea30
  }

  handleClick = () => { //check login
    if (i == true) {
      this.setState({
        count: 1
      })
    }
    else if (i == false) {
      this.setState({
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
          />
        </div>
      </React.Fragment>
    )
  }
}
