import React, { Component } from 'react'
import styled from 'styled-components'

import ImgChangeByDay from './ImgChangeByDay'
import Model from '../Core/Model'
import Background from '../Core/Background'
import Headline, { Subtitle } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'

export default class componentName extends Component {
  render () {
    return (
      <Background bgImageUrl = "static/img/when.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <h1><Headline>When</Headline></h1>
              <div className="row justify-content-center">
                <div className="text-center">
                  <Subtitle>ค่ายจัดเมื่อไหร่ ?</Subtitle>
                </div>
                <PDBox className="pr-1 pl-1">
                  <div className="ml-lg-5 col-12 col-lg-10">
                    <ImgChangeByDay />
                  </div>
                </PDBox>
              </div>
            </div>
            <Model wippo='wippoWhen.png' alt="wippo" />
          </div>
        </div>
      </Background>
    )
  }
}
