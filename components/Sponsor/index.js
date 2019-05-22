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
  height: 40px;
  margin: 1em;
  @media(min-width:320px){
    height:30px;
    margin: 0.7em;
  }
  @media(min-width:321px){
    height:38px;
    margin: 0.7em;
  }
  @media (min-width:412px) {
    height:42px;
  }
  @media (min-width:576px) {
    height:40px;
  }
  @media (min-width:768px) {
    height:45px;
  }
  @media (min-width:1024px) {
    height:50px;
  }
  @media (min-width:1366px){
    height:50px;
  }
`
const SponBox = styled.div`
  background: rgba(248, 233, 214, 0.73);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width:320px) {
    padding : 0em 0em 0.5em;
    margin : 0.5em 0.5em ;
  }
   @media (min-width:576px) {
    padding : 1em 2em;
  }
  @media (min-width:1024px) {
    padding : 0.5em 5em 2em;
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
                <SponBox>
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <Subtitle className="mb-1"><b>ผู้สนับสนุน</b></Subtitle>
                    </div>
                    {/* <SponsorAxios /> */}
                    <div className = "row justify-content-center">
                      <a href = 'https://bangmod.cloud/'>
                        <SponsorStyle src = '../../static/img/sponsors/bangmod.png' alt = 'Bangmod Cloud'/>
                      </a>
                      <a href = 'https://www.dek-d.com/'>
                        <SponsorStyle src = '../../static/img/sponsors/dek-d.png' alt = 'Dek-D'/>
                      </a>
                      <a href = 'http://www.stream.co.th/' >
                        <SponsorStyle src = '../../static/img/sponsors/stream-it-logo.png' alt = 'Koh Kae' />
                      </a>
                      <a href = 'https://www.lnwshop.com/' >
                        <SponsorStyle src = '../../static/img/sponsors/lnw@2x.png' alt = 'lnw' />
                      </a>
                      <a href = 'https://www.pathosting.co.th/' >
                        <SponsorStyle src = '../../static/img/sponsors/pat.png' alt = 'P&T Hosting' />
                      </a>
                      <a href = 'https://moxga.com/'>
                        <SponsorStyle src = '../../static/img/sponsors/MOXGA.png' alt = "MOXGA : Dream is Possible" />
                      </a>
                      <a href = 'http://bowbakery.co.th/en/'>
                        <SponsorStyle src = '../../static/img/sponsors/bow.png' alt = 'Bow Bakery House'/>
                      </a>
                      <a href = 'https://www.lactasoy.com/th/' className = "ml-1 mr-1">
                        <SponsorStyle src = '../../static/img/sponsors/lactasoy.png' alt = 'Lactasoy'/>
                      </a>
                      <a href = 'http://www.yipintsoi.com/' >
                        <SponsorStyle src = '../../static/img/sponsors/yip.png' alt = 'YIP IN TSOI' />
                      </a>
                      <a href = 'https://www.koh-kae.com/th/' >
                        <SponsorStyle src = '../../static/img/sponsors/kohkae-logo-th.png' alt = 'Koh Kae' />
                      </a>
                      <a href = 'http://www.thaibev.com/' >
                        <SponsorStyle src = '../../static/img/sponsors/thaibev2.png' alt = 'Thai Beverage' />
                      </a>
                      <a href = '' >
                        <SponsorStyle src = '../../static/img/sponsors/eisa.png' alt = 'EISA' />
                      </a>
                      <a href = 'http://www.premier-marketing.co.th/' >
                        <SponsorStyle src = '../../static/img/sponsors/pmg-logo-p.png' alt = 'Premier Marketing' />
                      </a>
                    </div>
                  </div>
                </SponBox>
              </div>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}
