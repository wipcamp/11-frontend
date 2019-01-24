import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import TextBoxLong from './TextBoxLong'

const datenow = dayjs().format()
const date1 = dayjs('2019-01-07')
const date2 = dayjs('2019-01-11')
const date3 = dayjs('2019-01-14')
const date4 = dayjs('2019-01-17')

const Img = styled.img`
    width:10em;
    @media (min-width:320px) {
      width:5em;
    }
    @media (min-width:420px) {
      width:7em;
    }
    @media (min-width:576px) {
      width:7em;
    }
    @media (min-width:768px) {
      width:10em;
    }
    @media (min-width:1024px) {
      width:10em;
    }
`

const Font = styled.div`
    @media (min-width:320px) {
      margin-top:2em;
    }
`

const ImgChangeDay = () => (
  <div className="row justify-content-center">
    <div className="row col-12 col-sm-12 col-lg-3 col-md-3 col-xl-3 justify-content-center">
      <div>
        <Img src={date1.isBefore(datenow) ? '../../static/img/wippo/wippoWhat.png' : '../../static/img/wippo/original-2.png'} />
      </div>
      <Font className="p-0 col-6 col-sm-6 col-lg-12 col-md-12 col-xl-12 text-center">
        <TextBoxLong text="กำหนดเปิดรับสมัคร" textday="8 มกราคม 2562"/>
      </Font>
    </div>
    <div className="row col-12 col-sm-12 col-lg-3 col-md-3 col-xl-3 justify-content-center">
      <div>
        <Img src={date2.isBefore(datenow) ? '../../static/img/wippo/wippoWho.png' : '../../static/img/wippo/original-2.png'} />
      </div>
      <Font className="p-0 col-6 col-sm-6 col-lg-12 col-md-12 col-xl-12 text-center">
        <TextBoxLong text="กำหนดปิดรับสมัคร" textday="11 มกราคม 2562"/>
      </Font>
    </div>
    <div className="row col-12 col-sm-12 col-lg-3 col-md-3 col-xl-3 justify-content-center">
      <div>
        <Img src={date3.isBefore(datenow) ? '../../static/img/wippo/wippoWhere.png' : '../../static/img/wippo/original-2.png'} />
      </div>
      <Font className="p-0 col-6 col-sm-6 col-lg-12 col-md-12 col-xl-12 text-center">
        <TextBoxLong text="วันประกาศผล" textday="14 มกราคม 2562"/>
      </Font>
    </div>
    <div className="row col-12 col-sm-12 col-lg-3 col-md-3 col-xl-3 justify-content-center"> 
      <div>
        <Img src={date4.isBefore(datenow) ? '../../static/img/wippo/wippoGame.png' : '../../static/img/wippo/original-2.png'} />
      </div>
      <Font className="p-0 col-6 col-sm-6 col-lg-12 col-md-12 col-xl-12 text-center">
        <TextBoxLong text="วันเปิดค่าย" textday="17 มกราคม 2562"/>
      </Font>
    </div>
  </div>

)

export default ImgChangeDay
