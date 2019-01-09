import React, { Component } from 'react'
import Box from './Textbox'
import styled from 'styled-components'
import Headline, { Subtitle, Paragraph, Small } from '../Core/Texts'

const BoxStyle = styled.div`
  background: #d29ea4;
  text-align : left;
  width: 100%;
`

const TextBoxColor = styled.div`
  background: #960018;
  text-align : left;

    @media (min-width:320px) {
    padding : 1.5em 1em;
    }
  
    @media (min-width:576px) {
    padding : 1em 2em;
    }
  
    @media (min-width:1024px) {
    padding : 2em 5em;
    }
`

const Icon = styled.img`
width:7em;
  @media (min-width:320px) {
    width:4em;
  }
  @media (min-width:420px) {
   
    width:5em;
  }
  @media (min-width:576px) {
    margin-top: 2%;
    width:5em;
  }
  @media (min-width:768px) {
    margin-top: 5%;
    width:7em;
  }
  @media (min-width:1024px) {
    margin-top: 5%;
    padding: .2em;
    width:7em;
  }
`

const Head = styled.div`
text-align : center;

`
const Layout = styled.div`  
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid transparent;
  border-radius: 2em;
  padding:2em;
`
export default class componentName extends Component {
  render () {
    return (
      <div className="container px-3">
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
        <div className="row">
          <Head className="text-center col-12">
            <Headline>Who</Headline>
            <Subtitle>ค่ายนี้เหมาะสำหรับใคร?</Subtitle>
          </Head>
        </div>
        <div className="container">
          <div className="row justify-content-center">

            <BoxStyle className="col-12 col-sm-12 col-md-12 col-lg-10 p-5">
              <TextBoxColor>
                <Icon src="static/img/icon-who/computer.png" alt="computer" />
              </TextBoxColor>
              <div className="my-5">
                <TextBoxColor>
                  <Icon src="static/img/icon-who/graduate.png" alt="การศึกษา" />
                </TextBoxColor>
              </div>
              <div className="my-5">
                <TextBoxColor>
                  <Icon src="static/img/icon-who/person.png" alt="เหมาะสำหรับ" />
                </TextBoxColor>
              </div>
              <div className="my-5">
                <TextBoxColor>
                  <Icon src="static/img/icon-who/moon.png" alt="ระยะเวลา" />
                </TextBoxColor>
              </div>
            </BoxStyle>
          </div>
        </div>
      </div>
    )
  }
}
