import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle, Paragraph, Small } from '../Core/Texts'

const Icon = styled.img`
  width:7em;
  @media (min-width:320px) {
    width:4em;
  }
  @media (min-width:420px) {
    margin-top: 2%;
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

const IconInfo = [
  { icon: '/static/img/icon-what/java (2).png', text: 'Java Programming', t: 'Java Programming' },
  { icon: '/static/img/icon-what/IT fun (1).png', text: 'IT Fundamentals', t: 'IT Fundamentals' },
  { icon: '/static/img/icon-what/network (2).png', text: 'Network', t: 'Network' },
  { icon: '/static/img/icon-what/web (2).png', text: 'HTML5&CSS3', t: 'HTML5&CSS3' }
]

const BoxStyle = styled.div`
    background: rgba(196, 196, 196, 0.73);
    text-align : left;

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
const Head = styled.div`
  text-align:center;
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

export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <Head className="text-center col-12">
                <Headline>What</Headline>
              </Head>
              <BoxStyle>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <Subtitle className = "mb-4"><b>ค่ายนี้คืออะไร ?</b></Subtitle>
                  </div>
                  <Paragraph>
                    <Font>
                      &nbsp;&nbsp;&nbsp;&nbsp;ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้มีความสนใจด้านไอที หรือผู้ต้องการค้นหาตนเอง โดยน้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริงณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน
                    </Font>
                    <Font>
                      &nbsp;&nbsp;&nbsp;&nbsp;WIP Camp ประกอบด้วยการเรียน และลงมือปฏิบัติจริงด้านวิชาการ ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน
                    </Font>
                    <Font>
                      &nbsp;&nbsp;&nbsp;&nbsp;กว่าทศวรรษที่ WIP Camp ขอเป็นก้าวเล็ก ๆ ในการช่วยเหลือน้อง ๆ ให้ค้นพบกล่องดวงใจที่ทุกคนตามหา และเดินตามเส้นทางความฝันที่น้อง ๆ หวังไว้ !!
                    </Font>
                  </Paragraph>

                </div>
                <div className="row text-center mt-2">
                  {
                    IconInfo.map((info, i) => (
                      <div key={i} className="col-6 col-md-3 p-1">
                        <Icon src={info.icon} alt={info.t} />
                        <Small>{info.text}</Small>
                      </div>
                    ))
                  }
                </div>
              </BoxStyle>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
