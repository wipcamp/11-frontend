import React, { Component } from 'react'
import { 
  DesktopScripture,
  DesktopText, 
  MobileScripture, 
  ImgBeforeEntrance,
  ImgAfterEntrance, 
  Base, 
  Shadow,
  Linen,
  Box,
  MobileText } from './Responsive'

const Desktop = (props) => (
  <DesktopScripture discription={props.discription}> {/* porps send change animation or don't */}
    <DesktopText>{props.text}</DesktopText> {/* change text */}
  </DesktopScripture>
) 

const Mobile = (props) => (
  <MobileScripture>{/* props send none and block and show or don't show  */}
    <Box className="row justify-content-center">
      <ImgBeforeEntrance before={props.before} src="/static/img/announce/_Scripture.png" />
      <ImgAfterEntrance display={props.display} src="/static/img/announce/_ScriptureFull.png" />
      <MobileText display={props.display}>{props.text}</MobileText>
    </Box>
  </MobileScripture>
)

const Animation = (props) => (
  <React.Fragment>
    <Desktop discription={props.discription} text={props.text} />
    <Mobile display={props.display} text={props.text} before={props.before} />
  </React.Fragment>
)

export default class Treatise extends Component {
  
  componentDidMount(){
    console.log(this.props.click, this.props.text);
    this.handleState(this.props.click, this.props.text);
  }
  
//1101 * 760
  state = {
    discription: 'swing 1s linear infinite',
    display: 'hidden',
    before: 'visible',
    text : '',
  }

  handleState = (click, text) => { //check login
    if (click === true) { //if login success change count to one and change animation on desktop or show on mobile(iPad)
      this.setState({
        before: 'hidden',
        display: 'visible',
        discription: 'spin 3s linear forwards'
      })
    }
    else if (click === false) {
      this.setState({ //if login fail don't play animation on desktop or don't show on mobile(iPad)
        before: 'visible',
        display: 'hidden',
        discription:'swing 1s linear infinite'
      })
    }
    if(text === true ){
      this.setState({ // ถ้าติด
        text: 'ขอแสดงความยินดีกับน้องไอติมที่ผ่านรอบคัดเลือกเข้าค่าย WIP Camp #11'
      })
    }
    else if(text === false){
      this.setState({ // ถ้าไม่ติด
        text: 'ขอแสดงความเสียใจน้องไม่ผ่านการคัดเลือกเข้าค่าย WIP Camp #11 ครับ ไว้กลับมาสมัครใหม่อีกครั้งในปีหน้านะครับ'
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center" id="background">
          <Base src='../../static/img/announce/_Scripture base.png' />
          <Shadow src='../../static/img/announce/Scripturebaseshadow.png' />
          <Linen src='../../static/img/announce/linen.png' />
        </div>
        <div className="row justify-content-center">
          <Animation 
            discription={this.state.discription}
            display = {this.state.display}
            before={this.state.before}
            text = {this.state.text}
          />
        </div>
      </React.Fragment>
    )
  }
}
