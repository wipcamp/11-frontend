import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import TextBoxLong from './TextBoxLong'

const datenow = dayjs().format()
const date1 = dayjs('2019-01-07')
const date2 = dayjs('2019-01-11')
const date3 = dayjs('2019-01-14')
const date4 = dayjs('2019-01-17')

const BoxStyle = styled.div`
    padding : 0;
    background: papayawhip;
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
      width:7em;
    }
`

const ImgChangeDay = () => (
  <div className="row">
    <BoxStyle className="mr-auto ml-auto col-12 col-sm-6 col-lg-3 col-md-3 col-xl-3">
      <Img src={date1.isBefore(datenow) ? '../../static/img/wippo/original-1.png' : '../../static/img/wippo/original-2.png'} />
      <span>
        <TextBoxLong text="กำหนดเปิดรับสมัคร" textday="8 มกราคม 2562"/>
      </span>
    </BoxStyle>
    <div className="w-auto"></div>
    <BoxStyle className="mr-auto ml-auto col-12 col-sm-6 col-lg-3 col-md-3 col-xl-3">
      <Img src={date2.isBefore(datenow) ? '../../static/img/wippo/original-1.png' : '../../static/img/wippo/original-2.png'} />
      <span>
        <TextBoxLong text="กำหนดปิดรับสมัคร" textday="11 มกราคม 2562"/>
      </span>
    </BoxStyle>
    <div className="w-auto"></div>
    <BoxStyle className="mr-auto ml-auto col-12 col-sm-6 col-lg-3 col-md-3 col-xl-3">
      <Img src={date3.isBefore(datenow) ? '../../static/img/wippo/original-1.png' : '../../static/img/wippo/original-2.png'} />
      <span>
        <TextBoxLong text="วันประกาศผล" textday="14 มกราคม 2562"/>
      </span>
    </BoxStyle>
    <div className="w-auto"></div>
    <BoxStyle className="mr-auto ml-auto col-12 col-sm-6 col-lg-3 col-md-3 col-xl-3">
      <Img src={date4.isBefore(datenow) ? '../../static/img/wippo/original-1.png' : '../../static/img/wippo/original-2.png'} />
      <span>
        <TextBoxLong text="วันเปิดค่าย" textday="17 มกราคม 2562"/>
      </span>
    </BoxStyle>
  </div>
)

export default ImgChangeDay
