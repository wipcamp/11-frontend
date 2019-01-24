import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Background from '../Core/Background'
import Model from '../Core/Model'

export default class index extends Component {
  render () {
    return (
      <Background bgImageUrl = "static/img/game.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <div className="row justify-content-center">
                <h1><Headline>Game</Headline></h1>
              </div>
              <div className="row justify-content-center">
                <PDBox>
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <Subtitle className="mb-4"><b>มาเล่นกันเถอะ</b></Subtitle>
                    </div>
                  </div>
                </PDBox>
              </div>
              <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}
