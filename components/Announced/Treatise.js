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
@keyframes spin{
    0% {
        transform: translate(0, 0) rotate(0deg);
        opacity : 1;
    }
    20% {
        transform: translate(0, -100%) rotate(360deg);
        opacity : 1;
    }
    40% {
        transform: translate(0, -200%) rotate(720deg);
        opacity : 1;
    }
    60% {
        transform: translate(0, -300%) rotate(1080deg);
        opacity : 1;
    }
    80% {
        transform: translate(0, -400%) rotate(1440deg);
        opacity : 1;
    }
    100% {
        transform: translate(0, -500%) rotate(1800deg);
        opacity : 0;
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
    <Scripture id="animation"  discription={props.discription} src='../../static/img/announce/_Scripture.png' />
)
 
export default class componentName extends Component {
  // componentWillMount = () => {
  //   this.timeouts = null;
  // };

  // componentDidMount = () => {
  //   this.performAndDisapper();
  //   // this.performAndDisapper1();
  // };

  // componentWillUnmount = () => {
  //   clearTimeout(this.timeouts)
  // };

  // performAndDisapper = () => {
  //   console.log(this.state.count);
  //   const element = document.getElementById('animation');
  //   element.addEventListener('animationend', () =>{
  //     this.state.count= 2;
  //     element.;
  //   });
  // }
  state = {
    discription: [
        'swing 0.3s infinite', 
        'swing 0.1s 20', 
        'spin 2s 1 linear'
    ],
    count:1,

  }
  handleClick = () =>{
  if(i== true){
    this.setState({
      count: 1
    })
  }
  else if(i == false){
    this.setState({
      count : 0
    })
  }
  }
  render () {
    return (

      <div className="row justify-content-center">
        <Base src='../../static/img/announce/_Scripture base.png' />
        <Shadow src='../../static/img/announce/Scripturebaseshadow.png' />
        <Linen src='../../static/img/announce/linen.png' />
        <Pic 
          discription={this.state.discription[this.state.count]}  
        />
      </div>
    )
  }
}
