import React, { Component } from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  position: relative;
  width: 100%;
  margin-top: 0vh;
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );
  @media (min-width:300px) {
    width: 80%;
  }
  @media (min-width:801px) {
    width: 50%;
  }
  @media (min-width:1024px) {
   width: 55%;
  }
`
const LogoWip = styled.img`
  position: relative;
  z-index: 8;
  margin-top: -2em;
  margin-right: 6em;
  animation-name: bcCCNc;
  animation-duration: 2s;
  @media (min-width:300px) {
    width: 100%;
  }
  @media (min-width:801px) {
    width: 50%;
  }
  @media (min-width:1024px) {
   width: 55%;
  }
`
export default class componentName extends Component {
  render () {
    return (
      <div className="text-center">
        <LogoWip src="static/img/logofinals.png" alt="WIP CAMP" />
        <Logo src="static/img/LogoCana.png" alt=" WIP Camp #11 ,คณะเทคโนโลยีสารสนเทศ , มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี " />
      </div>
    )
  }
}