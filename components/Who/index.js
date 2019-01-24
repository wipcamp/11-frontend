import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox, IconBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Background from '../Core/Background'

const TextBoxColor = styled.div`
  background: #172D38;

  @media (min-width:320px) {
    padding : 0.35em 0.35em;
    margin : 1em 0em ;
  }
  @media (min-width:412px) {
    padding : 1em 1em;
    margin : 1 0em ;
  }
   @media (min-width:576px) {
    padding : 1em 2em;
  }
  @media (min-width:768px) {
    padding : 1em 1em;
    margin : 0 0.5em ;
  }
  @media (min-width:1024px) {
    padding : 0em 1em;
  }
`

const Icon1 = styled.img`
  @media (min-width:320px) {
    width: 45px;
    height: 45px;
  }
  @media (min-width:412px) {
    width: 65px;
    height: 65px;
  }

  @media (min-width:1024px) {
    width: 70px;
    height: 70px;
  }
 `

const TextPosition = styled.div`  
  margin-left:1em;
  transform: translate(0, 10%);
  @media (min-width:768px){
    transform: translate(0, 50%);
  }
`
export const Font1 = styled.p`
color : #fff;
  @media (min-width:320px) {
    margin-left : 8px;
    margin-top : 2px;
    font-size: 12px;
  }
  @media (min-width:412px) {
    font-size: 14px;
    margin-left : 20px;
    margin-top : 10px;
  }
  @media (min-width:576px) {
    font-size: 15px;
    margin-left : 20px;
    margin-top : 5px;
  }
  @media (min-width:768px) {
    font-size: 15px;
    margin-left : -25px;
    margin-top : 10px;
  }
  @media (min-width:1024px) {
    font-style: normal;
    font-size: 16px;
    margin-left : -25px;
    margin-top : 13px;
  }
`
const IconInfo = [
  { icon: '/static/img/icon-who/moon.png', text: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้ตลอดระยะเวลา 5 วัน 4 คืน' },
  { icon: '/static/img/icon-who/graduate.png', text: 'น้อง ๆ มัธยมศึกษาตอนปลายแผนการเรียนวิทย์-คณิต ศิลป์-คำนวณ' },
  { icon: '/static/img/icon-who/person.png', text: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง' },
  { icon: '/static/img/icon-who/computer.png', text: 'น้อง ๆ ที่มีความสนใจด้านไอทีหรือต้องการค้นหาตนเองเพื่อศึกษาต่อ' }
]

export default class componentName extends Component {
  render () {
    return (
      <Background bgImageUrl = "static/img/who.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <h1><Headline>Who</Headline></h1>
              <div className="row justify-content-center">
                <PDBox>
                  {IconInfo.map((data, i) => (
                    <div className="my-2 mx-1" key={i}>
                      <TextBoxColor>
                        <div className="row">
                          <div className ="col-2" >
                            <Icon1 key={i} src={data.icon} />
                          </div>
                          <div className="col-10 pl-0">
                            <TextPosition>
                              <Paragraph>
                                <Font1 key={i}>{data.text}</Font1>
                              </Paragraph>
                            </TextPosition>
                          </div>
                        </div>
                      </TextBoxColor>
                    </div>
                  ))}
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
