import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import TextBoxLong from './TextBoxLong'

const datenow = dayjs().format()
const date1 = dayjs('2019-01-08')
const date2 = dayjs('2019-01-12')
const date3 = dayjs('2019-01-20')
const date4 = dayjs('2019-01-31')

const BoxStyle = styled.div`
    background: rgba(196, 196, 196, 0.73);
    text-align : center;
`
const Img = styled.img`
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

const ImgChangeDay = () => (
  <div className="row">
    <BoxStyle className="col-12 col-sm-6 col-xl-3">
      <Img src={date1.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
      <span>
        <TextBoxLong text="กำหนดเปิดรับสมัคร" textday="8 มกราคม 2562 - 13 มกราคม 2562"/>
      </span>
    </BoxStyle>
    <div class="w-auto"></div>
    <BoxStyle className="col-12 col-sm-6 col-xl-3">
      <Img src={date2.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
      <span>
        <TextBoxLong text="กำหนดปิดรับสมัคร" textday="13 มกราคม 2562"/>
      </span>
    </BoxStyle>
    <div class="w-auto"></div>
    <BoxStyle className="col-12 col-sm-6 col-xl-3">
      <Img src={date3.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
      <span>
        <TextBoxLong text="วันประกาศผล" textday="21 มกราคม 2562"/>
      </span>
    </BoxStyle>
    <div class="w-auto"></div>
    <BoxStyle className="col-12 col-sm-6 col-xl-3">
      <Img src={date4.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
      <span>
        <TextBoxLong text="วันเปิดค่าย" textday="1 กุมภาพันธ์"/>
      </span>
    </BoxStyle>
  </div>
)

export default ImgChangeDay
