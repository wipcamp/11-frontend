import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox, IconBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Background from '../Core/Background'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'

const Icon = styled(IconBox)`
  width:5em;
`

const IconInfo = [
  { icon: '/static/img/icon-what/w11.png', text: 'Java Programming', t: 'Java Programming' },
  { icon: '/static/img/icon-what/w14.png', text: 'HTML5&CSS3', t: 'HTML5&CSS3' },
  { icon: '/static/img/icon-what/w12.png', text: 'IT Fundamentals', t: 'IT Fundamentals' },
  { icon: '/static/img/icon-what/w13.png', text: 'Network', t: 'Network' }
]

const WhatText = [
  'ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้มีความสนใจด้านไอที หรือผู้ต้องการค้นหาตนเอง โดยน้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริง ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน',
  'WIP Camp ประกอบด้วยการเรียน และลงมือปฏิบัติจริงด้านวิชาการ ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน',
  'กว่าทศวรรษที่ WIP Camp ขอเป็นก้าวเล็ก ๆ ในการช่วยเหลือน้อง ๆ ให้ค้นพบกล่องดวงใจที่ทุกคนตามหา และเดินตามเส้นทางความฝันที่น้อง ๆ หวังไว้ !!'
]

export default class index extends Component {
  render () {
    return (
      <Bg>
        <Wippo wippo='wippoWhat.png' />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                <div className="text-center col-12">
                  <h1><Headline>What</Headline></h1>
                </div>
                <PDBox>
                  <div className="col-12">
                    <div className="text-center">
                      <Subtitle>ค่ายนี้คืออะไร ?</Subtitle>
                    </div>
                    <Paragraph>
                      { WhatText.map((info, i) => (
                        <Font key = {i}>
                        &nbsp;&nbsp;&nbsp;&nbsp;{info}
                        </Font>
                      ))
                      }
                    </Paragraph>
                  </div>
                  <div className="row text-center mt-2">
                    {
                      IconInfo.map((info, i) => (
                        <div key={i} className="col-3 col-md-3 p-1">
                          <Icon src={info.icon} alt={info.t} />
                          <Small><Font>{info.text}</Font></Small>
                        </div>
                      ))
                    }
                  </div>
                </PDBox>
              </div>
            </div>
          </div>
        </div>
      </Bg>
    )
  }
}
