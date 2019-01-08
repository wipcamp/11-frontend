import React, { Component } from 'react'
import styled from 'styled-components'
import Headline, { Subtitle , Paragraph} from '../Core/Texts';


const Info = styled.div`
  margin-top: 2%;
`
const Test = styled.div`
  padding: 1px;

`
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
  cursor:pointer;
  &:hover{
    background: transparent;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 0.5em;
    border: 4px solid transparent;
    
  }
  &:active{
  background: transparent;
  -moz-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  border-radius: 1em;
  border-radius: 0.5em;
  border: 4px solid transparent;
  }  
`
const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`
const IconInfo = [
  { icon: "/static/img/icon-what/java (2).png", text: "Java Programming", t: "Java Programming" },
  { icon: "/static/img/icon-what/IT fun (1).png", text: "IT Fundamentals", t: "IT Fundamentals" },
  { icon: "/static/img/icon-what/network (2).png", text: "Network", t: "Network" },
  { icon: "/static/img/icon-what/web (2).png", text: "HTML5&CSS3", t: "HTML5&CSS3" }
]

const BoxStyle = styled.div`
    background: papayawhip;
    text-align : center;
    padding : 2em 5em;
`
const Head = styled.div`
  text-align:center;

`
export default class index extends Component {
  render() {
    return (

    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
        <Head>
          <Headline>What</Headline>
          <Subtitle>ค่ายนี้คืออะไร ?</Subtitle>
        </Head>
        <BoxStyle>
          <div className="col-12">
            <Paragraph>
              &nbsp;&nbsp;&nbsp;&nbsp;ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้มีความสนใจด้านไอที หรือผู้ต้องการค้นหาตนเอง โดยน้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริงณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp;&nbsp;&nbsp;WIP Camp ประกอบด้วยการเรียน และลงมือปฏิบัติจริงด้านวิชาการ ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp;&nbsp;&nbsp;กว่าทศวรรษที่ WIP Camp ขอเป็นก้าวเล็ก ๆ ในการช่วยเหลือน้อง ๆ ให้ค้นพบกล่องดวงใจที่ทุกคนตามหา และเดินตามเส้นทางความฝันที่น้อง ๆ หวังไว้ !!
            </Paragraph>
          </div>
            <Info className="row text-center">
                  {
                    IconInfo.map((info, i) => (
                      <Test key={i} className="col-6 col-md-3 ">
                        <Icon src={info.icon} alt={info.t} />
                        <Paragraph>{info.text}</Paragraph>
                      </Test>
                    ))
                  }
            </Info> 
        </BoxStyle>
        </div>
      </div>
    </div>
    
    )
  }
}
