import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Model from '../Core/Model'

export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            <div className="row justify-content-center">
              <Headline>Sponsor</Headline>
            </div>
            <div className="row justify-content-center">
              <PDBox className="pr-1 pl-1">
                <div className="col-12">
                  <div className="row justify-content-center">
                    <Subtitle className="mb-4"><b>ผู้สนับสนุน</b></Subtitle>
                  </div>
                </div>
              </PDBox>
            </div>
            <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
          </div>
        </div>
      </div>
    )
  }
}
