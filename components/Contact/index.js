import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph } from '../Core/Texts'
import Logo from './Logo'
import Fbfeed from './Fbfeed'

const BoxStyle = styled.div`
    background: rgba(196, 196, 196, 0.73);
    padding:0;
`

const FbBox = styled.div`
    width: 500px;
    @media (min-width:320px) {
      width:3em;
    }
    @media (min-width:420px) {
      width:5em;
    }
    @media (min-width:576px) {
      width:5em;
    }
    @media (min-width:768px) {
      width:7em;
    }
    @media (min-width:1024px) {
      width:7em;
    }
`

const Div = styled.div`
    margin-top:5em;
    @media (min-width:320px) {
        margin-top:1.5em;
    }
    @media (min-width:420px) {
        margin-top:1.5em;
    }
    @media (min-width:576px) {
        margin-top:3em;
    }
    @media (min-width:768px) {
        margin-top:3em;
    }
    @media (min-width:1024px) {
        margin-top:5em;
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
export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <Head className="text-center col-12">
            <Headline>Contact</Headline>
            {/* <Subtitle>ค่ายนี้เหมาะสำหรับใคร?</Subtitle> */}
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
                  <Logo img="../../static/img/social/instagram.png" />
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <Logo img="../../static/img/social/instagram.png" />
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <Logo img="../../static/img/social/instagram.png" />
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <Logo img="../../static/img/social/instagram.png" />
                </div>
              </div>
              <div className="w-auto"></div>
              <Div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <DivCon>
                  <Img src="../../static/img/social/instagram.png" />
                </DivCon>
                <DivCon>
                  &nbsp;&nbsp;
                </DivCon>
                <DivCon>
                  <Paragraph>02-107-3576</Paragraph>
                </DivCon>
              </Div>
              <div className="w-auto"></div>
              <Div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <DivCon>
                  <Img src="../../static/img/social/instagram.png" />
                </DivCon>
                <DivCon>
                  &nbsp;
                </DivCon>
                <Font>
                  <Paragraph>wippo@wipcamp.com</Paragraph>
                </Font>
              </Div>
            </Div>
          </BoxStyle>
        </div>
      </div>
    )
  }
}
