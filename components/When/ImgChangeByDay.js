import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const datenow = dayjs().format()
const date1 = dayjs('2019-01-08')
const date2 = dayjs('2019-01-12')
const date3 = dayjs('2019-01-20')
const date4 = dayjs('2019-01-31')
// const date = (props) => (props.datetime)


const ImgChangeDay = (props) => (
  <div>
    <span>
      <img src={date1.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
    </span>
    <span>
      <img src={date2.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
    </span>
    <span>
      <img src={date3.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
    </span>
    <span>
      <img src={date4.isBefore(datenow) ? '../../static/img/wippo/mochi.png' : '../../static/img/wippo/sakura.png'} />
    </span>
  </div>
)

export default ImgChangeDay
