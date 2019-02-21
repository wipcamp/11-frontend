import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, FontFAQs } from '../Core/Texts'
import { PDBox } from '../Core/ResponBox'
import Background from './background'
import Bg from '../Core/Bg'
import WippoFAQ from '../Core/WippoFAQ'

const Bg1 = styled(Bg)`
  height: 100%;
`

const QuestionText = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: black;
  background-color: #E0D6C2!important;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const AnswerText = styled.div`
  background-color: #CDB4A2!important;
`

const Arrow = styled.img`
  float: right;
  transform: rotate(${(props) => props.deg});
  transition: all .5s linear;
  @media(min-width:320px) {
    width: 15px;
    margin-top: -2vh;
    margin-right: -1.5vh;
  }
  @media(min-width:851px) {
    width: 25px;
    margin-top: -0vh;
  }
  @media(min-width:1024px) {
    width: 25px;
    margin-top: 0.5vh;
  }
`

const Desktop = styled.div`
  @media(min-width:320px) {
    display:none;
  }
  @media (min-width:410px) {
    display:none;
  }
  @media (min-width:576px) {
    display:none;
  }
  @media (min-width:768px) {
    display:block;
  }
  @media(min-width:1024px) {
    display:block;
  }
`
const Moblie = styled.div`
  @media(min-width:320px) {
    display:block;

  }
  @media (min-width:410px) {
    display:block;
  }
  @media (min-width:576px) {
    display:block;
  }
  @media (min-width:768px) {
    display:none;
  }
  @media(min-width:1024px) {
    display:none;
  }
`

export default class Question extends Component {
  state = {
    QandA :[
      { 
        question: 'อยากมาเข้าร่วมค่ายนี้มาก ๆ ต้องทำอย่างไร', 
        questionMobile: 'อยากมาเข้าร่วมค่ายนี้มาก ๆ ต้องทำอย่างไร ?', 
        num : 'One',
        show : 'show',
        rotate:'180deg',
        answer: 'ศิษย์น้อง เจ้าจะต้องตอบคำถามให้ครบถ้วน ด้วยความสามารถเต็มที่ทั้งหมดที่มีด้วยตัวเจ้าเอง เพื่อแสดงถึงความตั้งใจ และเจตจำนงของเจ้า จากนั้นกดส่งเพื่อยืนยันคำตอบให้เรียบร้อยเป็นพอ และรอติดตามผลผ่านทางเพจ WIP Camp หรือเว็บไซต์นี้ได้เลย' 
      },
      { 
        question: 'รับสมัครคนเข้าค่ายกี่คน', 
        questionMobile: 'รับสมัครคนเข้าค่ายกี่คน ?', 
        num:'Two',
        rotate:'0deg',
        answer: 'สำนัก WIP Camp ปีที่ 11 นี้ รับสมัครศิษย์เข้าร่วมสำนักจำนวน 100 คนครับ' 
      },
      { 
        question: 'ไม่เคยเขียนโปรแกรม ไม่เคยทำเว็บมาก่อน มีความรู้เกี่ยวกับไอทีไม่มาก จะเข้าค่ายนี้ได้ หรือไม่', 
        questionMobile: 'ไม่เคยเขียนโปรแกรม ไม่เคยทำเว็บมาก่อน มีความรู้ <br /> เกี่ยวกับไอทีไม่มาก จะเข้าค่ายนี้ได้ หรือไม่ ?', 
        num:'Three',
        rotate:'0deg',
        answer: 'ศิษย์น้องเอ๋ย ไม่มีมนุษย์ผู้ใดที่เก่งในทุกศาสตร์ชำนาญในทุกศิลป์ ไม่มีมนุษย์ผู้ใดที่ล้มเหลวหากได้ลองพยายามแล้ว ด้วยเหตุนั้น ขอเพียงมีความตั้งใจ ศึกษาความรู้ในเบื้องต้นมาสักนิด และพร้อมที่จะยอมรับสิ่งใหม่ ๆ เข้ามาอยู่เสมอ เพียงเท่านั้นก็พอแล้ว' 
      },
      { 
        question: 'พักค้างคืนที่ไหน', 
        questionMobile: 'พักค้างคืนที่ไหน ?', 
        num:'Four',
        rotate:'0deg',
        answer: 'สำหรับที่พัก และห้องน้ำนั้น อยู่ภายในหอพักนักศึกษา มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ซึ่งมีเหล่าศิษย์พี่ในสำนัก รวมไปถึงฝ่ายพยาบาล ที่จะคอยดูแลศิษย์น้องตลอด 24 ชั่วโมง คลายความกังวลจากผู้ปกครองของศิษย์น้องได้เลย' 
      },
      {
        question: 'น้อง ๆ จะได้รับอะไรจากการมาค่าย',
        questionMobile: 'น้อง ๆ จะได้รับอะไรจากการมาค่าย ?',
        num:'Five', 
        rotate:'0deg',
        answer: 'ศิษย์น้องในอนาคตของข้า ขอแค่เพียงเจ้าก้าวเท้าเข้ามาในสำนักนี้ แม้สุดท้ายแล้วเจ้าจะคิดว่าเส้นทางแห่งไอทีนี้ไม่ใช่ทางที่คาดหมายไว้ แต่มันก็ทำให้เจ้าได้มิตรภาพดี ๆ จากศิษย์ร่วมสำนัก ความรู้ ความสนุกสนานจากศิษย์พี่ และยังได้รู้จักตัวเองมากขึ้นอย่างแน่นอน สุดท้ายนี้ หากเจ้าผ่านการฝึกฝน เจ้าจะได้รับ "ประกาศนียบัตร" จากทางสำนักด้วย' 
      },
      { 
        question: 'ค่ายนี้มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่', 
        questionMobile: 'ค่ายนี้มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่ ?', 
        num:'Six',
        rotate:'0deg',
        answer: 'ศิษย์น้อง สำหรับค่าใช้จ่ายนั้น ไว้สำหรับค่าอาหาร และที่พักของเจ้า เป็นจำนวนเงิน 450 บาท โดยสามารถโอนชำระได้ผ่านทางธนาคารที่เจ้าสะดวก โดยชำระ "หลังจากผ่านการคัดเลือกแล้ว" เท่านั้น' 
      },
      {
        question: 'ต้องอัพโหลดเอกสารทางไหน และมีอะไรบ้าง', 
        questionMobile: 'ต้องอัพโหลดเอกสารทางไหน และมีอะไรบ้าง ?', 
        num:'Seven',
        rotate:'0deg',
        answer: 'ศิษย์น้องที่รัก มีแค่เพียงผู้ที่ผ่านปราการแห่งการตอบคำถามเสร็จสิ้น และเป็นผู้ผ่านการคัดเลือกแล้วเท่านั้น ที่จะต้องอัพเอกสารเข้ามา ขอเพียงเจ้าตอบคำถามให้เต็มความสามารถ แค่นี้เจ้าก็มีสิทธิ์ที่จะผ่านการคัดเลือกแล้ว โดยจะต้องเตรียมใบปพ.1 หรือใบแสดงผลการเรียนเทอมล่าสุดไว้ให้พร้อมเสมอ' 
      }
    ]
  };

  handleOnClick = (i) => {
    const stateCopy = Object.assign({}, this.state);
                      stateCopy.QandA = stateCopy.QandA.slice();
                      stateCopy.QandA[i] = Object.assign({}, stateCopy.QandA[i]);
                      this.setState(stateCopy);
                      if (this.state.QandA[i].rotate === '180deg') {
                        stateCopy.QandA[i].rotate = '0deg';
                      }
                      else {
                        stateCopy.QandA[i].rotate = '180deg';
                      }

    if(i===0){
      i=0;
      { stateCopy }
    }
    else if(!(i===0)){
      stateCopy.QandA[0].rotate = '0deg';
    }

    if(i===1){
      i = 1;
      { stateCopy }
    }
    else if(!(i===1)){
      stateCopy.QandA[1].rotate = '0deg';
    }
    
    if(i===2){
      i = 2;
      { stateCopy }
    }
    else if(!(i===2)){
      stateCopy.QandA[2].rotate = '0deg';
    }
    
    if(i===3){
      i = 3;
      { stateCopy }
    }
    else if(!(i===3)){
      stateCopy.QandA[3].rotate = '0deg';
    }

    if(i===4){
      i = 4;
      { stateCopy }
    }
    else if(!(i===4)){
      stateCopy.QandA[4].rotate = '0deg';
    }
    
    if(i===5){
      i = 5;
      { stateCopy }
    }
    else if(!(i===5)){
      stateCopy.QandA[5].rotate = '0deg';
    }
    if(i===6){
      i = 6;
      { stateCopy }
    }
    else if(!(i===6)){
      stateCopy.QandA[6].rotate = '0deg';
    }
  }

  render() {
    const QA = this.state.QandA
    return (
      <Bg1>
        <Background />
        <WippoFAQ src='../../static/img/wippo/wippoFAQs.png' />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                <div className="text-center col-12 mb-4">
                  <h1><Headline>FAQs</Headline></h1>
                  <b><Subtitle>คำถามที่พบบ่อย ?</Subtitle></b>
                </div>
                <div className="col-12">
                  <div className="pb-4">
                    <div className="col-12">
                      <div id="accordion">
                        {
                          QA.map((data, i) => {
                            return (
                              <React.Fragment key={i}>
                                <FontFAQs>
                                  <Desktop>
                                  <QuestionText className="card-link" data-toggle="collapse" href={`#collapse${data.num}`}>
                                    <div className="card-header px-4" onClick={() => this.handleOnClick(i)}>
                                    
                                    {data.question} ?
                                      <Arrow src='../../static/img/downarrow.png' deg={data.rotate} />
                                  </div>
                                  </QuestionText>
                                  </Desktop>
                                  <Moblie>
                                  <QuestionText className="card-link" data-toggle="collapse" href={`#collapse${data.num}`}>
                                    <div className="card-header px-4" onClick={() => this.handleOnClick(i)}>
                                    <div dangerouslySetInnerHTML={{ __html: data.questionMobile }} />
                                      <Arrow src='../../static/img/downarrow.png' deg={data.rotate} />
                                  </div>
                                  </QuestionText>
                                  </Moblie>
                                <div id={`collapse${data.num}`} className={`collapse ${data.show}`} data-parent="#accordion">
                                  <AnswerText className="card-body px-4">
                                    {data.answer}
                                  </AnswerText>
                                  </div>
                                </FontFAQs>
                              </React.Fragment>
                            )
                          }
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Bg1>
    )
  }
}
