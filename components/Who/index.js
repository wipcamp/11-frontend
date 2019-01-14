import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small } from '../Core/Texts'
import { PDBox, IconBox } from '../Core/ResponBox'
import Box from './Textbox'

const BoxStyle = styled(PDBox)`
  background: rgba(196, 196, 196, 0.73);
  text-align : left;
  width: 100%;
`

const TextBoxColor = styled(PDBox)`
  background: #DE5454;
  text-align : left;
`

const Icon = styled(IconBox)`
  width:7em;
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
              {IconInfo.map((data, i) => (
                <div className="my-5">
                  <TextBoxColor>
                    <div className="media" key={i}>
                      <Icon src={data.icon} alt="" />
                      <div className="media-body">
                        <Paragraph>{data.text}</Paragraph>
                      </div>
                    </div>
                  </TextBoxColor>
                </div>
              ))}
            </BoxStyle>
          </div>
        </div>
      </div>
    )
  }
}
