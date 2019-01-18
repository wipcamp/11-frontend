import React, { Component } from 'react'
import styled from 'styled-components'

import ImgChangeByDay from './ImgChangeByDay'
import Model from '../Core/Model'
import Background from '../Core/Background'
import Headline, { Subtitle } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'

const Head = styled.div`
  text-align : center;
`

const BoxStyle = styled(PDBox)`
    background: rgba(196, 196, 196, 0.4);
`

export default class componentName extends Component {
  render () {
    return (
      <Background bgImageUrl = "static/img/when.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                <Head className="text-center col-12">
                  <Headline>When</Headline>
                </Head>
                <BoxStyle className="pr-1 pl-1">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <Subtitle className="mb-4"><b>ค่ายนี้จัดเมื่อไหร่ ?</b></Subtitle>
                    </div>
                    <ImgChangeByDay />
                  </div>
                </BoxStyle>
              </div>
              <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}
