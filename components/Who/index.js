import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Paragraph, Subtitle , FontWho } from '../Core/Texts'
import { PDBox, TextBoxWho, IconWho } from '../Core/ResponBox'
import Model from '../Core/Model'
import Bg from '../Core/Bg'
import Background from './background'
import Wippo from '../Core/Wippo'

const TextPosition = styled.div`  
  margin-left:1em;
  @media (min-width:320px){
    transform: translate(0%, 20%);
  }
  @media (min-width:414px){
    transform: translate(5%, 10%);
  }
  @media (min-width:570px){
    transform: translate(5%, 10%);
    margin-left:5px;
  }

  @media (min-width:768px){
    transform: translate(0, 50%);
  }
  @media (min-width:1024px){
    transform: translate(0, 50%);
    font-size:12px;
  }
`

const IconInfo = [
  { icon: '/static/img/icon-who/computer.png', text: 'น้อง ๆ ที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทางเดินของตัวเอง' },
  { icon: '/static/img/icon-who/graduate.png', text: 'น้อง ๆ มัธยมศึกษาตอนปลาย "ทุกแผนการเรียน" สามารถสมัครค่ายได้' },
  { icon: '/static/img/icon-who/bed.png', text: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้ตลอดระยะเวลา 5 วัน 4 คืน' },
  { icon: '/static/img/icon-who/person.png', text: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง โดยมีเอกสารเป็นลายลักษณ์อักษรที่ถูกต้อง' }
]

export default class componentName extends Component {
  render () {
    return (
      <Bg>
        <Wippo src='../../static/img/wippo/wippoWho.png' />
        <Background />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <h1><Headline>Who</Headline></h1>
              <div className="row justify-content-center">
                <PDBox>
                  <div className="text-center">
                    <Subtitle>ค่ายนี้เหมาะกับใคร ?</Subtitle>
                  </div>
                  {IconInfo.map((data, i) => (
                    <div className="my-2 mx-3" key={i}>
                      <TextBoxWho>
                        <div className="row">
                          <div className ="col-2" >
                            <IconWho key={i} src={data.icon} />
                          </div>
                          <div className="col-10 pl-0">
                            <TextPosition>
                              <Paragraph>
                                <FontWho key={i}>{data.text}</FontWho>
                              </Paragraph>
                            </TextPosition>
                          </div>
                        </div>
                      </TextBoxWho>
                    </div>
                  ))}
                </PDBox>
              </div>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}
