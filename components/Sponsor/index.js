import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Background, { SponHeadBox, SponTab } from './background'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'
import SponsorAxios from './SponsorAxios'

const Moutain = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
  width: 100%;

  @media(min-width:320px) {
    width:150%;
  }
  @media(min-width:1024px) {
    width: 100%;
  }
`

const SponsorStyle = styled.img`
  position: relative;
  height: 50px;
  margin: 1em;

  @media(min-width:320px){
    height:40px;
  }
  @media (min-width:412px) {
    height:40px;
  }
  @media (min-width:576px) {
    height:45px;
  }
  @media (min-width:768px) {
    height:45px;
  }
  @media (min-width:1024px) {
    height:50px;
  }
  @media (min-width:1366px){
    height:60px;
  }
`

export default class index extends Component {
  render () {
    return (
      <Bg>
        <Wippo src='../../static/img/wippo/wippoSponsor.png' />
        <Background />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <SponTab className="row justify-content-center">
                <SponHeadBox className = "row justify-content-center">
                  <h1 className = "px-5 py-2"><Headline>Sponsors</Headline></h1>
                </SponHeadBox>
              </SponTab>
              <div className="row justify-content-center">
                <PDBox>
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <Subtitle className="mb-4"><b>ผู้สนับสนุน</b></Subtitle>
                    </div>
                    {/* <SponsorAxios /> */}
                    <div className = "row justify-content-center">
                      <a href = 'https://bangmod.cloud/'>
                        <SponsorStyle src = '../../static/img/sponsors/bangmod.png' alt = 'Bangmod Cloud'/>
                      </a>
                      <a href = 'http://bowbakery.co.th/en/'>
                        <SponsorStyle src = '../../static/img/sponsors/bow.png' alt = 'Bow Bakery House'/>
                      </a>
                      <a href = 'https://www.dek-d.com/'>
                        <SponsorStyle src = '../../static/img/sponsors/dek-d.png' alt = 'Dek-D'/>
                      </a>
                      <a href = 'https://www.lactasoy.com/th/' className = "ml-2 mr-2">
                        <SponsorStyle src = '../../static/img/sponsors/lactasoy.png' alt = 'Lactasoy'/>
                      </a>
                      <a href = 'http://www.yipintsoi.com/' className = "ml-2 mr-2">
                        <SponsorStyle src = '../../static/img/sponsors/yip.png' alt = 'YIP IN TSOI' />
                      </a>
                      <a href = 'https://www.koh-kae.com/th/' className = "ml-2 mr-2">
                        <SponsorStyle src = '../../static/img/sponsors/kohkae-logo-th.png' alt = 'Koh Kae' />
                      </a>
                      <a href = 'http://www.stream.co.th/' className = "ml-2 mr-2">
                        <SponsorStyle src = '../../static/img/sponsors/stream-it-logo.png' alt = 'Koh Kae' />
                      </a>
                    </div>
                  </div>
                </PDBox>
              </div>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}
