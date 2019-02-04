import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Background from './background'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'

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

export default class index extends Component {
  render () {
    return (
      <Bg>
        <Wippo wippo='wippoSponsor.png' />
        <Background />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <div className="row justify-content-center">
                <h1><Headline>Sponsor</Headline></h1>
              </div>
              <div className="row justify-content-center">
                <PDBox>
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <Subtitle className="mb-4"><b>ผู้สนับสนุน</b></Subtitle>
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
