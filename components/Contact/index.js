import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Font} from '../Core/Texts'
import Model from '../Core/Model'
import { WDBox, MTBox, PDBox } from '../Core/ResponBox'
import Logo from './Logo'
import Fbfeed from './Fbfeed'

const Img = styled.img`
  width:2em;
  @media (min-width:992px) {
    width:3em;
  }
`

const DivCon = styled(Font)`
  display: inline-block;
`

const Div3 = styled.div`
  margin-left:-2em;
`

const Fonts = styled.div`
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
    transform: translate(0, 25%);
  }
`
const DivFb = styled.div`
    @media (min-width:320px) {
      
    }
    @media (min-width:576px) {
      text-align:center;
    }
    @media (min-width:768px) {
      text-align:center;
    };
`

const RightContent = () => (
  <div className="col-12 col-sm-12 col-lg-6 text-center">
    <MiddleOfTheRight>
      <div className="row mr-1 ml-1">
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
        <Div3 className="mt-4 mb-3 col-12">
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
        </Div3>
        <div className="mb-4 col-12">
          <DivCon>
            <a href="mailto:wippo@wipcamp.com">
              <Img className = "mr-1" src="../../static/img/social/mail.svg" />
            </a>
          </DivCon>
          <Fonts>
            <Paragraph>
              <TextA href="mailto:wippo@wipcamp.com">wippo@wipcamp.com</TextA>
            </Paragraph>
          </Fonts>
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
            </div>
            <PDBox1>
              <div className="row justify-content-center">
                <Subtitle className = "text-center col-12"><b>ติดต่อเรา</b></Subtitle>
                <div className="row justify-content-center">
                  <div className="p-4 col-12 col-sm-12 col-lg-6 mb-3">
                    <Fbfeed/>
                  </div>
                  <RightContent />
                </div>
              </div>
            </PDBox1>
            <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
          </div>
        </div>
      </div>
    )
  }
}
