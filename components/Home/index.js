import React, { Component } from 'react'
import styled from 'styled-components'
import Background from './background'
import Model from '../Core/Model'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'

const Logo = styled.img`
  position: relative;
  width: 100%;
  margin-top: 0vh;
  @media (min-width:300px) {
    width: 50%;
  }
  @media (min-width:801px) {
    width: 45%;
  }
  @media (min-width:768px) {
    width: 30%;
  }
  @media (min-width:1024px) {
    width: 25%;
  }
`
const LogoWip = styled.img`
  position: relative;
  z-index: 8;
  width: 90%;
  margin-top: 0vh;
  @media (min-width:320px) {
    width: 80%;
    margin-top: 7.5vh;
  }
  @media (min-width:768px) {
    width: 75%;
    margin-top: 7vh;
  }
  @media (min-width:801px) {
    width: 40%;
    margin-top: 2.5vh;
  }

  @media (min-width:1024px) {
   width: 40%;
   margin-top: -0.5vh;
  }
`

export default class componentName extends Component {
  render () {
    return (
      <Bg>
        <Wippo src='../../static/img/wippo/wippoHome.png' />
        <Background />
        <div className ="container">
          <div className="row text-center pt-1">
            <div className="col-12">
              <LogoWip src="static/img/Logo.png" alt="WIP CAMP" />
            </div>
            <div className="col-12">
              <Logo src="static/img/LogoCana.png" alt=" WIP Camp #11 ,คณะเทคโนโลยีสารสนเทศ , มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี " />
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}
