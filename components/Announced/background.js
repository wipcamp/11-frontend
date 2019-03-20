import React, { Component } from 'react'
import styled from 'styled-components'

const Layer1 = styled.img`
  
  position: absolute;
  
  transform: translate(-50%,0%);
  height:15vh;
  width:100%;
  z-index: 3;
  bottom: 0vh;
  
  @media (min-width:320px) {
    height:65vh;
    width:50%;
    bottom:15vh;


  }
  @media (min-width:412px) {
    
  }
  @media (min-width:576px) {
    
  }
  @media (min-width:768px) {
    
  }
  @media (min-width:1024px) {
    height:75%;
    width:15%;
    bottom: 15vh;
    left:5%;
    
  }
`

const Layer2 = styled.img`
  position: absolute;
  transform: translate(-50%,0%);
  height:15vh;
  width:100%;
  z-index: 3;
  bottom: 0vh;
  left:100%;
 
 @media (min-width: 320px) { 
    height:65vh;
    width:50%;
    bottom:15vh;
    
    
    
  }
  @media (min-width:1024px) {
    height:75%;
    width:15%;
    bottom: 15vh;
    left:95%;
    
  }
`

const Top = styled.img`
position: absolute;
  z-index: 4;
  bottom: 0vh;
  height:20vh;  
  top: 0vh;
  width: 220%;
  left: 50%;
  transform: translate(-50%,0%);

  @media ( min-width: 320px) { 
         
    
    
  }
  @media (min-width:1024px) {
    height:30%;
    width:101%;
    top:-18vh;
    
  }


`
const Floor = styled.img`
position: absolute;
  z-index: 1;
  bottom: 0vh;
  transform: translate(0%,0%);
  height:15vh;
  width:100%;

  @media (min-width: 320px) { 
       
  }

  @media (min-width: 576px) { 

   }


@media (min-width: 768px) { }


@media (min-width: 992px) {  }


@media (min-width: 1200px) {  }


`
const WoodFloor = styled.img`
position: absolute;
  z-index: 0;
  bottom: 0vh;
  transform: translate(-50%,0%);
  height:20vh;
  width:100%;

  @media (min-width: 320px) { 
    left:50%;
    bottom:5vh;
    
  }

  @media (min-width: 576px) { 

   }


@media (min-width: 768px) { }


@media (min-width: 992px) {  }


@media (min-width: 1024px) {  
  height:25vh;
  width:150%;


}

`
const LeftSakura1 = styled.img`
position: absolute;
  z-index: 2;
  bottom: 52vh;
  transform: translate(40%,0%);
  width:30%;

`
const LeftSakura2 = styled.img`
position: absolute;
  z-index: 2;
  bottom: 30vh;
  transform: translate(50%,0%);
  width:20%;

`
const RightSakura = styled.img`
position: absolute;
  z-index: 2;
  bottom: 35vh;
  transform: translate(340%,0%);
  width:20%;

  

`

const LeftDoorShadow = styled.img`
position: absolute;
  z-index: 2;
  bottom: 0vh;
  transform: translate(-50%,0%);
  width:100%;

  @media (min-width: 320px) { 
    bottom:2vh;
    width:50%; 
   
    
  }
  @media (min-width: 1024px) { 
    width:25%; 
    bottom:-8vh;
  }

`
const RightDoorShadow = styled.img`
position: absolute;
  z-index: 2;
  bottom: 0vh;
  transform: translate(-50%,0%);
  width:100%;
  left:100%;

  @media (min-width: 320px) { 
    bottom:2vh;
    width:50%; 
   
    
  }
  @media (min-width: 1024px) { 
    width:25%; 
    bottom:-8vh;

`


export default class componentName extends Component {
  render () {
    return (
      <div>
        <Layer1 src='/static/img/announce/door.png' />
        <Layer2 src='/static/img/announce/door.png' />
        <Top src='/static/img/announce/Top.png' />
        
        <Floor src='/static/img/announce/floor.png' />
        <WoodFloor src='/static/img/announce/wood-floor.png' />
        <LeftSakura1 src='/static/img/announce/left-sakura1.png' />
        <LeftSakura2 src='/static/img/announce/left-sakura2.png' />
        <RightSakura src='/static/img/announce/right-sakura.png' />
        <LeftDoorShadow src='/static/img/announce/left--doorshadow.png' />
        <RightDoorShadow src='/static/img/announce/right-doorshadow.png' />

     </div>
    )
  }
}
  