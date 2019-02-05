import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import { FontFAQs } from '../Core/Texts'

const datenow = dayjs().format()
const date1 = dayjs('2019-01-07')
const date2 = dayjs('2019-01-11')
const date3 = dayjs('2019-01-14')
const date4 = dayjs('2019-01-17')

const Img = styled.img`
    content:url('../../static/img/when/${(props) => props.src}');
    @media (min-width:320px) {
      width:50%;
      height:65px;
    }
    @media (min-width:420px) {
      width:40%;
      height:60px;
    }
    @media (min-width:576px) {
      width:30%;
      height:70px;
    }
    @media (min-width:768px) {
      width:50%;
      height:110px;
    }
    @media (min-width:1024px) {
      width:50%;
      height: 120px;
    }
`
const ImgDiv = styled.div`
  margin-top:0.25em;
  @media (min-width:1024px) {
      margin-top:0em;
      margin-left:1.5em;
    }
`

const Font = styled.div`
    @media (min-width:320px) {
      margin-top:1em;
      padding-left:0.25rem;
      padding-right:0.25rem;
    }
    @media (min-width:420px) {
      margin-top:2em;
      padding-left:1.5rem;
      padding-right:1.5rem;
    }
    @media (min-width:576px) {
      margin-top:2em;
      padding-left:2rem;
      padding-right:2rem;
    }
    @media (min-width:768px) {
      margin-top:0em;
      padding-left:0.02em;
      padding-right:0.02em;
    }
    @media (min-width:1024px) {
      margin-top:0em;
      margin-left:1.5em;
      padding-left:0;
      padding-right:0;
    }
`

const BoxInfo = [
  {
    src: date1.isBefore(datenow) ? 'wippoWhat.png' : 'original-2.png',
    text: 'เปิดรับสมัคร',
    textday: '8 มกราคม 2562'
  },
  {
    src: date2.isBefore(datenow) ? 'wippoWho.png' : 'original-2.png',
    text: 'ประกาศผล',
    textday: '11 มกราคม 2562'
  },
  {
    src: date3.isBefore(datenow) ? 'wippoWhere.png' : 'original-2.png',
    text: 'ปิดรับสมัคร',
    textday: '14 มกราคม 2562'
  },
  {
    src: date4.isBefore(datenow) ? 'wippoGame.png' : 'original-2.png',
    text: 'เปิดค่าย',
    textday: '17 พฤษภาคม 2562 <br /> ถึง  18 พฤษภาคม 2562'
  }
]

const ImgChangeDay = (props) => (
  <div className="row justify-content-center">
    {
      BoxInfo.map((data, i) => (
        <div className=" pt-lg-4 pl-lg-4 col-12 col-sm-12 col-lg-3 col-md-3 col-xl-3" key = {i}>
          <div className="row justify-content-center">
            <ImgDiv className="pl-0 pr-0 col-4 col-sm-5 col-lg-12 col-md-12 col-xl-12  text-center">
              <Img src={data.src}/>
            </ImgDiv>
            <Font className="col-8 col-sm-7 col-lg-12 col-md-12 col-xl-12 text-center">
              <FontFAQs><div dangerouslySetInnerHTML={{ __html: data.text }} /></FontFAQs>
              <FontFAQs><div dangerouslySetInnerHTML={{ __html: data.textday }} /></FontFAQs>
            </Font>
          </div>
        </div>
      ))
    }
  </div>
)

export default ImgChangeDay
