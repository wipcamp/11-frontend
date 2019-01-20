import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph } from '../Core/Texts'
import Model from '../Core/Model'
import { WDBox, MTBox, PDBox } from '../Core/ResponBox'
import Logo from './Logo'
import Fbfeed from './Fbfeed'

const FbBox = styled(WDBox)`
    width: 500px;
    @media (min-width:576px) {
      text-align:center;
    }
    @media (min-width:768px) {
      text-align:center;
    }
`

const Div = styled(MTBox)`
    margin-top:5em;
    @media (min-width:768px) {
      margin-left: -5em;
    }
    @media (min-width:1024px) {
      margin-left: -5em;
    }
`

const Div1 = styled(MTBox)`
    margin-top:5em;
    @media (min-width:320px) {
      margin-left:4em;
    }
    @media (min-width:414px) {
      margin-left:8em;
    }
    @media (min-width:576px) {
      margin-left:10em;
    }
    @media (min-width:768px) {
      margin-left:18em;
    }
    @media (min-width:1024px) {
      margin-left :10em;
    }
`
const Div2 = styled.div`
    @media (min-width:320px) {
      margin-left:-1em;   
    }
    @media (min-width:420px) {
      margin-left:-1em;   
    }
    @media (min-width:576px) {
      margin-left:.5em;   
    }
    @media (min-width:768px) {
      margin-left:10em;
    }
`

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
export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            <Headline>Contact</Headline>
            <PDBox1 className="pr-1 pl-1">
              <div className="row justify-content-center">
                <div className="row col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-0">
                  <Subtitle className = "text-center col-12"><b>ติดต่อเรา</b></Subtitle>
                  <FbBox className="pt-4 pb-4 mr-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <Fbfeed />
                  </FbBox>
                  <Div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <Div2 className="row justify-content-center">
                      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <Logo img="../../static/img/social/instagram.svg" link="https://www.instagram.com/wipcamp/" />
                      </div>
                      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <Logo img="../../static/img/social/twitter.svg" link="https://twitter.com/WIPCamp" />
                      </div>
                      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <Logo img="../../static/img/social/youtube.svg" link="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" />
                      </div>
                      <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <Logo img="../../static/img/social/line@.svg" link="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" />
                      </div>
                    </Div2>
                    <div className="row">
                      <Div1 className="mt-4 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <DivCon>
                          <a href="tel://02-107-3576"><Img src="../../static/img/social/phone.svg" /></a>
                        </DivCon>
                        <DivCon>
                  &nbsp;&nbsp;
                        </DivCon>
                        <DivCon>
                          <Paragraph><TextA href="tel://02-107-3576">02-107-3576</TextA></Paragraph>
                        </DivCon>
                      </Div1>
                      <Div1 className="mt-4 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <DivCon>
                          <a href="mailto:wippo@wipcamp.com"><Img src="../../static/img/social/mail.svg" /></a>
                        </DivCon>
                        <DivCon>
                  &nbsp;&nbsp;
                        </DivCon>
                        <Font>
                          <Paragraph><TextA href="mailto:wippo@wipcamp.com">wippo@wipcamp.com</TextA></Paragraph>
                        </Font>
                      </Div1>
                    </div>
                  </Div>
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
