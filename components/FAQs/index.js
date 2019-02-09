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
  /* content : url('../../static/img/downarrow.png'); */
  float: right;
  width: 3%;
  height: 3%;
  transform: rotate(${(props) => props.deg});
  transition: all .5s linear;
`


export default class Question extends Component {
  state = {
    QandA :[
      { 
        question: 'อยากเป็นส่วนหนึ่งของค่ายนี้มาก ๆ ต้องทำอย่างไร', 
        num : 'One',
        rotate:'0deg',
        value : false,
        answer: 'น้องเอ๋ย สิ่งที่น้องต้องทำมีเพียงตอบคำถามในการสมัครด้วยตัวเองเพื่อแสดงถึงตัวตนของน้อง จงใช้ความตั้งใจในการตอบคำถาม และอีกสิ่งหนึ่งที่จะลืมไม่ได้ น้องเอ๋ย โปรดจงอัพโหลดเอกสารให้ครบถ้วน และถูกต้องตามที่กำหนดเสียด้วย' 
      },
      { 
        question: 'ไม่มีความรู้เกี่ยวกับคอมพิวเตอร์มากนัก จะเข้าค่ายนี้ได้ หรือไม่', 
        num:'Two',
        rotate:'0deg',
        value : false,
        answer: 'น้องเอ๋ย ไม่มีใครเก่งทุกอย่างได้โดยไร้การฝึกฝน เพียงแค่น้องมีความมุ่งมั่นที่จะศึกษาเรียนรู้ หรือมีพื้นฐานมาทางด้านไอทีมาบ้าง และเปิดใจที่จะทำความเข้าใจในโลกไอที น้องก็สามารถสมัครค่ายนี้ได้' 
      },
      { 
        question: 'ค่ายนี้เป็นค่ายวิชาการ เครียดมากไหม มีกิจกรรมไหม', 
        num:'Three',
        rotate:'0deg',
        value : false,
        answer: 'ค่ายนี้เต็มที่ทั้งวิชาการ และกิจกรรม น้องเอ๋ย น้องจะได้รับทั้งความรู้ และความสนุกสนาน น้องไม่ต้องกลัวว่าจะเครียด หรือว่าค่ายนี้จะโหด พี่ ๆ ทุกคนในค่ายเป็นกันเอง พี่ ๆ พร้อมให้ความรู้และความบันเทิงแก่น้อง ๆ ตลอดเวลา' 
      },
      { 
        question: 'นอนที่ไหน ห้องน้ำเป็นอย่างไรบ้าง', 
        num:'Four',
        rotate:'0deg',
        value : false,
        answer: 'น้องเอ๋ย น้องจะได้พักค้างแรมภายในหอพักของทางมหาวิทยาลัย ซึ่งจะมีพี่ ๆ คอยดูแลตลอด 24 ชั่วโมง รวมถึงพี่พยาบาลที่จะช่วยเหลือในกรณีน้อง ๆ ไม่สบาย และพร้อมจะปฐมพยาบาลเบื้องต้นให้น้อง ๆ ตลอดระยะเวลาค่าย น้อง ๆ สามารถบอกผู้ปกครองได้เลยว่าไม่ต้องกังวล' 
      },
      { 
        question: 'ค่ายนี้มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่',
        num:'Five', 
        rotate:'0deg',
        value : false,
        answer: 'ค่ายนี้มีค่าใช้จ่าย 450 บาท น้องเอ๋ย สามารถชำระได้ผ่านธนาคาร ติดตามได้ทางแฟนเพจนะน้องเอ๋ย' 
      },
      { 
        question: 'น้อง ๆ จะได้รับอะไรจากการมาค่าย', 
        num:'Six',
        rotate:'0deg',
        value : false,
        answer: 'น้องจะได้รู้ว่ากล่องดวงใจสำหรับตัวน้องคืออะไร น้องจะได้รับความรู้ด้านไอที จากพี่ ๆ หลักสูตรเทคโนโลยีสารสนเทศ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีครับ รวมถึงความสนุกสนานที่พี่ ๆ เตรียมไว้สำหรับน้อง ๆ ทุกคน อีกทั้งยังได้มิตรภาพจากเพื่อน ๆ และพี่ ๆ ภายในค่าย ที่สำคัญนะน้องเอ๋ย น้องจะได้รับประกาศนียบัตรจากทางค่าย เพื่อรับรองว่าน้องได้มาเข้าค่ายนี้' 
      },
    ]
  };
  handleOnClick = (i) => {
    const stateCopy = Object.assign({}, this.state);
                      stateCopy.QandA = stateCopy.QandA.slice();
                      stateCopy.QandA[i] = Object.assign({}, stateCopy.QandA[i]);
                      this.setState(stateCopy);
    const AnimationArrow = stateCopy.QandA[i].rotate = this.state.QandA[i].value ? '0deg' : '180deg';
    
    const Value = stateCopy.QandA[i].value = !this.state.QandA[i].value;
                  if(this.state.QandA[i].value === true){
                    stateCopy.QandA[i].value = !this.state.QandA[i].value;
                  }
                  else{
                    stateCopy.QandA[i].value = !this.state.QandA[i].value;
                  }

    const FunctionArrow = 
          { Value } 
          { AnimationArrow }

    if(i===0){
      { FunctionArrow }
    }
    else if(i===1){
      { FunctionArrow }
    }
    else if(i===2){
      { FunctionArrow }
    }
    else if(i===3){
      { FunctionArrow }
    }
    else if(i===4){
      { FunctionArrow }
    }
    else if(i===5){
      { FunctionArrow }
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
                  <b><Subtitle>คำถามที่พบบ่อย?</Subtitle></b>
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
                                  <QuestionText className="card-link bg-secondary" data-toggle="collapse" href={`#collapse${data.num}`}>
                                    <div className="card-header px-4" onClick={() => this.handleOnClick(i)}>
                                    Q : {data.question} ?
                                      <Arrow src='../../static/img/downarrow.png' deg={data.rotate} />
                                  </div>
                                </QuestionText>
                                
                                <div id={`collapse${data.num}`} className = {`collapse`}  data-parent="#accordion">
                                  <AnswerText className="card-body bg-light px-4">
                                    A : {data.answer}
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
