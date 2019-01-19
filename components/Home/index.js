import React, { Component } from 'react'
import styled from 'styled-components'
import Background from '../Core/Background'
import Model from '../Core/Model'

const Logo = styled.img`
  position: relative;
  width: 100%;
  margin-top: 0vh;
  @media (min-width:300px) {
    width: 60%;
  }
  @media (min-width:801px) {
    width: 45%;
  }
  @media (min-width:1024px) {
    width: 40%;
  }
`
const LogoWip = styled.img`
  position: relative;
  z-index: 8;
  width: 90%;
  margin-top: 8vh;
  @media (min-width:801px) {
    width: 50%;
  }
  @media (min-width:1024px) {
   width: 60%;
  }
`

const Wippo = styled.div`
  position : absolute;
  height : 30vh;
  bottom : 0vh;
  transform: translate(-50%, 0%);
  left: 50vw;
  @media (min-width: 970px) {
    height : auto;
    width: 100vw;
  }
`
export default class componentName extends Component {
  render () {
    return (

      <Background bgImageUrl="static/img/home7.png">
        <div className ="container">
          <div className="row text-center pt-1">
            <div className="col-12">
              <LogoWip src="static/img/Logo.png" alt="WIP CAMP" />
            </div>
            <div className="col-12">
              <Logo src="static/img/LogoCana.png" alt=" WIP Camp #11 ,คณะเทคโนโลยีสารสนเทศ , มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี " />
            </div>
            <Wippo>
              <Model className="center" wippo='static/img/wippo/original-1.png' alt="wippo" />
            </Wippo>
          </div>
        </div>
      </Background>
    )
  }
}
