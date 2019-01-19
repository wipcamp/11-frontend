import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox, IconBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Box from './Textbox'

const TextBoxColor = styled(PDBox)`
  background: #DE5454;
`

const Icon = styled(IconBox)`
  width:7em;
  margin-bottom: 5%;
`

const TextPosition = styled.div`  
  transform: translate(0, 50%);
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            <div className="row justify-content-center">
              <Headline>Who</Headline>
              <PDBox>
                <Subtitle className = "text-center col-12"><b>ค่ายนี้จัดเมื่อไหร่ ?</b></Subtitle>
                {IconInfo.map((data, i) => (
                  <div className="my-2 mx-1">
                    <TextBoxColor>
                      <div className="row" key={i}>
                        <div className ="col-3">
                          <Icon src={data.icon} />
                        </div>
                        <div className="col-9">
                          <TextPosition>
                            <Paragraph>
                              <Font>{data.text}</Font>
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
    )
  }
}
