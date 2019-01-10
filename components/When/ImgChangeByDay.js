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
    background: papayawhip;
    text-align : center;

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

const Img = styled.img`
  /* width : 38px;
  height: 48px; */
  /* @media (min-width:320px) {
    width:90%;
  }
  @media (min-width:412px) {
    width:50%;
    margin-top : 6%;
    margin-bottom: 0%; 
  } */
`
const Font = styled.p`
  @media (min-width:320px) {
    font-size: 0.8em;
  }
  @media (min-width:412px) {
    font-size: 0.9em;
  }
  @media (min-width:576px) {
    font-size: 1em;
  }
  @media (min-width:768px) {
    font-size: 1.1em;
  }
  @media (min-width:1024px) {
    font-size: 1.2em;
  }
`

const ImgChangeDay = () => (
  <div className="container">
    <div className="row">
      <BoxStyle className="col">
        <Img src={date1.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
        <Font>
          <TextBoxLong text="กำหนดเปิดรับสมัคร" textday="8 มกราคม 2562 - 13 มกราคม 2562"/>
        </Font>
      </BoxStyle>
      <BoxStyle className="col">
        <Img src={date2.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
        <Font>
          <TextBoxLong text="กำหนดปิดรับสมัคร" textday="13 มกราคม 2562"/>
        </Font>
      </BoxStyle>
      <BoxStyle className="col">
        <Img src={date3.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
        <Font>
          <TextBoxLong text="วันประกาศผล" textday="21 มกราคม 2562"/>
        </Font>
      </BoxStyle>
      <BoxStyle className="col">
        <Img src={date4.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
        <Font>
          <TextBoxLong text="วันเปิดค่าย" textday="1 กุมภาพันธ์"/>
        </Font>
      </BoxStyle>
    </div>
  </div>
)

export default ImgChangeDay
