import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small } from '../Core/Texts'
import { PDBox, IconBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Box from './Textbox'

const BoxStyle = styled(PDBox)`
  background: rgba(196, 196, 196, 0.4);
  text-align : left;
  
 
 
`

const TextBoxColor = styled(PDBox)`
  background: #DE5454;
  text-align : left;


`

const Icon = styled(IconBox)`
    width : 7em;
`

const Head = styled.div`
  text-align : center;
`
const TextInBox = styled.div`
  font-size :16px;
  margin-top : 12%;
  margin-left : 5%;


`

const IconInfo = [
  { icon: '/static/img/icon-who/moon.png', text: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้ตลอดระยะเวลา 5 วัน 4 คืน' },
  { icon: '/static/img/icon-who/graduate.png', text: 'น้อง ๆ มัธยมศึกษาตอนปลายแผนการเรียนวิทย์-คณิต ศิลป์-คำนวณ' },
  { icon: '/static/img/icon-who/person.png', text: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง' },
  { icon: '/static/img/icon-who/computer.png', text: 'น้อง ๆ ที่มีความสนใจด้านไอทีหรือต้องการค้นหาตนเองเพื่อศึกษาต่อ' }
]

export default class componentName extends Component {
  render() {
    return (
      <div className="container">

        <Head className="text-center col-12">
          <Headline>Who</Headline>
        </Head>
        <div className="container">
          <div className="row justify-content-center">
            <BoxStyle className="col-12 col-sm-12 col-md-12 col-lg-125">
              <Subtitle className="row justify-content-center"><b>ค่ายนี้เหมาะสำหรับใคร?</b></Subtitle>
              {IconInfo.map((data, i) => (
                <div className="my-4 mx-5 ">
                  {/* <TextBoxColor> */}
                  <div className="media" key={i}>
                    <Icon src={data.icon} alt="" />
                    <div className="media-body">
                      <TextInBox>{data.text}</TextInBox>
                    </div>
                  </div>
                  {/* </TextBoxColor> */}
                </div>
              ))}
            </BoxStyle>
          </div>
        </div>
        <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
      </div>
    )
  }
}
