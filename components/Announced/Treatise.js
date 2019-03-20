import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Base = styled.img`
position: absolute;
z-index: 4;
bottom: 5vh;
width:30%;
`
const Shadow = styled.img`
position: absolute;
z-index: 3;
bottom: 0vh;
width:26.3%;
`
const Linen = styled.img`
position: absolute;
z-index: 5;
bottom: 27vh;
width:35%;
`



const swing = keyframes`
  0% {
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  100% {
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
  /* 0%, 20%, 40%, 60%, 80%, 100% {
    transform: rotate3d(0, 0, 1, 5deg);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate3d(0, 0, 1, -5deg);
  } */
`

const Scripture = styled.img`
position: absolute;
z-index: 6;
bottom: 38vh;
width:20%;
/* animation: ${swing} 0.1s infinite; */
animation: ${props => props.discription};
animation-fill-mode: forwards;
/* animation-play-state: paused; */

@keyframes spin{
  0%{
    transform:  translate(0px,0px)  rotate(5deg) ;
    width:auto;
    height:auto;
  }
  5%{
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
  10%{
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  15%{
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
  20%{
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  25%{
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
  30%{
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  35%{
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
  40%{
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  45%{
    transform:  translate(0px,0px)  rotate(-5deg) ;
  }
  50%{
    transform:  translate(0px,0px)  rotate(5deg) ;
  }
  
  55% {
      transform: translate(0, 0) rotate(0deg);
      opacity : 1;
  }
  60% {
      transform: translate(0, -100%) rotate(360deg);
      opacity : 1;
  }
  65% {
      transform: translate(0, -200%) rotate(720deg);
      opacity : 1;
      width:auto;
      height:auto;
  }
  70% {
      transform: translate(0, -300%) rotate(1080deg);
      content : url('/static/img/announce/_Scripture.png');
      opacity : 1;
  }
  75% {
      content : url('/static/img/announce/_Scripture.png');
      transform: translate(0, -400%) rotate(1440deg);
  }
  80% {
      transform: translate(0, -500%) rotate(1800deg);
      opacity : 0;
      bottom:52vh;
      
  }
  85%{
    content : url('/static/img/announce/_ScriptureFull.png');
    opacity:0;
    transform: ${props => props.transform};
    bottom:30vh;
  }
  90%{
    content : url('/static/img/announce/_ScriptureFull.png');
  }
  100%{
    content : url('/static/img/announce/_ScriptureFull.png');
    content: ('ยินดีด้วย');
    transform: ${props => props.transform};
    bottom:30vh;
    opacity:1;
    width:${props => props.width || '50%'};
    height:${props => props.height || '50%'};
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
const Pic = (props) => (
  <Scripture 
    id="animation" 
    discription={props.discription} 
    transform = {props.transform}
    width = {props.width}
    height = {props.height}
    src='../../static/img/announce/_Scripture.png'  />
)

export default class Treatise extends Component {
  componentWillMount = () => {
    this.timeouts = null;
    // this.setState({
    //   widthdevice: window.innerWidth
    // });
  };

  componentDidMount = () => {
    this.performAndDisapper();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  };

  resize() {
    // this.setState({ hideNav: <= 760 });
    if (window.innerWidth  <= 768) {
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
    element.addEventListener('animationend', () =>{
      element1.style =
        'visibility: \'hidden\'; opacity: 0; transition: visibility 0s 0s, opacity 0s linear;';
      this.timeouts = setTimeout(() => {
        element1.remove();
      }, 0);
    });
  }
  state = {
    discription: [
      'swing 0.3s infinite',
      'spin 3s linear'
    ],
    transform : [
      'translate(0, 0) rotate(0deg)', //desktop
      'translate(0, 0) rotate(90deg)' //mobile
    ],
    width : [
      '50%',//desktop
      '100%' //mobile
    ],
    height : [
      '50%', //desktop
      '30%' //mobile
    ],
    count: 1,
    trancount: 0,
    widthdevice : 0

  }
  handleClick = () => {
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
          transform = {this.state.transform[this.state.trancount]}
          width={this.state.width[this.state.trancount]}
          height={this.state.height[this.state.trancount]}
        />
      </div>
</React.Fragment>
    )
  }
}
