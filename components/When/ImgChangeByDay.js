import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import { FontFAQs } from '../Core/Texts'

const datenow = dayjs().format()
// const datenow = dayjs('2019-01-07')
const dateStartResgis = dayjs('2019-02-11')
const dateEndRegis = dayjs('2019-03-11')
const dateStartAnnounced = dayjs('2019-03-29')
const dateStartCamp = dayjs('2019-05-29')

const Font1 = styled(FontFAQs)`
  font-weight:bold;
`

const Img = styled.img`
    content:url(${(props) => props.src});
    /* content:url('../../static/img/when/${(props) => props.src}'); */
    @media (min-width:320px) {
      width:35px;
      height:56px;
    }
    @media (min-width:420px) {
      width:45px;
      height:65px;
    }
    @media (min-width:576px) {
      width:55px;
      height:85px;
    }
    @media (min-width:768px) {
      width:80px;
      height:120px;
    }
    @media (min-width:1024px) {
      width:110px;
      height: 165px;
    }
`
const ImgDiv = styled.div`
  margin-top:0.25em;
  @media (min-width:320px) {
      margin-top:0.5em;
    }
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
    /* @media (min-width:420px) {
      margin-top:2em;
      padding-left:2rem;
      padding-right:2rem;
    } */
    @media (min-width:420px) {
      margin-top:1em;
      padding-left:2rem;
      padding-right:2rem;
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

const Div = styled.div`
  @media (min-width:992px) {
    margin-left:4em;
  }
  @media (min-width:1024px) {
    margin-left:2.5em;
  }
  @media (min-width:1200px) {
    margin-left:5em;
  }
  @media (min-width:1500px) {
    margin-left:6em;
  }
  
`

const BoxInfo = [
  {
    src: dateStartResgis.isBefore(datenow) ? '../../static/img/when/wippoWhat.png' : '../../static/img/when/11.png',
    text: 'เปิดรับสมัคร',
    textday: '11 กุมภาพันธ์ 2562'
  },
  {
    src: dateStartAnnounced.isBefore(datenow) ? '../../static/img/when/wippoWhere.png' : '../../static/img/when/13.png',
    text: 'ปิดรับสมัคร',
    textday: '11 มีนาคม 2562'
  },
  {
    src: dateEndRegis.isBefore(datenow) ? '../../static/img/when/wippoWho.png' : '../../static/img/when/12.png',
    text: 'ประกาศผล',
    textday: '29 มีนาคม 2562'
  },
  {
    src: dateStartCamp.isBefore(datenow) ? '../../static/img/when/wippoGame.png' : '../../static/img/when/14.png',
    text: 'เปิดค่าย',
    textday: '29 พฤษภาคม 2562 <br /> ถึง  2 มิถุนายน 2562'
  }
]

const ImgChangeDay = (props) => (
  <Div className="row justify-content-center">
    {
      BoxInfo.map((data, i) => (
        <div className=" pt-lg-4 pl-lg-4 col-12 col-sm-12 col-lg-3 col-md-3 col-xl-3" key = {i}>
          <div className="row justify-content-center">
            <ImgDiv className="pl-0 pr-0 col-4 col-sm-5 col-lg-12 col-md-12 col-xl-12  text-center">
              <Img src={data.src}/>
            </ImgDiv>
            <Font className="col-8 col-sm-7 col-lg-12 col-md-12 col-xl-12 text-center">
              <Font1><div dangerouslySetInnerHTML={{ __html: data.text }} /></Font1>
              <FontFAQs><div dangerouslySetInnerHTML={{ __html: data.textday }} /></FontFAQs>
            </Font>
          </div>
        </div>
      ))
    }
  </Div>
)

export default ImgChangeDay
