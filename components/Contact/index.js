import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph } from '../Core/Texts'
import {WDBox ,MTBox} from '../Core/ResponBox'
import Logo from './Logo'
import Fbfeed from './Fbfeed'

const BoxStyle = styled.div`
    background: rgba(196, 196, 196, 0.73);
    padding:0;
`

const FbBox = styled(WDBox)`
    width: 500px;
`

const Div = styled(MTBox)`
    margin-top:5em;
`
const Div1 = styled(MTBox)`
    text-align : center;
    margin-top:5em;
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

const Head = styled.div`
  text-align : center;  
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

export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <Head className="text-center col-12">
            <Headline>Contact</Headline>
          </Head>
        </div>
        <div className="container">
          <BoxStyle className="row justify-content-center">
            <FbBox className="pt-3 pb-3 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Fbfeed />
            </FbBox>
            <div className="w-auto"></div>
            <Div className="pl-1 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <Logo img="../../static/img/social/instagram.png" link="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" />
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <Logo img="../../static/img/social/instagram.png" link="https://twitter.com/WIPCamp" />
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <Logo img="../../static/img/social/instagram.png" link="https://www.instagram.com/wipcamp/" />
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <Logo img="../../static/img/social/instagram.png" link="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" />
                </div>
              </div>
              <div className="w-auto"></div>
              <Div1 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <DivCon>
                  <a href="tel://02-107-3576"><Img src="../../static/img/social/instagram.png" /></a>
                </DivCon>
                <DivCon>
                  &nbsp;&nbsp;
                </DivCon>
                <DivCon>
                  <Paragraph><TextA href="tel://02-107-3576">02-107-3576</TextA></Paragraph>
                </DivCon>
              </Div1>
              <div className="w-auto"></div>
              <Div1 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <DivCon>
                  <a href="mailto:wippo@wipcamp.com"><Img src="../../static/img/social/instagram.png" /></a>
                </DivCon>
                <DivCon>
                  &nbsp;&nbsp;
                </DivCon>
                <Font>
                  <Paragraph><TextA href="mailto:wippo@wipcamp.com">wippo@wipcamp.com</TextA></Paragraph>
                </Font>
              </Div1>
            </Div>
          </BoxStyle>
        </div>
      </div>
    )
  }
}
