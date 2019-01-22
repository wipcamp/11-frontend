import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Font } from '../Core/Texts'
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

const ContactBot = (props) => (
  <div>
    <DivCon>
      <a href={props.href}>
        <Img className="mr-1" src={props.src}/>
      </a>
    </DivCon>
    <Fonts>
      <Paragraph>
        <TextA href={props.href}>{props.text}</TextA>
      </Paragraph>
    </Fonts>
  </div>
)

export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row justify-content-center">
              <h1><Headline>Contact</Headline></h1>
            </div>
            <PDBox1>
              <div className="row justify-content-center">
                <Subtitle className = "text-center col-12"><b>ติดต่อเรา</b></Subtitle>
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-12 col-lg-6 mb-3">
                    <Fbfeed/>
                  </div>
                  <MiddleOfTheRight className="col-12 col-sm-12 col-lg-6 text-center">
                    <div className="row mr-1 ml-1">
                      <Logo img="../../static/img/social/instagram.svg" link="https://www.instagram.com/wipcamp/" />
                      <Logo img="../../static/img/social/twitter.svg" link="https://twitter.com/WIPCamp" />
                      <Logo img="../../static/img/social/youtube.svg" link="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" />
                      <Logo img="../../static/img/social/line@.svg" link="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" />
                    </div>
                    <div className="row">
                      <Div3 className="mt-4 mb-3 col-12">
                        <ContactBot href="tel://02-107-3576" src="../../static/img/social/phone.svg" text= "02-107-3576" />
                      </Div3>
                      <div className="mb-4 col-12">
                        <ContactBot href="mailto:wippo@wipcamp.com" src="../../static/img/social/mail.svg" text = "wippo@wipcamp.com" />
                      </div>
                    </div>
                  </MiddleOfTheRight>
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
