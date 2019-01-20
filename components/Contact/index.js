import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph } from '../Core/Texts'
import Model from '../Core/Model'
import { WDBox, MTBox, PDBox } from '../Core/ResponBox'
import Logo from './Logo'
import Fbfeed from './Fbfeed'

const Img = styled.img`
    width:3em;
    @media (min-width:320px) {
      width:1em;
    }
    @media (min-width:420px) {
      width:1em;
    }
    @media (min-width:576px) {
      width:3em;
    }
    @media (min-width:768px) {
      width:3em;
    }
    @media (min-width:1024px) {
      width:3em;
    }
`

const DivCon = styled.div`
  display: inline-block;
`

const Font = styled.div`
  display: inline-block;
  @media (min-width:320px) {
    font-size: 0.8em;
  }
`

const TextA = styled.a`
  color:black;
  &:hover{
    text-decoration:none;
    color:black;
  }
`

const PDBox1 = styled(PDBox)`
  background-color : unset;
`
const MiddleOfTheRight = styled.div`
  @media (min-width:992px){
    transform: translate(0, 50%);
  }
`
const RightContent = () => (
  <div className="col-12 col-sm-12 col-lg-6 text-center">
    <MiddleOfTheRight>
      <div className="row justify-content-center">
        <div className="col-3 col-lg-3">
          <Logo img="../../static/img/social/instagram.svg" link="https://www.instagram.com/wipcamp/" />
        </div>
        <div className="col-3 col-lg-3">
          <Logo img="../../static/img/social/twitter.svg" link="https://twitter.com/WIPCamp" />
        </div>
        <div className="col-3 col-lg-3">
          <Logo img="../../static/img/social/youtube.svg" link="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" />
        </div>
        <div className="col-3 col-lg-3">
          <Logo img="../../static/img/social/line@.svg" link="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" />
        </div>
      </div>
      <div className="row">
        <div className="mt-4 col-12">
          <DivCon>
            <a href="tel://02-107-3576">
              <Img className = "mr-1" src="../../static/img/social/phone.svg" />
            </a>
          </DivCon>
          <DivCon>
            <Paragraph>
              <TextA href="tel://02-107-3576">02-107-3576</TextA>
            </Paragraph>
          </DivCon>
        </div>
        <div className="mt-4 mb-4 col-12">
          <DivCon>
            <a href="mailto:wippo@wipcamp.com">
              <Img Img className = "mr-1" src="../../static/img/social/mail.svg" />
            </a>
          </DivCon>
          <Font>
            <Paragraph>
              <TextA href="mailto:wippo@wipcamp.com">wippo@wipcamp.com</TextA>
            </Paragraph>
          </Font>
        </div>
      </div>
    </MiddleOfTheRight>
  </div>
)
export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row justify-content-center">
              <Headline>Contact</Headline>
            </div><PDBox>
              <div className="row justify-content-center">

                <Subtitle className = "text-center col-12"><b>ติดต่อเรา</b></Subtitle>
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-lg-6 text-center mb-3">
                    <Fbfeed/>
                  </div>
                  <RightContent />
                </div>

              </div></PDBox>
            <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
          </div>
        </div>
      </div>
    )
  }
}
