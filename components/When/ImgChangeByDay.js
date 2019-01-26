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
    @media (min-width:420px) {
      margin-top:4em;
    }
    @media (min-width:768px) {
      margin-top:0em;
    }
`

const BoxInfo = [
  {
    src: date1.isBefore(datenow) ? '../../static/img/wippo/wippoWhat.png' : '../../static/img/wippo/original-2.png',
    text: 'กำหนดเปิดรับสมัคร',
    textday: '8 มกราคม 2562'
  },
  {
    src: date2.isBefore(datenow) ? '../../static/img/wippo/wippoWho.png' : '../../static/img/wippo/original-2.png',
    text: 'วันประกาศผล',
    textday: '11 มกราคม 2562'
  },
  {
    src: date3.isBefore(datenow) ? '../../static/img/wippo/wippoWhere.png' : '../../static/img/wippo/original-2.png',
    text: 'กำหนดปิดรับสมัคร',
    textday: '14 มกราคม 2562'
  },
  {
    src: date4.isBefore(datenow) ? '../../static/img/wippo/wippoGame.png' : '../../static/img/wippo/original-2.png',
    text: 'วันเปิดค่าย',
    textday: '17 มกราคม 2562'
  }
]
const ImgChangeDay = () => (
  <div className="row justify-content-center">
    {
      BoxInfo.map((data) => (
        <div className="pl-lg-5 col-12 col-sm-12 col-lg-3 col-md-3 col-xl-3">
          <div className="row">
            <div className="p-0 col-6 col-sm-6 col-lg-12 col-md-12 col-xl-12 text-center">
              <Img src={data.src}/>
            </div>
            <Font className="ml-lg-3 pb-4 p-0 col-6 col-sm-6 col-lg-12 col-md-12 col-xl-12 text-center">
              <TextBoxLong text={data.text} textday={data.textday} />
            </Font>
          </div>
        </div>
      ))
    }
  </div>
)

export default ImgChangeDay
