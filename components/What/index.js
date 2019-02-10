import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox, IconBox } from '../Core/ResponBox'
import Model from '../Core/Model'
import Bg from '../Core/Bg'
import Wippo from '../Core/Wippo'
import Background from '../What/background'

const Icon = styled(IconBox)`
  width:5em;
`
const Desktop = styled.div`
  @media(min-width:320px) {
    display:none;
  }
  @media (min-width:410px) {
    display:none;
  }
  @media (min-width:576px) {
    display:none;
  }
  @media (min-width:768px) {
    display:block;
  }
  @media(min-width:1024px) {
    display:block;
  }
`
const Moblie = styled.div`
  @media(min-width:320px) {
    display:block;

  }
  @media (min-width:410px) {
    display:block;
  }
  @media (min-width:576px) {
    display:block;
  }
  @media (min-width:768px) {
    display:none;
  }
  @media(min-width:1024px) {
    display:none;
  }
`

const IconInfo = [
  { icon: '/static/img/icon-what/w11.png', text: 'Java Programming', t: 'Java Programming' },
  { icon: '/static/img/icon-what/w14.png', text: 'HTML5&CSS3', t: 'HTML5&CSS3' },
  { icon: '/static/img/icon-what/w12.png', text: 'IT Fundamentals', t: 'IT Fundamentals' },
  { icon: '/static/img/icon-what/w13.png', text: 'Network', t: 'Network' }
]

const WhatText = [
  {   
  text :'&nbsp;&nbsp;&nbsp;&nbsp;ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้ที่มีความสนใจทางด้าน "ไอที" <br /> โดยน้อง ๆ จะได้รับบทบาทเป็นนินจาที่กำลังค้นหาเส้นทางชีวิตของตนเอง ณ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน <br /> &nbsp;&nbsp;&nbsp;&nbsp;เหล่านินจาที่เข้ามาในสำนักแห่งนี้ จะได้เรียนรู้ และฝึกฝนวิชาทางด้านวิชาการ รวมไปถึงได้รับความสนุกสนานจากกิจกรรมของเหล่าศิษย์พี่ในสำนัก !!<br /> &nbsp;&nbsp;&nbsp;&nbsp;สำนัก WIP Camp นี้ก่อตั้งมาแล้วจนถึงปีที่ 11 เพื่อรอนินจาผู้เหมาะสมสำหรับคัมภีร์ลับในตำนาน ที่สามารถดลบันดาลสิ่งที่หวัง แล้วน้อง ๆ ล่ะ คือคนที่เหมาะสมคนนั้นหรือเปล่า...'
  },
  {   
  text1:'&nbsp;&nbsp;&nbsp;&nbsp;ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้ที่มีความสนใจทางด้าน "ไอที" <br /> &nbsp;&nbsp;&nbsp;&nbsp;โดยน้อง ๆ จะได้รับบทบาทเป็นนินจาที่กำลังค้นหาเส้นทางชีวิตของตนเอง ณ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน <br /> &nbsp;&nbsp;&nbsp;&nbsp;เหล่านินจาที่เข้ามาในสำนักแห่งนี้ จะได้เรียนรู้ และฝึกฝนวิชาทางด้านวิชาการ รวมไปถึงได้รับความสนุกสนานจากกิจกรรมของเหล่าศิษย์พี่ในสำนัก !! <br /> &nbsp;&nbsp;&nbsp;&nbsp;สำนัก WIP Camp นี้ก่อตั้งมาแล้วจนถึงปีที่ 11 เพื่อรอนินจาผู้เหมาะสมสำหรับคัมภีร์ลับในตำนาน ที่สามารถดลบันดาลสิ่งที่หวัง แล้วน้อง ๆ ล่ะ คือคนที่เหมาะสมคนนั้นหรือเปล่า...'
  }
]

export default class index extends Component {
  render () {
    return (
      <Bg>
        <Wippo src='../../static/img/wippo/wippoWhat.png' />
        <Background />
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
                        <React.Fragment key = {i}>
                        <Desktop>
                          <Font>
                            <div dangerouslySetInnerHTML={{ __html: info.text }} />
                          </Font>
                        </Desktop>
                        <Moblie>
                          <Font>
                            <div dangerouslySetInnerHTML={{ __html: info.text1 }} />
                          </Font>
                        </Moblie>
                        </React.Fragment>
                      ))
                      }
                    </Paragraph>
                  </div>
                  <div className="row text-center mt-2 ml-1 mr-1">
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
