import React, { Component } from 'react'
import styled from 'styled-components'

import ImgChangeByDay from './ImgChangeByDay'
import Model from '../Core/Model'
import Background from './background'
import Headline, { Subtitle } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'

const NModel = styled(Model)`
   @media(min-width: 320px) {
        margin-top: -4em;
    }
    @media(min-width: 420px) {
        margin-top: -5em;
    }
    @media(min-width: 576px) {
        margin-top: -5em;
    }
    @media(min-width: 768px) {
        margin-top: -6em;
    }
    @media(min-width: 1024px) {
        margin-top: -9em;
    }
`

const NPDBox = styled(PDBox)`
    @media(min-width: 320px) {
      padding-left:2em;
      padding-right:2em;
    }
    @media(min-width: 420px) {
      padding-left:3em;
      padding-right:3em;
    }
    @media(min-width: 576px) {
      padding-left:4em;
      padding-right:4em;
    }
    @media(min-width: 768px) {
      padding-left:0;
      padding-right:0;
    }
`

const Section = styled.div`
  z-index: 20;
`

export default class componentName extends Component {
  render () {
    return (
      <Bg>
        <Background />
        <Wippo wippo='wippoWhen.png' />
        <Section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-10">
                <h1><Headline>When</Headline></h1>
                <div className="row justify-content-center">
                  <div className="text-center">
                    <Subtitle>ค่ายจัดเมื่อไหร่ ?</Subtitle>
                  </div>
                  <NPDBox className="pt-2 pb-5 pr-md-5 pr-lg-0 pl-md-5 pl-lg-0">
                    <div className="ml-lg-4 mr-lg-4 col-12 col-lg-10">
                      <ImgChangeByDay />
                    </div>
                  </NPDBox>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Bg>
    )
  }
}
